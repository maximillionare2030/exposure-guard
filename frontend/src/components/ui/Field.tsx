import type { InputHTMLAttributes } from 'react'

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  helper?: string
}

export function Field({ label, helper, id, ...props }: FieldProps) {
  const fallbackId =
    id ?? `field-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`

  return (
    <label className="ui-field" htmlFor={fallbackId}>
      <span className="ui-field__label">{label}</span>
      <input className="ui-field__input" id={fallbackId} {...props} />
      {helper ? <span className="ui-field__helper">{helper}</span> : null}
    </label>
  )
}
