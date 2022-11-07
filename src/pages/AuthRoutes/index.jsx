import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import * as AuthPages from '../../apps/index'



const AuthRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/auth/login' element={<AuthPages.Login />}/> 
        <Route path='/auth/register' element={<AuthPages.Register />}/> 
        <Route path='*' element={<Navigate  to={'/auth/register'}/>}/>
      </Routes>
    </React.Fragment>
  )
}

export default AuthRoutes


