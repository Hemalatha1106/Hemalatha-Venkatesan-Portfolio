'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import type { AchievementItem } from './types'

interface AchievementCardProps {
  achievement: AchievementItem
  offset: number
  isActive: boolean
  stepX: number
  cardWidth: number
  sideScale: number
  reducedMotion: boolean
  onSelect: () => void
}

const SPRING_TRANSITION = {
  type: 'spring' as const,
  stiffness: 270,
  damping: 28,
  mass: 0.9,
}

export function AchievementCard({
  achievement,
  offset,
  isActive,
  stepX,
  cardWidth,
  sideScale,
  reducedMotion,
  onSelect,
}: AchievementCardProps) {
  const absOffset = Math.abs(offset)
  const isAdjacent = absOffset === 1
  const isVisible = absOffset <= 1

  const targetScale = isActive ? 1 : isAdjacent ? sideScale : 0.7
  const targetOpacity = isActive ? 1 : isAdjacent ? 0.74 : 0
  const targetRotate = isActive ? 0 : offset < 0 ? -2.4 : 2.4
  const zIndex = isActive ? 30 : isAdjacent ? 20 : 5
  const photoHeight = Math.round(cardWidth * (isActive ? 0.68 : 0.54))

  return (
    <motion.article
      className={`achievement-card achievement-tone-${achievement.tone} ${
        isActive ? 'is-active' : 'is-side'
      }`}
      style={{
        width: cardWidth,
        zIndex,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      initial={false}
      animate={{
        x: offset * stepX,
        y: 0,
        scale: targetScale,
        opacity: targetOpacity,
        rotate: targetRotate,
      }}
      whileHover={
        isAdjacent && !reducedMotion
          ? {
              scale: sideScale + 0.03,
              opacity: 0.92,
              y: -6,
            }
          : undefined
      }
      transition={
        reducedMotion
          ? { duration: 0.18, ease: 'easeOut' }
          : SPRING_TRANSITION
      }
      onClick={() => {
        if (!isActive) {
          onSelect()
        }
      }}
      aria-hidden={!isVisible}
      aria-current={isActive ? 'true' : undefined}
    >
      {/* Decorative masking tape strip on the active card */}
      <span className="achievement-tape" aria-hidden="true" />

      <div className="achievement-card-top">
        <span className="achievement-kicker">
          {achievement.number} / {achievement.category}
        </span>
        <span className="achievement-spark" aria-hidden="true">
          {achievement.icon}
        </span>
      </div>

      <motion.div
        className="achievement-photo-frame"
        initial={false}
        animate={{ height: photoHeight }}
        transition={
          reducedMotion
            ? { duration: 0.18, ease: 'easeOut' }
            : SPRING_TRANSITION
        }
      >
        <Image
          src={achievement.image}
          alt={achievement.imageAlt}
          fill
          sizes="(max-width: 560px) 84vw, (max-width: 900px) 360px, 430px"
          loading={isVisible ? 'eager' : 'lazy'}
          className="achievement-photo"
          draggable={false}
        />
        {isActive && (
          <span className="achievement-badge" aria-hidden="true">
            milestone ★
          </span>
        )}
      </motion.div>

      <div className="achievement-body">
        <h3 className="achievement-title">{achievement.title}</h3>
        <p
          className={`achievement-desc ${
            isActive ? 'is-expanded' : 'is-condensed'
          }`}
        >
          {achievement.description}
        </p>
      </div>

      <div className="achievement-footer">
        <span className="achievement-date">{achievement.date}</span>
        {!isActive && isAdjacent && (
          <button
            type="button"
            className="achievement-focus-btn"
            onClick={(event) => {
              event.stopPropagation()
              onSelect()
            }}
            aria-label={`View ${achievement.title}`}
          >
            focus →
          </button>
        )}
      </div>
    </motion.article>
  )
}
