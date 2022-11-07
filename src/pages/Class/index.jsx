import React from 'react'
import cls from './Class.module.scss'
// import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { getClass } from '../../config'
// import { auth } from '../../firebase'
import { mainNumberUtils} from '../../utils/MainUtils'
import { motion } from 'framer-motion'


const Class = () => {
  const [studentData, setStudentData] = React.useState(null)
  const [ numberfiltered, setNumberFiltered ] = React.useState(studentData)
  const [ textFiltered, setTextFiltered ] = React.useState(studentData)
  const navigate = useNavigate()
  // const handelSignOut = () => signOut(auth)


  const textAnimation = {
    hidden:{
      x: -100,
      opacity:0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.1},
    }),
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

  function FilterNumber(status) {
    if(status === 'all') {
      setNumberFiltered(studentData)
    } else {
      let newTodo = [...studentData].filter(item => item.numberClasses === status)
      setNumberFiltered(newTodo)
    }
  }


  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2, once: true ,}}
      className={cls.main_container}
    >

      <div className={cls.row}>
        {/* <button  onClick={handelSignOut}>
          SignOut
        </button> */}

        <h1 style={{color:'white' , margin:'0',  textAlign:'center'}}>класс</h1>

        <div className={cls.filter_data}>
          {
            mainNumberUtils.map((item , index) => (
              <motion.button
                key={index}
                custom={index + 1} 
                variants={textAnimation}
                className={cls.filter_button}
                onClick={() => FilterNumber(`${item.onClickNumver}`)} 
                value={item.valueNumber}
              >
                {item.titleNumber}
              </motion.button>
            ))
          }
        </div>
        <br />
        <div className={cls.filter_data}>
        </div>
        <div className={cls.class_data}>
          {
            numberfiltered ? 
            numberfiltered && numberfiltered.map((item , index) => (
              <div className={cls.class_item} onClick={() => navigate(`/student/${item.id}`)} key={index}>
                <p className={cls.class_number}>{item.numberClasses}</p>
                <h1 className={cls.class_text}>{item.textClasses}</h1>
              </div>
            )) : 
            studentData && studentData.map((item , index) => (
              <div 
                key={item.id}
                className={cls.class_item}
                onClick={() => navigate(`/student/${item.id}`)}
              >
                <p className={cls.class_number}>{item.numberClasses}</p>
                <h1 className={cls.class_text}>{item.textClasses}</h1>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

export default Class
