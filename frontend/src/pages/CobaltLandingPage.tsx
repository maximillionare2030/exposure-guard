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

export function CobaltLandingPage() {
  return (
    <div className="landing-page landing-page--cobalt">
      <MarketingHero
        eyebrow="Operator-first security health checks"
        title="Launch a safe scan in minutes, triage findings with context, and move directly into remediation."
        description="Cobalt is the workflow-driven ExposureGuard landing page: fast to understand, specific about evidence, and built for engineering and security teams who need immediate operational value."
        primaryAction={{
          label: 'Start instant check',
          to: appRoutes.dashboard,
        }}
        secondaryAction={{
          label: 'Open sample workflow',
          to: appRoutes.designSystem,
          variant: 'secondary',
        }}
        badges={[
          'Scan history included',
          'Severity + affected pages',
          'Remediation-ready evidence',
        ]}
        variant="cobalt"
        panel={
          <div className="hero-console">
            <div className="hero-console__header">
              <span className="panel-label">Scan pipeline</span>
              <Badge tone="success">Passive-first</Badge>
            </div>
            <div className="hero-console__timeline">
              {[
                ['01', 'Target verified', 'Authorization and scope confirmed'],
                ['02', 'Passive checks running', 'Headers, bundles, public artifacts, and leaks reviewed'],
                ['03', 'Findings queued', 'Evidence grouped by severity and page impact'],
              ].map(([index, title, detail]) => (
                <div className="hero-console__step" key={index}>
                  <span>{index}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <StatBand
        eyebrow="Built for operator velocity"
        stats={[
          {
            label: 'Time to first finding',
            value: 'Minutes',
            detail: 'Fast enough for triage without sacrificing evidence quality.',
          },
          {
            label: 'Evidence density',
            value: 'Per page',
            detail: 'Each issue tracks the affected URL, proof, and remediation path.',
          },
          {
            label: 'Workflow fit',
            value: 'Ops-ready',
            detail: 'Designed for WebOps, AppSec, agencies, and incident response teams.',
          },
        ]}
      />

      <WorkflowSurface
        eyebrow="How it works"
        title="Deploy, scan, review, remediate."
        description="Cobalt is shaped around the operator loop rather than a marketing narrative."
        steps={[
          {
            title: 'Register the site and owner',
            description:
              'Attach each authorized property to a team, environment, and scan policy so findings route cleanly.',
            detail: 'The system starts with scope and ownership, not blind discovery.',
          },
          {
            title: 'Run the security health check',
            description:
              'ExposureGuard inspects public assets, leaked metadata, secrets, and misconfigurations using a safe-first workflow.',
            detail: 'Operators get immediate progress visibility as evidence accumulates.',
          },
          {
            title: 'Work the findings queue',
            description:
              'Sort by severity, drill into affected pages, and hand remediation guidance directly to the right team.',
            detail: 'No copy-pasting from screenshots into tickets.',
          },
        ]}
      />

      <FeatureSurface
        eyebrow="Capabilities"
        title="Specific enough for engineers, clean enough for everyday use."
        description="Cobalt keeps technical details visible without turning the interface into terminal cosplay."
        features={[
          {
            title: 'Evidence-packed findings',
            description:
              'Each issue carries proof, impacted pages, and remediation direction so operators can act without extra digging.',
            supporting: 'Built to shorten time from discovery to fix.',
          },
          {
            title: 'Queue-oriented triage',
            description:
              'Use severity, ownership, and scan history to prioritize the right issues instead of chasing noisy alerts.',
            supporting: 'Good product UI starts with the task surface, not a banner.',
          },
          {
            title: 'Operational safety',
            description:
              'Scope boundaries, passive-first checks, and sensitive-value handling remain visible inside the workflow itself.',
            supporting: 'The workflow communicates safety as part of the product.',
          },
        ]}
      />

      <ShowcaseSurface
        eyebrow="Workflow preview"
        title="The findings queue is designed for decisions, not decoration."
        description="Cobalt shows the operator what happened, where it happened, and what to do next."
        highlights={[
          { label: 'Critical queue', value: '4 findings waiting' },
          { label: 'Linked pages', value: '17 affected URLs' },
          { label: 'Ready to fix', value: '3 items with exact remediation steps' },
        ]}
      >
        <div className="landing-queue-preview">
          <article className="queue-item queue-item--critical">
            <div className="queue-item__header">
              <span className="panel-label">Critical</span>
              <strong>Exposed API key in public JavaScript</strong>
            </div>
            <p>Observed in `/static/main.js` with references on checkout and account pages.</p>
            <small>Recommended next step: rotate the key, purge the asset, and rerun the authorized scan.</small>
          </article>
          <article className="queue-item">
            <div className="queue-item__header">
              <span className="panel-label">High</span>
              <strong>Verbose server header reveals framework version</strong>
            </div>
            <p>Returned on all public responses and traceable to a known patch backlog.</p>
            <small>Recommended next step: tighten header policy and confirm on the next scan cycle.</small>
          </article>
        </div>
      </ShowcaseSurface>

      <FeatureSurface
        eyebrow="Reporting"
        title="A report you can hand off without rewriting it."
        description="Cobalt turns scan output into something engineering teams can actually execute against."
        features={[
          {
            title: 'Severity with context',
            description:
              'Critical and high findings are tied to real pages, not just domain-level summaries.',
            supporting: 'Useful for triage and for explaining urgency to partner teams.',
          },
          {
            title: 'Remediation guidance',
            description:
              'Recommended fixes live alongside the issue so operators can move directly into implementation planning.',
            supporting: 'Keeps reporting actionable instead of archival.',
          },
          {
            title: 'History and verification',
            description:
              'Operators can compare against prior scans and confirm that remediations actually closed the issue.',
            supporting: 'Supports repeatable defensive operations over time.',
          },
        ]}
      />

      <FaqSurface
        eyebrow="FAQ"
        title="Questions operators ask before trusting a new workflow."
        faqs={[
          {
            question: 'Will this create noisy output without enough context to act?',
            answer:
              'No. The workflow is designed around evidence, affected pages, and remediation details so findings can move directly into triage.',
          },
          {
            question: 'Can we keep scans within an explicitly authorized scope?',
            answer:
              'Yes. Scope ownership is a core part of the workflow, and the platform does not assume permission beyond the declared target set.',
          },
          {
            question: 'Is this only useful for security teams?',
            answer:
              'No. Agencies, platform teams, and web engineering groups can use the same evidence-rich workflow to track and fix public web exposure safely.',
          },
        ]}
      />

      <FinalCtaSurface
        eyebrow="Operator next step"
        title="Run the first authorized scan and see the queue take shape."
        description="Start with one site, validate the workflow, and use the same shared design system as the foundation for the rest of the product."
        primaryAction={{ label: 'Initialize scan workflow', to: appRoutes.dashboard }}
        secondaryAction={{
          label: 'Review design system',
          to: appRoutes.designSystem,
          variant: 'ghost',
        }}
      />
    </div>
  )
}
