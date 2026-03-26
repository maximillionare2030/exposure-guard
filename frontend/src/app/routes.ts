export const appRoutes = {
  home: '/',
  dashboard: '/app/dashboard',
  sites: '/app/sites',
  siteDetail: '/app/sites/:siteId',
  scanDetail: '/app/scans/:scanId',
  reportDetail: '/app/reports/:reportId',
  reportUnlock: '/app/reports/:reportId/unlock',
  settings: '/app/settings',
  designSystem: '/app/design-system',
  auraLanding: '/landing/aura',
  cobaltLanding: '/landing/cobalt',
} as const

export type PrimaryNavItem = {
  label: string
  description: string
  to: string
}

export const primaryNavItems: PrimaryNavItem[] = [
  {
    label: 'Dashboard',
    description: 'Operator overview',
    to: appRoutes.dashboard,
  },
  {
    label: 'Sites',
    description: 'Authorized targets',
    to: appRoutes.sites,
  },
  {
    label: 'Settings',
    description: 'Team and policy',
    to: appRoutes.settings,
  },
  {
    label: 'Design system',
    description: 'Foundation tokens',
    to: appRoutes.designSystem,
  },
]

export const landingNavItems: PrimaryNavItem[] = [
  {
    label: 'Aura',
    description: 'Executive narrative',
    to: appRoutes.auraLanding,
  },
  {
    label: 'Cobalt',
    description: 'Operator narrative',
    to: appRoutes.cobaltLanding,
  },
]
