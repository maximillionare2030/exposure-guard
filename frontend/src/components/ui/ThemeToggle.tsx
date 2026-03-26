import { useTheme } from '../../app/theme-context'

export function ThemeToggle() {
  const { mode, toggleMode } = useTheme()
  const isLight = mode === 'light'

  return (
    <button
      className="theme-switch"
      type="button"
      role="switch"
      aria-checked={isLight}
      onClick={toggleMode}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <span className="theme-switch__label">Theme</span>
      <span className="theme-switch__track" aria-hidden="true">
        <span className="theme-switch__thumb" />
      </span>
      <span className="theme-switch__mode">{isLight ? 'Light' : 'Dark'}</span>
    </button>
  )
}
