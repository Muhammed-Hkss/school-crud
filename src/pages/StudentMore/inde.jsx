import React from 'react'
import { useParams } from 'react-router-dom'
import { GetMoreClass } from '../../config/index.js'
import cls from './StudetMS.module.scss'
const StudentMore = () => {
  const [moreData , setMoreData] = React.useState(null)
	const [reviewersData, setReviewersData] = React.useState(null)
  const {id} = useParams()

  const [dataStudents , setDataStudents] = React.useState(null)
  // const {handleSubmit , control , reset} = useForm()

  const getClass = () => {
		GetMoreClass(id).then(r => {
			if (r) {
				setMoreData(r.data)
				r.data && (
					setReviewersData(() => {
						return Object.entries(r).map(([id, item]) => {
							return {
								id,
								...item
							}
						})
					})
				)
			}
		})
	}

  // postStudents
  React.useEffect(() => {
		getClass()
	}, [id])



  React.useEffect(() => {
    if(moreData?.students){
      setDataStudents(Object.values(moreData.students))
    }
  }, [moreData])


  
  return (
    <div className={cls.container}>
      <div>
        {
          reviewersData && reviewersData.map((item , index) => (
            <div className={cls.number_calss} key={index}>
              <h1 className={cls.text_calss}>{item.numberClasses} {item.textClasses}</h1>
            </div>
          ))
        }
      </div>


        <div className={cls.data_students}>
          {
            dataStudents === null ? <p className={cls.error_class}>Класс пустой</p> : dataStudents.map((item , index) => (
              <div className={cls.list} key={index}>
                <div className={cls.student_img_data}>
                  <img className={cls.student_img} src={item.url} alt="" />
                </div>
                <p>date: {item.date}</p>
                <p>first-name: {item.firsname}</p>
                <p>last-name: {item.lastname}</p>
                <p>age: {item.age}</p>
                <p>class: {item.class}</p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default StudentMore
