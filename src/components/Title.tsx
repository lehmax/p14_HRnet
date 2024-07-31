import { PropsWithChildren } from 'react'

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-xl font-bold tracking-tight text-gray-900 lg:text-2xl">
      {children}
    </h1>
  )
}

export default Title
