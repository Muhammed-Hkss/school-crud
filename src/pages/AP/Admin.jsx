import React from 'react'
import CrateForm from '../../conponents/UI/CrateForm'
import { useStudent } from '../../hooks/useCards'
import CompanentsAdmin from './CA'
const Admin = () => {
  const { actions , isLoading } = useStudent()
  const [textClasses , setTextClasses] = React.useState('')
  const [numberClasses , setNumberClasses] = React.useState('')





  const handelSubmit = e => {
    e.preventDefault()
  
  
    actions.post({
      textClasses,
      numberClasses,
    })
  }


      
  return (
    <div>
      <CrateForm
        textClasses={textClasses}
        setTextClasses={setTextClasses}
        numberClasses={numberClasses}
        setNumberClasses={setNumberClasses}

        onSubmit={handelSubmit}
      />
      <CompanentsAdmin />
    </div>
  )
}

export default Admin
