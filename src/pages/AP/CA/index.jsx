import React from 'react'
import { useNavigate } from 'react-router-dom'
import cls from './aStyle.module.scss'
import { getClass } from '../../../config'
import { mainNumberUtils } from '../../../utils/MainUtils'

const CompanentsAdmin = () => {

  const [studentData, setStudentData] = React.useState(null)
  const [ filtered, setFiltered ] = React.useState(studentData)
  const navigate = useNavigate()

  function todoFilter(status) {
    if(status === 'all') {
      setFiltered(studentData)
    } else {
      let newTodo = [...studentData].filter(item => item.numberClasses === status)
      setFiltered(newTodo)
    }
  }

  React.useEffect(() => {
    getClass().then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setStudentData(newData)
    })
    
  }, [])

console.log(studentData);

  return (
    <div className={cls.admin_container}>


      <div className={cls.filter_data}>
        {
          mainNumberUtils.map((item , id) => (
            <button 
              className={cls.filter_button}
              key={id}
              onClick={() => todoFilter(`${item.onClickNumver}`)} 
              value={item.valueNumber}
            >
              {item.titleNumber}
            </button>
          ))
        }
      </div>


      <div className={cls.class_data}>
        {
        filtered ? 
        filtered && filtered.map((item , index) => (
          <div className={cls.class_item} onClick={() => navigate(`/adminAddStudent/${item.id}`)} key={index}>
            <p className={cls.class_number}>{item.numberClasses}</p>
            <h1 className={cls.class_text}>{item.textClasses}</h1>
          </div>
          )) : 
        studentData && studentData.map((item , index) => {
          return(
            <div className={cls.class_item} onClick={() => navigate(`/adminAddStudent/${item.id}`)} key={index}>
              <p className={cls.class_number}>{item.numberClasses}</p>
              <h1 className={cls.class_text}>{item.textClasses}</h1>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default CompanentsAdmin
