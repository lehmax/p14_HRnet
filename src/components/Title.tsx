import { PropsWithChildren } from 'react'

const Title = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl lg:text-4xl">
      {children}
    </h1>
  )
}

export default Title
