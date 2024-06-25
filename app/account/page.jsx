

import { Login } from '@/Components/auth/Login';
import { Logout } from '@/Components/auth/Logout';
import { Register } from '@/Components/auth/Register';
import React from 'react'

const accountPage = () => {


  return (
    <div>
    <div><Register/></div>
    <Login/>
    <Logout/>
    </div>
  )
}
export default accountPage;