import { Badge } from '../components/ui/Badge'
import { Surface } from '../components/ui/Surface'

type MarketingPlaceholderPageProps = {
  eyebrow: string
  title: string
  description: string
  narrative: string[]
  stitchReference: string
}

export function MarketingPlaceholderPage({
  eyebrow,
  title,
  description,
  narrative,
  stitchReference,
}: MarketingPlaceholderPageProps) {
  return (
    <section className="marketing-placeholder">
      <Surface
        eyebrow={eyebrow}
        title={title}
        description={description}
        aside={
          <div className="poster-aside">
            <span className="panel-label">Stitch screen</span>
            <strong>{stitchReference}</strong>
          </div>
        }
        tone="raised"
      >
        <div className="component-row">
          <Badge tone="accent">Landing route</Badge>
          <Badge tone="neutral">Layout placeholder</Badge>
        </div>
        <div className="marketing-sections">
          {narrative.map((item) => (
            <article className="marketing-section" key={item}>
              <span className="panel-label">Planned section</span>
              <h3>{item}</h3>
              <p>
                The route exists so the frontend can adopt the Stitch direction
                later without changing navigation or page ownership.
              </p>
            </article>
          ))}
        </div>
      </Surface>
    </section>
  )
}
