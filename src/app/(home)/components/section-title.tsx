import { ComponentProps } from 'react'

export function SectionTitle({ children, ...props }: ComponentProps<'p'>) {
  return (
    <p className="uppercase pl-5 mb-5 font-bold" {...props}>
      {children}
    </p>
  )
}
