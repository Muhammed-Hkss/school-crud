import React from 'react'
import cls from './About.module.scss'

const About = () => {
  return (
    <div id='About' className={cls.container}>

      <div className={cls.about_data}>
        <h1 className={cls.about_h1}>Занимайтесь по индивидуальному учебному плану  получите аттестат государственного образца.</h1>
      </div>

      <div className={cls.abouth_school_data}>

        <h1 className={cls.about_h1}>О ШКОЛЕ</h1>
        <div className={cls.abouth_school}>
          <p className={cls.about_S_p}>Наша миссия — обеспечить доступное и действительно качественноеиндивидуальное образование всем школьникам через интернет.</p>
          <hr style={{width:'300px'}} />
          <p className={cls.about_S_p}>Персонализация образования — будущее, которое наступило уже сегодня. Мы создаем самую большую онлайн-школу в России, собравшую в себя опыт лучших специалистов и самые современные технологии.</p>
          <p className={cls.about_S_p}>Каждый человек имеет право на образование, поэтому мы делаем все возможное, чтобы помочь каждому ребенку получить необходимые знания для достойного будущего.</p>
        </div>

        <h1 className={cls.about_h1}>ЧТО МЫ СДЕЛАЛИ?</h1>
        <div className={cls.abouth_school}>
          <p className={cls.about_S_p}>Лучшие преподаватели Санкт-Петербурга и Москвы собрались вместе для того, чтобы дать шанс каждому ребенку получить классическое образование вне зависимости от его способностей и причин перехода на дистанционное обучение.</p>
          <p className={cls.about_S_p}>Мы разработали образовательные программы с 1 по 11 класс, которые полностью соответствует всем государственным образовательным стандартам, а также включают в себя современные технологии для быстрого и удобного получения знаний.</p>
        </div>
      </div>
    </div>
  )
}

export default About
