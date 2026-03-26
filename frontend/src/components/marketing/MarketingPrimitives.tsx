import type { ReactNode } from 'react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Surface } from '../ui/Surface'

type HeroAction = {
  label: string
  to: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

type MarketingHeroProps = {
  eyebrow: string
  title: string
  description: string
  primaryAction: HeroAction
  secondaryAction: HeroAction
  badges: string[]
  panel: ReactNode
  variant: 'aura' | 'cobalt'
}

export function MarketingHero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  badges,
  panel,
  variant,
}: MarketingHeroProps) {
  return (
    <section className={`landing-hero landing-hero--${variant}`}>
      <div className="landing-hero__copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="landing-hero__actions">
          <Button to={primaryAction.to} variant={primaryAction.variant}>
            {primaryAction.label}
          </Button>
          <Button to={secondaryAction.to} variant={secondaryAction.variant}>
            {secondaryAction.label}
          </Button>
        </div>
        <div className="landing-hero__badges">
          {badges.map((badge) => (
            <Badge key={badge} tone="neutral">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
      <div className="landing-hero__panel">{panel}</div>
    </section>
  )
}

type Stat = {
  label: string
  value: string
  detail: string
}

export function StatBand({
  eyebrow,
  stats,
}: {
  eyebrow: string
  stats: Stat[]
}) {
  return (
    <section className="landing-stat-band">
      <span className="eyebrow">{eyebrow}</span>
      <div className="landing-stat-band__grid">
        {stats.map((stat) => (
          <article className="landing-stat" key={stat.label}>
            <span className="panel-label">{stat.label}</span>
            <strong>{stat.value}</strong>
            <p>{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

type Feature = {
  title: string
  description: string
  supporting: string
}

export function FeatureSurface({
  eyebrow,
  title,
  description,
  features,
}: {
  eyebrow: string
  title: string
  description: string
  features: Feature[]
}) {
  return (
    <Surface eyebrow={eyebrow} title={title} description={description}>
      <div className="landing-feature-grid">
        {features.map((feature) => (
          <article className="landing-feature" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <small>{feature.supporting}</small>
          </article>
        ))}
      </div>
    </Surface>
  )
}

type Step = {
  title: string
  description: string
  detail: string
}

export function WorkflowSurface({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow: string
  title: string
  description: string
  steps: Step[]
}) {
  return (
    <Surface eyebrow={eyebrow} title={title} description={description} tone="soft">
      <div className="landing-workflow">
        {steps.map((step, index) => (
          <article className="landing-step" key={step.title}>
            <span className="landing-step__index">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <small>{step.detail}</small>
          </article>
        ))}
      </div>
    </Surface>
  )
}

type Highlight = {
  label: string
  value: string
}

export function ShowcaseSurface({
  eyebrow,
  title,
  description,
  highlights,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  highlights: Highlight[]
  children: ReactNode
}) {
  return (
    <Surface
      eyebrow={eyebrow}
      title={title}
      description={description}
      aside={
        <div className="landing-showcase__highlights">
          {highlights.map((highlight) => (
            <div className="landing-highlight" key={highlight.label}>
              <span className="panel-label">{highlight.label}</span>
              <strong>{highlight.value}</strong>
            </div>
          ))}
        </div>
      }
      tone="raised"
    >
      {children}
    </Surface>
  )
}

export function FaqSurface({
  eyebrow,
  title,
  faqs,
}: {
  eyebrow: string
  title: string
  faqs: Array<{ question: string; answer: string }>
}) {
  return (
    <Surface eyebrow={eyebrow} title={title}>
      <div className="landing-faq">
        {faqs.map((faq) => (
          <article className="landing-faq__item" key={faq.question}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </article>
        ))}
      </div>
    </Surface>
  )
}

export function FinalCtaSurface({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
}: {
  eyebrow: string
  title: string
  description: string
  primaryAction: HeroAction
  secondaryAction: HeroAction
}) {
  return (
    <section className="landing-final-cta">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="landing-final-cta__actions">
        <Button to={primaryAction.to} variant={primaryAction.variant}>
          {primaryAction.label}
        </Button>
        <Button to={secondaryAction.to} variant={secondaryAction.variant}>
          {secondaryAction.label}
        </Button>
      </div>
    </section>
  )
}
