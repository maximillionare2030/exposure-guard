import { Outlet } from 'react-router-dom'
import { AppShell } from '../components/layout/AppShell'
import { MarketingShell } from '../components/layout/MarketingShell'

export function AppLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  )
}

export function MarketingLayout() {
  return (
    <MarketingShell
      eyebrow="Stitch-aligned landing concepts"
      title="ExposureGuard marketing routes"
      description="Dedicated layout placeholders for the executive and operator landing page directions."
    >
      <Outlet />
    </MarketingShell>
  )
}
