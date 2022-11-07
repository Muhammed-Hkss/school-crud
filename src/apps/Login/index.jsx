import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
// import { IoMdClose } from 'react-icons/io'
import { Link,  useNavigate } from 'react-router-dom'
import FormButton from '../../conponents/UI/FormButton'
import FormInput from '../../conponents/UI/FormInput'
import { auth } from '../../firebase'
import cls from './LStyle.module.scss'

const Login = () => {
  // const { isAuth, loading } = useIsLogin()
  const [responseErrors, setResponseErrors] = React.useState(false)
  const navigate = useNavigate()


  const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		mode: 'onChange',
	})

	const provider = new GoogleAuthProvider()
  	const googleProvider = () => signInWithPopup(auth , provider)

	// const navigate = useNavigate()
	// React.useEffect(() => {
	// 	isAuth && navigate('/profile')
	// }, [isAuth, navigate])

	// console.log(isAuth);

	const handleFormSubmit = async (data) => {
		try {
			const user = await signInWithEmailAndPassword(
				auth,
				data.email,
				data.password
			)
			user && navigate('/')
		} catch (error) {
			error && setResponseErrors(true)
		} finally {
			reset()
		}
	}



  return (
    <div className={cls.container}>
      <form className={cls.row} onSubmit={handleSubmit(handleFormSubmit)}>
				{/* <IoMdClose className={cls.closeForm} onClick={() => navigate('/')} /> */}
				<div className={cls.formHeader}>
					<h3>авторизация</h3>
				</div>
				{responseErrors && (
					<span style={{ fontSize: 14, color: '#c72f31' }}>
						Непраильный Логин или пароль
					</span>
				)}
				<div className={cls.formBody}>
					<FormInput
						inputType='text'
						placeholder='Ваш email адресс'
						registerName='email'
						register={register}
						errors={errors.email?.message}
					/>
					<FormInput
						inputType='password'
						placeholder='Введите пароль'
						registerName='password'
						register={register}
						errors={errors.password?.message}
					/>
					<FormButton isValid={isValid} buttonText='Войти' />
				</div>
				<div className={cls.formFooter}>
					<Link className={cls.route} to='/user/register'>Еще нет аккаунта</Link>
          <img
            className={cls.google_log_in}
            // onClick={googleProvider}
            onClick={() => {
              googleProvider(provider).then(() => navigate('/'))
            }}
            width={'50px'} 
            style={{cursor:'pointer'}} 
            src="https://i.ya-webdesign.com/images/logo-google-chrome-png.png" 
            alt="" 
          />
				</div>
			</form>
    </div>
  )
}

export default Login

