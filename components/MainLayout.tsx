import React, {ReactElement} from 'react'
import MainHeader from './MainHeader'

export default function MainLayout({
  children,
}: {
  children: ReactElement | ReactElement[]
}) {
  return (
    <div>
      <MainHeader />
      {children}
    </div>
  )
}
