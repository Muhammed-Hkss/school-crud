import React from 'react'
import cls from './Crate.module.scss'

const CrateForm = ({ onSubmit  , textClasses , setTextClasses , numberClasses , setNumberClasses ,}) => {


  return (
    <>
      <div className={cls.container}>
        <form onSubmit={onSubmit}>
          <div className={cls.get_data}>

          <select className={cls.get_select2} value={numberClasses} onChange={(e => setNumberClasses(e.target.value))}>
              <option>class number</option>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
              <option >5</option>
              <option >6</option>
              <option >7</option>
              <option >8</option>
              <option >9</option>
              <option >10</option>
              <option >11</option>
            </select>

            <select className={cls.get_select1} value={textClasses} onChange={(e => setTextClasses(e.target.value))}>
              <option>class text</option>
              <option >A</option>
              <option >B</option>
              <option >C</option>
              <option >D</option>
            </select>
            
          </div>
          <div className={cls.post_button_data}>
            <button className={cls.post_button} type='submit'>
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CrateForm
