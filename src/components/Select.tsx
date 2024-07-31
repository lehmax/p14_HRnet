import { ChevronDown } from 'lucide-react'
import type { ListBoxItemProps } from 'react-aria-components'
import * as RAC from 'react-aria-components'
import { FieldError } from './FieldError'

interface props<T extends object> extends Omit<RAC.SelectProps<T>, 'children'> {
  label?: string
  items?: Iterable<T>
  errorMessage?: string | ((validation: RAC.ValidationResult) => string)
  fullWidth?: boolean
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export const Select = <T extends object>({
  label,
  children,
  errorMessage,
  fullWidth = false,
  items,
  ...props
}: props<T>) => {
  return (
    <RAC.Select
      {...props}
      className={`select flex flex-col gap-1 group ${
        fullWidth ? `w-full` : `w-fit`
      }`}
    >
      <RAC.Label className="mt-4 mb-2.5 font-semibold text-sm">
        {label}
      </RAC.Label>
      <RAC.Button className="flex items-center justify-between w-full gap-8 px-3 py-2 font-normal border border-gray-200 rounded-md outline-none focus-visible:ring ring-indigo-500">
        <RAC.SelectValue />
        <ChevronDown />
      </RAC.Button>
      <FieldError>{errorMessage}</FieldError>
      <RAC.Popover
        maxHeight={300}
        className="min-w-[--trigger-width] overflow-auto rounded-md border border-gray-200 bg-white p-1 shadow-md"
      >
        <RAC.ListBox className="flex flex-col p-1 outline-none" items={items}>
          {children}
        </RAC.ListBox>
      </RAC.Popover>
    </RAC.Select>
  )
}

export const SelectItem = (props: ListBoxItemProps) => {
  return (
    <RAC.ListBoxItem
      className="px-3 py-2 rounded-md outline-none cursor-pointer hover:bg-indigo-500 hover:text-white focus-visible:ring ring-indigo-500"
      {...props}
    />
  )
}
