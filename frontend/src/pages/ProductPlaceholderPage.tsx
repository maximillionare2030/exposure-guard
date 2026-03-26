import { Badge } from '../components/ui/Badge'
import { Surface } from '../components/ui/Surface'

type ProductPlaceholderPageProps = {
  eyebrow: string
  title: string
  description: string
  sections: string[]
  stitchReference?: string
}

export function ProductPlaceholderPage({
  eyebrow,
  title,
  description,
  sections,
  stitchReference,
}: ProductPlaceholderPageProps) {
  return (
    <div className="placeholder-page">
      <Surface
        eyebrow={eyebrow}
        title={title}
        description={description}
        aside={
          <div className="placeholder-meta">
            <div className="meta-block">
              <span className="panel-label">Status</span>
              <strong>Layout only</strong>
            </div>
            {stitchReference ? (
              <div className="meta-block">
                <span className="panel-label">Stitch reference</span>
                <strong>{stitchReference}</strong>
              </div>
            ) : null}
          </div>
        }
      >
        <div className="component-row">
          <Badge tone="accent">Scaffolded</Badge>
          <Badge tone="neutral">Route stable</Badge>
          <Badge tone="success">Ready for implementation</Badge>
        </div>
        <div className="placeholder-grid">
          {sections.map((section) => (
            <article className="placeholder-panel" key={section}>
              <span className="panel-label">Reserved area</span>
              <h3>{section}</h3>
              <p>
                This route is intentionally blocked out with final information
                architecture before component implementation begins.
              </p>
            </article>
          ))}
        </div>
      </Surface>
    </div>
  )
}
