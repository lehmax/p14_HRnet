import { PropsWithChildren } from 'react'

interface FieldsetProps extends PropsWithChildren {
  title: string
  icon?: React.ReactNode
}

const Fieldset = ({ title, icon, children }: FieldsetProps) => {
  return (
    <fieldset className="my-4">
      <span className="flex items-center gap-1">
        {icon}
        <legend className="text-lg font-bold">{title}</legend>
      </span>
      <div>{children}</div>
    </fieldset>
  )
}

export default Fieldset
