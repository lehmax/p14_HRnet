import * as RAC from 'react-aria-components'
import { FieldError } from './FieldError'

interface props extends RAC.TextFieldProps {
  label?: string
  description?: string
  fullWidth?: boolean
  errorMessage?: string | ((validation: RAC.ValidationResult) => string)
}

export const TextField = ({
  label,
  errorMessage,
  fullWidth = false,
  ...props
}: props) => {
  return (
    <RAC.TextField
      className={`flex flex-col gap-1 group ${fullWidth ? `w-full` : `w-fit`}`}
      {...props}
    >
      <RAC.Label className="text-sm font-semibold">{label}</RAC.Label>
      <RAC.Input className="flex items-center px-3 py-2 border border-gray-200 rounded-md outline-none focus-visible:ring ring-indigo-500" />
      <FieldError>{errorMessage}</FieldError>
    </RAC.TextField>
  )
}
