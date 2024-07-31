import * as RAC from 'react-aria-components'

export const FieldError = (props: RAC.FieldErrorProps) => {
  return (
    <RAC.FieldError {...props} className="text-xs font-semibold text-red-500" />
  )
}
