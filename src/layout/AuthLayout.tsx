import React, { FC } from 'react'
import PublicNavbar from '../components/auth/PublicNavbar'

const AuthLayout:FC<any> = ({children}) => {
  return (
    <div>
        <PublicNavbar />
        {children}
    </div>
  )
}

export default AuthLayout