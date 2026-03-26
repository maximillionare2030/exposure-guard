import type { PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { appRoutes, landingNavItems } from '../../app/routes'
import { ThemeToggle } from '../ui/ThemeToggle'

type MarketingShellProps = PropsWithChildren<{
  eyebrow: string
  title: string
  description: string
}>

export function MarketingShell({
  children,
  eyebrow,
  title,
  description,
}: MarketingShellProps) {
  return (
    <div className="marketing-shell">
      <header className="marketing-header">
        <NavLink className="brand-mark" to={appRoutes.dashboard}>
          ExposureGuard
        </NavLink>
        <nav className="marketing-nav" aria-label="Landing routes">
          {landingNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'marketing-link is-active' : 'marketing-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
      </header>

      <main className="marketing-main">
        <section className="marketing-intro">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
        {children}
      </main>
    </div>
  )
}
