import { type ReactNode } from 'react'
import Navbar from '../components/Navbar'

function Navigation({children} : {children: ReactNode}) {
  return (
    <div>
        <Navbar />
      {children}
    </div>
  )
}

export default Navigation