import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { changeStudent, deleteToStudent , GetMoreClass , postStudents } from '../../../config'
import { useAuth } from '../../../providers/useAuth'
import cls from './PAS.module.scss'

const AdminPages = () => {
  const { teachers } = useAuth()
	const [reviewersData, setReviewersData] = React.useState(null)
  const [studentData, setStudentData] = React.useState(null)
  const { handleSubmit , control } = useForm()
  const {id} = useParams()
  const navigate = useNavigate()








  const [changedInput, setChangedInput] = useState('')

  function postUpdate( classId, studentId, postData) {


		// changeStudent(classId, studentId, {...postData, class: changedInput} ).then((r) => r && getClass()

    
    changeStudent(classId, studentId,  changedInput).then(() => {
      GetMoreClass(id).then(r => {
        const newData = Object.entries(r.data.students).map(([id, item]) => {
          return {
            id,
            ...item
          }
        })
        setStudentData(newData)
      })
    })
	}




  // 
function handleRemoveCard(itemId){
  deleteToStudent(id , itemId).then(() => {
    GetMoreClass(id).then(r => {
      const newData = Object.entries(r.data.students).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setStudentData(newData)
    })
  })
}













  const onSubmit = (value) => {
    const data = {
      ...value ,
      date: new Date().toLocaleDateString(),
      // names: teachers.name ,
    }
    postStudents(id , {...data}).then(() => {
      GetMoreClass(id).then(r => {
        const newData = Object.entries(r.data.students).map(([id, item]) => {
          return {
            id,
            ...item
          }
        })
        setStudentData(newData)
      })
    })
  }


  React.useEffect(() => {
    GetMoreClass(id).then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setReviewersData(newData)
    })
    
  }, [id])


  React.useEffect(() => {
    GetMoreClass(id).then(r => {
      const newData = Object.entries(r.data.students).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setStudentData(newData)
    })
    
  }, [id])



  return (
    <>
      <div className={cls.container}>
        <div className={cls.add_studen_data}>
          {
            reviewersData && reviewersData.map((item , index) => (
              <div key={index}>
                {item.numberClasses}
                {item.textClasses}
              </div>
            ))
          }
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className={cls.form_data}>

              <Controller 
                name={'url'}
                control={control}
                render={({field }) => (
                  <input  
                    className={cls.form_input}
                    onChange={e => field.onChange(e)}
                    placeholder='photo student'
                  />
                )}
              />

              <Controller 
                name={'firsname'}
                control={control}
                render={({field }) => (
                  <input  
                    className={cls.form_input}
                    onChange={e => field.onChange(e)}
                    placeholder='firsname student'
                  />
                )}
              />

              <Controller 
                name={'lastname'}
                control={control}
                render={({field }) => (
                  <input  
                    className={cls.form_input}
                    onChange={e => field.onChange(e)}
                    placeholder='lastname student'
                  />
                )}
              />
              
              <Controller 
                name={'age'}
                control={control}
                render={({field }) => (
                  <input  
                    className={cls.form_input}
                    onChange={e => field.onChange(e)}
                    placeholder='age student'
                  />
                )}
              />

              <Controller 
                name={'class'}
                control={control}
                render={({field }) => (
                  <input  
                    className={cls.form_input}
                    onChange={e => field.onChange(e)}
                    placeholder='class student'
                  />
                )}
              />
              <div className={cls.add_button_data}>
                <button  className={cls.add_button} type={"submit"}> add</button>
              </div>
            </div>
          </form>
        </div>
        
        <div className={cls.data_students}>
          {
            studentData && studentData.map((item , index) => {
              return(
              <div className={cls.list} key={index}>

                <div className={cls.student_img_data}>
                    <img className={cls.student_img} src={item.url} alt="" />
                </div>
                
                <div className={cls.student_text}>
                  
                  <input 
                    className={cls.student_data_input}
                    onChange={(e) => setChangedInput({ ...changedInput, date: e.target.value })}
                    defaultValue={item.class}
                  />
                  <input 
                    className={cls.student_data_input}
                    onChange={(e) => setChangedInput({ ...changedInput, firsname: e.target.value })}
                    defaultValue={item.firsname}
                  />
                  <input 
                    className={cls.student_data_input}
                    onChange={(e) => setChangedInput({ ...changedInput, lastname: e.target.value })}
                    defaultValue={item.lastname}
                  />
                  <input 
                    className={cls.student_data_input}
                    onChange={(e) => setChangedInput({ ...changedInput, age: e.target.value })}
                    defaultValue={item.age}
                  />
                  <input 
                    className={cls.student_data_input}
                    onChange={(e) => setChangedInput({ ...changedInput, class: e.target.value })}
                    defaultValue={item.class}
                  />
                </div>

                <div className={cls.button_data}>

                  <button className={cls.delete_button} onClick={() => handleRemoveCard(item.id)} >
                    удалить 
                  </button>

                  <button className={cls.change_button} onClick={() => {postUpdate(id , item.id, item)}}>
                    изменить 
                  </button>
                  
                </div>

              </div>
              )}
            )
          }
        </div>
        
      </div>
    </>
  )
}

export default AdminPages

