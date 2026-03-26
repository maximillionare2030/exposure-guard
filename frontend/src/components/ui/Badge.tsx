import type { PropsWithChildren } from 'react'

type BadgeTone = 'neutral' | 'accent' | 'success' | 'danger'

type BadgeProps = PropsWithChildren<{
  tone?: BadgeTone
}>

export function Badge({ children, tone = 'neutral' }: BadgeProps) {
  return <span className={`ui-badge ui-badge--${tone}`}>{children}</span>
}
