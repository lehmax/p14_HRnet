import { ChevronDown } from 'lucide-react'
import type { ListBoxItemProps, SelectProps } from 'react-aria-components'
import {
  Select as AriaSelect,
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
} from 'react-aria-components'

interface MySelectProps<T extends object>
  extends Omit<SelectProps<T>, 'children'> {
  label?: string
  items?: Iterable<T>
  children: React.ReactNode | ((item: T) => React.ReactNode)
}

export function Select<T extends object>({
  label,
  children,
  items,
  ...props
}: MySelectProps<T>) {
  return (
    <AriaSelect {...props} className="w-full ">
      <Label>{label}</Label>
      <Button className="flex items-center justify-between w-full px-3 py-2 font-normal border rounded border-slate-200">
        <SelectValue />
        <ChevronDown />
      </Button>
      <Popover
        maxHeight={200}
        className="min-w-[--trigger-width] overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-md"
      >
        <ListBox items={items}>{children}</ListBox>
      </Popover>
    </AriaSelect>
  )
}

export function SelectItem(props: ListBoxItemProps) {
  return <ListBoxItem {...props} />
}
