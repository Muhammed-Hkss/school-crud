import React from 'react'
import cls from './MainS.module.scss'
import { motion } from 'framer-motion'
import About from '../../pages/About'
import Class from '../../pages/Class'
import Customize from '../Customize'
import Navbar from '../Navbar'
import Footer from '../Footer/inedx'

const Main = () => {

  const featrueAnimation = {
    hidden:{
      y: 0,
      opacity:0,
    },
    visible: custom => ({
      y: -20,
      opacity: 1,
      transition: {delay: custom * 0.2},
    }),
  }

  return (
    <>      
      <div>
        <Navbar />
      </div>

      <motion.div 
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.2, once: true , }}
        className={cls.container}
      >
        <div className={cls.row}>
          
          <div className={cls.text_data}>
            <motion.h1 
              custom={1}
              variants={featrueAnimation}
              className={cls.text_h1}
            >
              СОВРЕМЕННАЯ И КОМФОРТНАЯ ШКОЛА
            </motion.h1>

            <motion.p 
              custom={2}
              variants={featrueAnimation}
              className={cls.text_p}
            >
              Вся школьная программа с 1 по 11 класс. Возможность официального зачисления в любое время года.
            </motion.p>

            <motion.b 
              custom={3}
              variants={featrueAnimation}
              className={cls.text_b}
            >
              Аттестация и документы об образовании государственного образца.
            </motion.b>

          </div>

          <div className={cls.submit_data}>
              <motion.button 
                custom={1}
                variants={featrueAnimation}
                className={cls.submit}
              >
                НАЧАТЬ ЗАНИМАТЬСЯ!
              </motion.button>
          </div>

        </div>
      </motion.div>

      <div>
        <Class />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Customize />
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </>
  )
}

export default Main