import type { PropsWithChildren, ReactNode } from 'react'

type SurfaceTone = 'default' | 'raised' | 'soft'

type SurfaceProps = PropsWithChildren<{
  eyebrow?: string
  title?: string
  description?: string
  aside?: ReactNode
  tone?: SurfaceTone
  className?: string
}>

export function Surface({
  children,
  eyebrow,
  title,
  description,
  aside,
  tone = 'default',
  className,
}: SurfaceProps) {
  const classes = ['ui-surface', `ui-surface--${tone}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={classes}>
      {eyebrow || title || description || aside ? (
        <header className="ui-surface__header">
          <div className="ui-surface__heading">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            {title ? <h2>{title}</h2> : null}
            {description ? <p>{description}</p> : null}
          </div>
          {aside ? <div className="ui-surface__aside">{aside}</div> : null}
        </header>
      ) : null}
      {children}
    </section>
  )
}
