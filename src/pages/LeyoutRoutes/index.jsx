import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../../conponents/Main'
import Admin from '../AP/Admin'
import StudentMore from '../StudentMore/inde'
import AdminPages from '../../pages/AP/PA'



const LeyoutRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/student/:id' element={<StudentMore />}/>
        <Route path='/adminAddStudent/:id' element={<AdminPages />}/>
        {/* {teachers.email === 'admin@gmail.com' ? <Route path='/admin' element={<AdminPanel />}/> : ''} */}
      </Routes>
    </>
  )
}

export default LeyoutRoutes