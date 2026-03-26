import { Link } from 'react-router-dom'
import { appRoutes } from '../app/routes'
import { Button } from '../components/ui/Button'
import { Surface } from '../components/ui/Surface'

export function NotFoundPage() {
  return (
    <main className="not-found-page">
      <Surface
        eyebrow="Route missing"
        title="Page not found"
        description="The route does not exist in the current scaffold. Use one of the stable entry points below."
        tone="raised"
      >
        <div className="not-found-actions">
          <Button to={appRoutes.dashboard}>Open dashboard shell</Button>
          <Button variant="secondary" to={appRoutes.auraLanding}>
            Open Aura landing shell
          </Button>
          <Button variant="ghost" to={appRoutes.designSystem}>
            Open design system
          </Button>
        </div>
      </Surface>
      <Link className="not-found-link" to={appRoutes.home}>
        Return to the default route
      </Link>
    </main>
  )
}
