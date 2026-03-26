import { Navigate, createBrowserRouter } from 'react-router-dom'
import { appRoutes } from './routes'
import { AppLayout, MarketingLayout } from './shell-layouts'
import { DesignSystemPage } from '../pages/DesignSystemPage'
import { MarketingPlaceholderPage } from '../pages/MarketingPlaceholderPage'
import { ProductPlaceholderPage } from '../pages/ProductPlaceholderPage'
import { NotFoundPage } from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: <Navigate to={appRoutes.dashboard} replace />,
  },
  {
    path: '/app',
    element: <AppLayout />,
    children: [
      {
        path: 'dashboard',
        element: (
          <ProductPlaceholderPage
            eyebrow="Primary workspace"
            title="Dashboard"
            description="Command surface for scan posture, queue state, and recent findings. This stays intentionally sparse until live data and widgets are implemented."
            stitchReference="24f7d74f397e4716946434da893554e2 - Sites Dashboard"
            sections={[
              'Selected KPIs for authorized sites and active scan jobs',
              'Recent findings feed with severity, evidence, and affected-page summaries',
              'Queue health, scan progress, and system notices',
            ]}
          />
        ),
      },
      {
        path: 'sites',
        element: (
          <ProductPlaceholderPage
            eyebrow="Target inventory"
            title="Sites"
            description="Layout stub for listing customer-authorized properties, ownership details, and scan coverage before table implementation."
            sections={[
              'Search and filters for authorized sites',
              'Coverage status and last scan timestamps',
              'Quick actions to launch or schedule safe scans',
            ]}
          />
        ),
      },
      {
        path: 'sites/:siteId',
        element: (
          <ProductPlaceholderPage
            eyebrow="Site detail"
            title="Site detail & history"
            description="Reserved route for a site-level workspace with scan history, finding trends, and remediation context."
            stitchReference="fc50136e4d694c98ad246789c35b8bce - Site Detail & History"
            sections={[
              'Site health summary with current scan state',
              'Historical scan timeline and report access',
              'Findings grouped by severity and remediation owner',
            ]}
          />
        ),
      },
      {
        path: 'scans/:scanId',
        element: (
          <ProductPlaceholderPage
            eyebrow="Scan lifecycle"
            title="Scan in progress"
            description="Placeholder for the live job surface with crawl status, passive checks, and evidence stream."
            stitchReference="971c051e3466473b89f57c4543aea89a - Scan in Progress"
            sections={[
              'Lifecycle stage tracker from crawl through report generation',
              'Activity log with passive-first methodology notes',
              'Operator controls for cancellation, retry, and issue escalation',
            ]}
          />
        ),
      },
      {
        path: 'reports/:reportId',
        element: (
          <ProductPlaceholderPage
            eyebrow="Report surface"
            title="Full security report"
            description="Reserved layout for the final report, evidence payloads, affected pages, and remediation guidance."
            stitchReference="51a199dd4ce74bd88459c9d2d6cb5f52 - Full Security Report"
            sections={[
              'Executive summary and severity distribution',
              'Finding details with evidence, affected URLs, and remediation steps',
              'Audit trail and export actions',
            ]}
          />
        ),
      },
      {
        path: 'reports/:reportId/unlock',
        element: (
          <ProductPlaceholderPage
            eyebrow="Access gate"
            title="Report unlock"
            description="Placeholder for gated report access, trial conversion, or secure sharing controls."
            stitchReference="a8cb7b109fc4447da1722874c39e1bd8 - Report Ready - Unlock to View"
            sections={[
              'Identity and authorization confirmation',
              'Secure preview of report value before release',
              'Primary conversion or access approval action',
            ]}
          />
        ),
      },
      {
        path: 'settings',
        element: (
          <ProductPlaceholderPage
            eyebrow="Administration"
            title="Settings"
            description="Route shell for workspace preferences, scan policy defaults, and team-level controls."
            sections={[
              'Authorized scanning policy and domain ownership defaults',
              'Team roles, notifications, and report access controls',
              'Audit and retention preferences for sensitive artifacts',
            ]}
          />
        ),
      },
      {
        path: 'design-system',
        element: <DesignSystemPage />,
      },
    ],
  },
  {
    path: '/landing',
    element: <MarketingLayout />,
    children: [
      {
        path: 'aura',
        element: (
          <MarketingPlaceholderPage
            eyebrow="Executive concept"
            title="Aura landing page"
            description="Layout-only marketing shell for the premium, governance-led landing direction generated in Stitch."
            stitchReference="2382934153414b4e9a7f66baa223ec38 - ExposureGuard Aura: Executive Landing Page"
            narrative={[
              'Hero led by confidence, multi-site visibility, and executive trust signals',
              'Editorial long-scroll sequence for methodology, governance, and safe-scan policy',
              'High-clarity conversion band for demo requests and sample reports',
            ]}
          />
        ),
      },
      {
        path: 'cobalt',
        element: (
          <MarketingPlaceholderPage
            eyebrow="Operator concept"
            title="Cobalt landing page"
            description="Layout-only marketing shell for the product-led, workflow-driven landing direction generated in Stitch."
            stitchReference="d31a1d1e4e9d4561935bda68972118e1 - ExposureGuard Cobalt: Operator Landing Page"
            narrative={[
              'Hero framed around scan velocity, findings triage, and remediation throughput',
              'Dense but controlled product storytelling for workflow, evidence, and operator control',
              'Action-oriented CTA structure for trial starts and guided walkthroughs',
            ]}
          />
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
