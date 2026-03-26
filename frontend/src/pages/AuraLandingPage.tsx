import { appRoutes } from '../app/routes'
import {
  FaqSurface,
  FeatureSurface,
  FinalCtaSurface,
  MarketingHero,
  ShowcaseSurface,
  StatBand,
  WorkflowSurface,
} from '../components/marketing/MarketingPrimitives'
import { Badge } from '../components/ui/Badge'

export function AuraLandingPage() {
  return (
    <div className="landing-page landing-page--aura">
      <MarketingHero
        eyebrow="Executive visibility for authorized web risk"
        title="See exposure across every customer-facing property before it becomes a board-level incident."
        description="ExposureGuard gives security leaders a calm, evidence-backed view of public web risk across authorized properties. Passive-first checks, remediation-ready findings, and auditability are built in from the first scan."
        primaryAction={{
          label: 'Book executive walkthrough',
          to: appRoutes.dashboard,
        }}
        secondaryAction={{
          label: 'Review sample report',
          to: appRoutes.designSystem,
          variant: 'secondary',
        }}
        badges={[
          'Authorized properties only',
          'Passive checks first',
          'Sensitive values redacted',
        ]}
        variant="aura"
        panel={
          <div className="hero-observatory">
            <div className="hero-observatory__header">
              <span className="panel-label">Executive overview</span>
              <Badge tone="accent">Multi-site oversight</Badge>
            </div>
            <div className="hero-observatory__score">
              <strong>92%</strong>
              <p>of tracked sites remain within policy after passive checks and remediation review.</p>
            </div>
            <div className="hero-observatory__list">
              {[
                'Exposure by business unit with severity rollups',
                'Evidence-backed issues linked to affected pages',
                'Scan history and approval trail for every authorized property',
              ].map((item) => (
                <div className="hero-observatory__item" key={item}>
                  <span className="panel-label">Included</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <StatBand
        eyebrow="Trusted by governance-conscious teams"
        stats={[
          {
            label: 'Coverage',
            value: '118 sites',
            detail: 'One shared posture view across brands, regions, and client programs.',
          },
          {
            label: 'Evidence readiness',
            value: '< 5 min',
            detail: 'Findings arrive with page context, severity, and remediation direction.',
          },
          {
            label: 'Audit clarity',
            value: '100%',
            detail: 'Every scan is tied to an authorized target, operator, and timestamp.',
          },
        ]}
      />

      <WorkflowSurface
        eyebrow="Method"
        title="A calm audit-to-action workflow for teams managing external risk at scale."
        description="Aura is built for leadership visibility without abstracting away the operational truth underneath it."
        steps={[
          {
            title: 'Define authorized scope',
            description:
              'Register the properties your team owns and set ownership, region, and policy boundaries up front.',
            detail: 'No off-scope crawling, no implied authorization, and no surprise active behavior.',
          },
          {
            title: 'Run passive-first security health checks',
            description:
              'ExposureGuard reviews headers, leaked secrets, public artifacts, and misconfigurations before deeper action is ever considered.',
            detail: 'The system favors safe inspection and evidence collection first.',
          },
          {
            title: 'Route findings with context',
            description:
              'Leadership gets a posture view while operators receive the exact pages, evidence, and fixes required.',
            detail: 'One scan stream supports governance and execution at the same time.',
          },
        ]}
      />

      <FeatureSurface
        eyebrow="Why Aura"
        title="Governance-grade clarity without dashboard noise."
        description="Aura keeps the narrative executive, but the substance remains operationally credible."
        features={[
          {
            title: 'Portfolio oversight',
            description:
              'Track posture by site owner, business unit, or customer account without flattening severity into vanity metrics.',
            supporting: 'Designed for agencies, platform teams, and security leadership.',
          },
          {
            title: 'Evidence-backed reporting',
            description:
              'Every finding includes affected pages, proof, severity, and remediation guidance that can be reviewed downstream.',
            supporting: 'No screenshots without context and no alerts without proof.',
          },
          {
            title: 'Safe-by-default methodology',
            description:
              'Passive checks lead the workflow, sensitive values are redacted where possible, and auditability stays intact.',
            supporting: 'Built for real customer environments, not demo theatrics.',
          },
        ]}
      />

      <ShowcaseSurface
        eyebrow="Reporting"
        title="The executive summary stays concise because the underlying evidence is already structured."
        description="Aura closes the gap between leadership reporting and technical follow-through."
        highlights={[
          { label: 'Severity spread', value: '2 critical / 6 high / 12 medium' },
          { label: 'Affected pages', value: '41 URLs with direct context' },
          { label: 'Remediation owners', value: 'Platform, AppSec, and WebOps' },
        ]}
      >
        <div className="landing-report-preview">
          <div className="landing-report-preview__summary">
            <span className="panel-label">Exposure summary</span>
            <h3>Credential leak discovered in a cached JavaScript bundle.</h3>
            <p>
              The report ties the issue to the production asset path, identifies
              related pages, and records the last clean scan for comparison.
            </p>
          </div>
          <div className="landing-report-preview__stack">
            <article>
              <span className="panel-label">Evidence</span>
              <p>Token pattern observed in `/assets/app.bundle.js` and mirrored in one cached response.</p>
            </article>
            <article>
              <span className="panel-label">Impact</span>
              <p>Public exposure could grant access to downstream APIs if not rotated and removed.</p>
            </article>
            <article>
              <span className="panel-label">Remediation</span>
              <p>Rotate the token, purge the bundle, invalidate caches, and verify in the next authorized scan.</p>
            </article>
          </div>
        </div>
      </ShowcaseSurface>

      <FeatureSurface
        eyebrow="Trust and safety"
        title="Built for teams that need proof of discipline, not just proof of activity."
        description="The product stays defensive by design because credibility depends on it."
        features={[
          {
            title: 'Authorized targets only',
            description:
              'Teams register sites they control and maintain clear ownership boundaries for every scan path.',
            supporting: 'ExposureGuard never assumes permission outside declared scope.',
          },
          {
            title: 'Redaction-aware artifacts',
            description:
              'Logs, evidence, and UI surfaces are structured to reduce unnecessary secret handling while preserving context.',
            supporting: 'Store only what is needed to support findings and remediation.',
          },
          {
            title: 'Audit-ready history',
            description:
              'Each job records who initiated it, what was scanned, what was found, and what changed over time.',
            supporting: 'Useful for governance reviews, client communication, and incident retrospectives.',
          },
        ]}
      />

      <FaqSurface
        eyebrow="FAQ"
        title="Questions leadership teams ask before adopting a web risk platform."
        faqs={[
          {
            question: 'Can we use Aura across multiple brands or client properties?',
            answer:
              'Yes. The model is designed for multi-site oversight with ownership boundaries, consistent reporting, and scan history across authorized assets.',
          },
          {
            question: 'Does the platform rely on aggressive active scanning?',
            answer:
              'No. The default posture is passive-first. That keeps early coverage safe and preserves trust before any deeper workflow is introduced.',
          },
          {
            question: 'How does this help outside the security team?',
            answer:
              'Aura gives leadership a concise risk narrative while keeping the underlying findings structured enough for platform and application teams to act on immediately.',
          },
        ]}
      />

      <FinalCtaSurface
        eyebrow="Next step"
        title="Start with an executive walkthrough, then map your first authorized surface area."
        description="See how ExposureGuard can give your team a clearer posture narrative without sacrificing evidence quality or operator trust."
        primaryAction={{ label: 'Request executive demo', to: appRoutes.dashboard }}
        secondaryAction={{
          label: 'Open design system',
          to: appRoutes.designSystem,
          variant: 'ghost',
        }}
      />
    </div>
  )
}
