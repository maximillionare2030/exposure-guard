import { appRoutes } from '../app/routes'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Field } from '../components/ui/Field'
import { MetricCard } from '../components/ui/MetricCard'
import { Surface } from '../components/ui/Surface'

const modeTokens = {
  dark: [
    ['Canvas', 'var(--bg)'],
    ['Surface', 'var(--surface)'],
    ['Surface raised', 'var(--surface-raised)'],
    ['Accent', 'var(--accent)'],
    ['Text', 'var(--text)'],
  ],
  light: [
    ['Canvas', 'var(--bg)'],
    ['Surface', 'var(--surface)'],
    ['Surface raised', 'var(--surface-raised)'],
    ['Accent', 'var(--accent)'],
    ['Text', 'var(--text)'],
  ],
} as const

export function DesignSystemPage() {
  return (
    <div className="design-system-page">
      <Surface
        eyebrow="Foundation route"
        title="ExposureGuard design system"
        description="Living reference for tokens, interaction patterns, and reusable components. This route exists so future pages can compose from shared primitives rather than hardcoded layouts."
        aside={<Badge tone="accent">Internal foundation</Badge>}
      >
        <div className="design-system-hero">
          <div className="design-system-actions">
            <Button to={appRoutes.auraLanding}>Open Aura direction</Button>
            <Button variant="secondary" to={appRoutes.cobaltLanding}>
              Open Cobalt direction
            </Button>
            <Button variant="ghost" to={appRoutes.dashboard}>
              Back to app shell
            </Button>
          </div>
          <div className="metric-grid">
            <MetricCard
              label="Color modes"
              value="2"
              detail="Light and dark tokens stay on the same semantic scale."
            />
            <MetricCard
              label="Core primitives"
              value="6"
              detail="Buttons, badges, surfaces, fields, metrics, and shell patterns."
            />
            <MetricCard
              label="Primary goal"
              value="Reuse"
              detail="Every later page should assemble these pieces, not restyle from zero."
            />
          </div>
        </div>
      </Surface>

      <div className="design-system-grid">
        <Surface
          eyebrow="Modes"
          title="Theme architecture"
          description="Semantic tokens drive both color modes so components can switch modes without changing markup."
          tone="soft"
        >
          <div className="token-mode-grid">
            {(Object.keys(modeTokens) as Array<keyof typeof modeTokens>).map(
              (mode) => (
                <div className="mode-preview" key={mode} data-preview-mode={mode}>
                  <div className="mode-preview__header">
                    <span className="panel-label">{mode} mode</span>
                    <Badge tone={mode === 'dark' ? 'accent' : 'success'}>
                      {mode}
                    </Badge>
                  </div>
                  <div className="token-list">
                    {modeTokens[mode].map(([label, value]) => (
                      <div className="token-row" key={`${mode}-${label}`}>
                        <span>{label}</span>
                        <code>{value}</code>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </Surface>

        <Surface
          eyebrow="Typography"
          title="Type system"
          description="Space Grotesk carries brand and hierarchy. Inter handles dense product copy."
          tone="soft"
        >
          <div className="type-specimen">
            <p className="type-kicker">Brand and headlines</p>
            <h3 className="type-display">Clear security posture for authorized sites.</h3>
            <p className="type-body">
              Body copy stays concise and operational so landing pages and app
              surfaces read with the same voice.
            </p>
          </div>
        </Surface>
      </div>

      <div className="design-system-grid">
        <Surface
          eyebrow="Actions"
          title="Buttons and emphasis"
          description="Primary and secondary actions are consistent across product and marketing routes."
        >
          <div className="component-row">
            <Button>Start instant check</Button>
            <Button variant="secondary">Review sample report</Button>
            <Button variant="ghost">Learn the workflow</Button>
          </div>
          <div className="component-row">
            <Badge tone="neutral">Passive-first</Badge>
            <Badge tone="accent">Evidence-backed</Badge>
            <Badge tone="success">Authorized only</Badge>
            <Badge tone="danger">Sensitive handling</Badge>
          </div>
        </Surface>

        <Surface
          eyebrow="Forms"
          title="Input treatment"
          description="Fields are reserved, high-contrast, and suited for operational data entry."
        >
          <div className="field-grid">
            <Field
              label="Site URL"
              placeholder="https://example.com"
              helper="Authorized properties only"
            />
            <Field
              label="Owner team"
              placeholder="Platform Engineering"
              helper="Used for scan ownership and routing"
            />
          </div>
        </Surface>
      </div>

      <Surface
        eyebrow="Composition"
        title="Page building blocks"
        description="Use these structural blocks when implementing the actual landing pages and app surfaces."
      >
        <div className="building-blocks">
          {[
            'Poster-style hero with one dominant message and one primary CTA',
            'Metric band for trust, coverage, and scan outcomes',
            'Narrative surfaces for workflow, findings, and remediation detail',
            'Action footer that closes on one next step instead of many competing options',
          ].map((item) => (
            <div className="building-block" key={item}>
              <span className="panel-label">Pattern</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </Surface>
    </div>
  )
}
