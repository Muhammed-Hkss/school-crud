import React from 'react'
import { FooterUtils } from '../../utils/FooterUtils'
import cls from './FooterS.module.scss'

const Footer = () => {
  return (
    <div>
        
      {
        FooterUtils.map((item , index) => (
          <div key={index}>
            <p>{item.title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Footer