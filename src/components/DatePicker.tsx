import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import * as RAC from 'react-aria-components'
import { FieldError } from './FieldError'

interface props<T extends RAC.DateValue> extends RAC.DatePickerProps<T> {
  label?: string
  description?: string
  errorMessage?: string | ((validation: RAC.ValidationResult) => string)
}

export const DatePicker = <T extends RAC.DateValue>({
  label,
  errorMessage,
  ...props
}: props<T>) => {
  return (
    <RAC.DatePicker className="flex flex-col gap-1 group w-fit" {...props}>
      <RAC.Label className="mt-4 mb-2.5 font-semibold text-sm">
        {label}
      </RAC.Label>
      <RAC.Group className="flex justify-between gap-8 border border-gray-200 rounded-md">
        <RAC.DateInput className="flex items-center px-3 py-2 ">
          {segment => <RAC.DateSegment segment={segment} />}
        </RAC.DateInput>
        <RAC.Button className="flex items-center px-3 py-2 text-gray-700 transition bg-gray-100 rounded-r-lg outline-none border-l-indigo-300 focus-visible:ring ring-indigo-500 invalid:border-red-500">
          <CalendarIcon aria-hidden className="w-4 h-4" />
        </RAC.Button>
      </RAC.Group>
      <FieldError>{errorMessage}</FieldError>
      <RAC.Popover className="overflow-auto bg-white rounded-lg drop-shadow-lg">
        <RAC.Dialog className="p-6">
          <RAC.Calendar>
            <header className="flex items-center w-full gap-1 px-1 pb-4">
              <RAC.Heading className="flex-1 ml-2 text-2xl font-semibold" />
              <RoundButton slot="previous">
                <ChevronLeftIcon />
              </RoundButton>
              <RoundButton slot="next">
                <ChevronRightIcon />
              </RoundButton>
            </header>
            <RAC.CalendarGrid className="border-separate border-spacing-1">
              <RAC.CalendarGridHeader>
                {day => (
                  <RAC.CalendarHeaderCell className="text-xs font-semibold text-gray-500">
                    {day}
                  </RAC.CalendarHeaderCell>
                )}
              </RAC.CalendarGridHeader>
              <RAC.CalendarGridBody>
                {date => (
                  <RAC.CalendarCell
                    date={date}
                    className="flex items-center justify-center rounded-full outline-none cursor-default w-9 h-9 outside-month:text-gray-300 hover:bg-gray-100 pressed:bg-gray-200 selected:bg-violet-700 selected:text-white focus-visible:ring ring-indigo-500 ring-offset-2"
                  />
                )}
              </RAC.CalendarGridBody>
            </RAC.CalendarGrid>
          </RAC.Calendar>
        </RAC.Dialog>
      </RAC.Popover>
    </RAC.DatePicker>
  )
}

export const RoundButton = (props: RAC.ButtonProps) => {
  return (
    <RAC.Button
      {...props}
      className="flex items-center justify-center text-gray-600 bg-transparent border-0 rounded-full outline-none cursor-default w-9 h-9 hover:bg-gray-100 pressed:bg-gray-200 focus-visible:ring ring-indigo-500 ring-offset-2"
    />
  )
}
