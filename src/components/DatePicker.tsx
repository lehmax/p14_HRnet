import { Calendar, Group } from 'lucide-react'
import type {
  DatePickerProps,
  DateValue,
  ValidationResult,
} from 'react-aria-components'
import {
  DatePicker as AriaDatePicker,
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  Dialog,
  FieldError,
  Heading,
  Label,
  Popover,
  Text,
} from 'react-aria-components'

interface MyDatePickerProps<T extends DateValue> extends DatePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: ValidationResult) => string)
}

export function DatePicker<T extends DateValue>({
  label,
  description,
  errorMessage,
  ...props
}: MyDatePickerProps<T>) {
  return (
    <AriaDatePicker {...props}>
      <Label>{label}</Label>
      <Group>
        <DateInput>{segment => <DateSegment segment={segment} />}</DateInput>
        <Button>▼</Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <Calendar>
            <header>
              <Button slot="previous">◀</Button>
              <Heading />
              <Button slot="next">▶</Button>
            </header>
            <CalendarGrid>{date => <CalendarCell date={date} />}</CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </AriaDatePicker>
  )
}
