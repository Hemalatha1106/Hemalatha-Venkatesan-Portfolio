export type AchievementTone = 'pink' | 'yellow' | 'mint' | 'peach'

export interface AchievementItem {
  id: string
  number: string
  category: string
  title: string
  description: string
  date: string
  image: string
  imageAlt: string
  tone: AchievementTone
  icon: '*' | '↗' | '♥'
}
