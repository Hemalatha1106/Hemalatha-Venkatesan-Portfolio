'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, type PanInfo } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AchievementCard } from './achievement-card'
import type { AchievementItem } from './types'

interface AchievementCarouselProps {
  items: AchievementItem[]
}

interface CarouselMetrics {
  cardWidth: number
  stepX: number
  stageHeight: number
  sideScale: number
}

const DEFAULT_METRICS: CarouselMetrics = {
  cardWidth: 430,
  stepX: 395,
  stageHeight: 595,
  sideScale: 0.83,
}

const VISIBLE_OFFSETS = [-2, -1, 0, 1, 2] as const
const DRAG_DISTANCE_THRESHOLD = 48
const DRAG_VELOCITY_THRESHOLD = 280
const WHEEL_THRESHOLD = 26
const WHEEL_COOLDOWN_MS = 380

function wrapIndex(index: number, length: number): number {
  return ((index % length) + length) % length
}

export function AchievementCarousel({ items }: AchievementCarouselProps) {
  // Continuous virtual index keeps circular transitions directional without wrap fly-throughs.
  const [virtualIndex, setVirtualIndex] = useState(0)
  const [metrics, setMetrics] = useState<CarouselMetrics>(DEFAULT_METRICS)
  const prefersReducedMotion = Boolean(useReducedMotion())
  const didDragRef = useRef(false)
  const lastWheelAtRef = useRef(0)

  useEffect(() => {
    const computeMetrics = () => {
      const width = window.innerWidth
      if (width <= 560) {
        const cardWidth = Math.max(260, Math.min(width - 64, 326))
        setMetrics({
          cardWidth,
          stepX: Math.round(cardWidth * 0.91),
          stageHeight: 535,
          sideScale: 0.81,
        })
        return
      }
      if (width <= 900) {
        setMetrics({
          cardWidth: 360,
          stepX: 325,
          stageHeight: 560,
          sideScale: 0.82,
        })
        return
      }
      setMetrics(DEFAULT_METRICS)
    }

    computeMetrics()
    window.addEventListener('resize', computeMetrics)
    return () => window.removeEventListener('resize', computeMetrics)
  }, [])

  const total = items.length
  const activeIndex = total > 0 ? wrapIndex(virtualIndex, total) : 0
  const activeItem = items[activeIndex]

  const stepBy = useCallback((delta: number) => {
    setVirtualIndex((prev) => prev + delta)
  }, [])

  const handleDragStart = () => {
    didDragRef.current = true
  }

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    if (
      info.offset.x < -DRAG_DISTANCE_THRESHOLD ||
      info.velocity.x < -DRAG_VELOCITY_THRESHOLD
    ) {
      stepBy(1)
    } else if (
      info.offset.x > DRAG_DISTANCE_THRESHOLD ||
      info.velocity.x > DRAG_VELOCITY_THRESHOLD
    ) {
      stepBy(-1)
    }

    window.setTimeout(() => {
      didDragRef.current = false
    }, 60)
  }

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) return
    if (Math.abs(event.deltaX) < WHEEL_THRESHOLD) return

    const now = Date.now()
    if (now - lastWheelAtRef.current < WHEEL_COOLDOWN_MS) return

    lastWheelAtRef.current = now
    stepBy(event.deltaX > 0 ? 1 : -1)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      stepBy(1)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      stepBy(-1)
    }
  }

  if (total === 0) return null

  return (
    <div
      className="achievement-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Personal milestones and achievements"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="achievement-controls-bar">
        <span className="hand-note achievement-hint">
          drag, swipe, or click a card ↙
        </span>
        <div className="achievement-arrows">
          <button
            type="button"
            className="achievement-arrow-btn"
            onClick={() => stepBy(-1)}
            aria-label="Previous achievement"
          >
            <ChevronLeft size={18} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <span className="achievement-counter" aria-live="polite">
            {String(activeIndex + 1).padStart(2, '0')} /{' '}
            {String(total).padStart(2, '0')}
          </span>
          <button
            type="button"
            className="achievement-arrow-btn"
            onClick={() => stepBy(1)}
            aria-label="Next achievement"
          >
            <ChevronRight size={18} strokeWidth={2.2} aria-hidden="true" />
          </button>
        </div>
      </div>

      <motion.div
        className="achievement-stage"
        style={{ height: metrics.stageHeight }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.22}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onWheel={handleWheel}
        whileTap={{ cursor: 'grabbing' }}
      >
        {VISIBLE_OFFSETS.map((offset) => {
          const slotKey = virtualIndex + offset
          const itemIndex = wrapIndex(slotKey, total)
          const item = items[itemIndex]

          return (
            <AchievementCard
              key={slotKey}
              achievement={item}
              offset={offset}
              isActive={offset === 0}
              stepX={metrics.stepX}
              cardWidth={metrics.cardWidth}
              sideScale={metrics.sideScale}
              reducedMotion={prefersReducedMotion}
              onSelect={() => {
                if (!didDragRef.current) {
                  stepBy(offset)
                }
              }}
            />
          )
        })}
      </motion.div>

      <div className="achievement-dots" role="tablist" aria-label="Choose an achievement">
        {items.map((item, index) => {
          const selected = index === activeIndex
          // Pick shortest circular step to target index
          let delta = index - activeIndex
          if (delta > total / 2) delta -= total
          if (delta < -total / 2) delta += total

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={`Show ${item.title}`}
              className={`achievement-dot ${selected ? 'is-selected' : ''}`}
              onClick={() => stepBy(delta)}
            />
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing achievement {activeIndex + 1} of {total}: {activeItem.title}
      </p>
    </div>
  )
}
