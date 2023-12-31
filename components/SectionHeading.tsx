import React from 'react'

interface SectionHeadingProps {
    children: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({children}) => {
  return (
    <h2 className="text-center text-3xl font-medium capitalize mb-8">{children}</h2>
  )
}
