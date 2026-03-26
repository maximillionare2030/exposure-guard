import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type BaseProps = PropsWithChildren<{
  variant?: ButtonVariant
  size?: ButtonSize
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  className?: string
}>

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: never
    href?: never
  }

type LinkButtonProps = BaseProps & {
  to: string
  href?: never
}

type AnchorButtonProps = BaseProps & {
  href: string
  to?: never
}

function getClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return ['ui-button', `ui-button--${variant}`, `ui-button--${size}`, className]
    .filter(Boolean)
    .join(' ')
}

function ButtonContent({
  children,
  leadingIcon,
  trailingIcon,
}: PropsWithChildren<{
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
}>) {
  return (
    <>
      {leadingIcon ? <span className="ui-button__icon">{leadingIcon}</span> : null}
      <span>{children}</span>
      {trailingIcon ? (
        <span className="ui-button__icon">{trailingIcon}</span>
      ) : null}
    </>
  )
}

export function Button(props: ButtonProps | LinkButtonProps | AnchorButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    leadingIcon,
    trailingIcon,
    className,
  } = props

  const classes = getClasses(variant, size, className)

  if ('to' in props && props.to) {
    return (
      <Link className={classes} to={props.to}>
        <ButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
          {children}
        </ButtonContent>
      </Link>
    )
  }

  if ('href' in props && props.href) {
    return (
      <a className={classes} href={props.href}>
        <ButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
          {children}
        </ButtonContent>
      </a>
    )
  }

  const buttonProps = props as ButtonProps
  const buttonType = buttonProps.type ?? 'button'

  return (
    <button className={classes} type={buttonType} {...buttonProps}>
      <ButtonContent leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
        {children}
      </ButtonContent>
    </button>
  )
}
