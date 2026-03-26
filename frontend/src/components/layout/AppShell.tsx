import { useEffect, useState, type PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'
import { appRoutes, primaryNavItems } from '../../app/routes'
import { Badge } from '../ui/Badge'
import { ThemeToggle } from '../ui/ThemeToggle'

type AppShellProps = PropsWithChildren

export function AppShell({ children }: AppShellProps) {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY
      const beyondThreshold = currentScrollY > 72

      setIsHeaderHidden(isScrollingDown && beyondThreshold)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-block">
          <span className="sidebar-kicker">EG</span>
          <NavLink className="brand-mark" to={appRoutes.dashboard}>
            ExposureGuard
          </NavLink>
          <p className="brand-copy">
            Authorized website security operations workspace.
          </p>
        </div>

        <nav className="side-nav" aria-label="Primary">
          {primaryNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-item is-active' : 'nav-item'
              }
            >
              <span className="nav-item__label">{item.label}</span>
              <small className="nav-item__description">{item.description}</small>
            </NavLink>
          ))}
        </nav>

        <section className="sidebar-panel">
          <span className="panel-label">System</span>
          <p>Shared layout, reusable tokens, and stable route ownership.</p>
          <div className="sidebar-panel__actions">
            <Badge tone="accent">Stitch aligned</Badge>
            <Badge tone="success">Reusable tokens</Badge>
          </div>
        </section>
      </aside>

      <div className="workspace">
        <header
          className={
            isHeaderHidden
              ? 'workspace-header workspace-header--hidden'
              : 'workspace-header'
          }
        >
          <div className="workspace-header__intro">
            <span className="eyebrow">Operator workspace</span>
            <div>
              <strong>ExposureGuard</strong>
              <p>Modular shell for scan operations, reporting, and system docs.</p>
            </div>
          </div>
          <div className="workspace-header__actions">
            <ThemeToggle />
          </div>
        </header>
        <main className="workspace-main">{children}</main>
      </div>
    </div>
  )
}
