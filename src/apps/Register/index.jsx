import React from 'react'
import cls from './RStyle.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { createNewUser } from '../../config'
import { auth } from '../../firebase'
import { GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import FormInput from '../../conponents/UI/FormInput'
import FormButton from '../../conponents/UI/FormButton'



const Register = () => {
  const [wrongData, setWrongData] = React.useState(false)
  const navigate = useNavigate()


  const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm({
		mode: 'onChange',
	})


  const handleNewUser = (data , teachersId) => {
    createNewUser(
      {
        ...data,

      },
      teachersId
    ).then(() => navigate('/'))
  }

  
  const HBRegister = async (data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await updateProfile(res.user , {
        displayName: data.username || 'Пользователь',
        photoURL: 'https://api-private.atlassian.com/users/2e5afb4451de305435994b4dbca95d38/avatar',
      })
      res && handleNewUser(data, res.user.uid)
    } catch (error) {
      setWrongData(true)
    } finally {
      reset()
    }
  }

  const provider = new GoogleAuthProvider()
  const googleProvider = () => signInWithPopup(auth , provider)

  return (
    <div className={cls.container}>
      <form className={cls.row} onSubmit={handleSubmit(HBRegister)}>
				<div className={cls.formHeader}>
					<h3>Регистрация</h3>
				</div>
				<div className={cls.formBody}>
					{wrongData && (
						<span style={{ fontSize: 14, color: '#c72f31' }}>
							Короткий пароль или Email уже существует
						</span>
					)}
					<FormInput
						inputType='email'
						placeholder='Ваше email'
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
					<FormInput
						inputType='text'
						placeholder='Ваше имя'
						registerName='username'
						register={register}
						errors={errors.username?.message}
					/>
          
          <FormButton isValid={isValid} buttonText='Создать' />
				</div>
				
				
        <div className={cls.formFooter}>
					<Link className={cls.route} to='/auth/login'>Уже есть аккаунт</Link>
          <img
            className={cls.google_log_in}
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

export default Register
