import React from 'react'
import { navbarUtils } from '../../utils/NavbarUtils'
import cls from './DesktopNavbar.module.scss'
import {  useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineSchool } from 'react-icons/md'
import { useAuth } from '../../providers/useAuth'
import { motion } from 'framer-motion'



const Navbar = () => {
  const [open , setOpen] = React.useState(false)
  const navigate = useNavigate()
  const {teachers} = useAuth()


  let menuRef = React.useRef()

  React.useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }

    document.addEventListener("mousedown" , handler)


    return() =>{
      document.removeEventListener("mousedown" , handler)
    }
  } , [])

  const featrueAnimation = {
    hidden:{
      y: -20,
      opacity:0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    }),
  }

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2,  once: true ,}}
      className={cls.navbar_container}
    >

      <div className={cls.row}>

        <div className={cls.logo_data}>
          <MdOutlineSchool className={cls.logo_img}/>
          <h2 className={cls.logo_text}>RYXXENC</h2>
        </div>
        
        <div className={cls.list}>
          {
            navbarUtils.map(({ id , index, title }) => (
              <motion.p 
                key={id}
                custom={index + 1}
                variants={featrueAnimation}
              >
                <Link
                  style={{color:'black'}}
                  to={title}
                  smooth={true}
                  offset={200} 
                  duration={500}
                >  
                  {title}
                </Link>
              </motion.p>
            ))
          }
        </div>

        
        <div>
          <div className={cls.menu_container} ref={menuRef}>
            <div className={cls.menu_trigger} onClick={() => {setOpen(!open)}}>
              <BiMenu className={cls.menuButton}/>
            </div>
            <div className={`${cls.dropdown_menu} ${open? `${cls.active}` : `${cls.inactive}`}`}>
              <h3 className={cls.menuLogo}>
                LOGO
                <br/>
                {/* <span>
                  FUTURE OF eSPORTS  
                </span>   */}

                {
                  teachers ? 
                  <button  onClick={() => navigate('/admin')} className={cls.admin_btn}>
                      Admin
                  </button> : ''
                }
              </h3>
              <div>
                <MobileDropdownItem />  
              </div>
            </div>
          </div> 
        </div>
      </div>
    </motion.div>
  )
}

function MobileDropdownItem(props){
  return(
    <React.Fragment>
      <div className={cls.MobileDropdownContainer}>
        
        <ul className={cls.MobileDropdownItem}>
          <li className={cls.navbar_link}>
    
            {
              navbarUtils.map((item , id) => (
                <Link
                  key={id}
                  style={{color:'black'}}
                  to={item.title}
                  smooth={true}
                  offset={200} 
                  duration={500}
                >  
                  {item.title}
                </Link>
              ))
            }
          </li>
        </ul>

      </div>
    </React.Fragment>
  )
}


export default Navbar
