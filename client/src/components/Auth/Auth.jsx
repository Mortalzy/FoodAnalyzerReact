import './Auth.css'
import Button from '../Button/Button'
import { useAuth } from '../../context/AuthContext'
import { loginApi, registerApi } from '../../api/authApi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants'

const Auth = () => {
    const { login } = useAuth()

    const navigate = useNavigate()

    const emptyFormData = {
        name: "",
        second_name: "",
        email: "",
        password: "",
    }

    const [formData, setFormData] = useState({
        ...emptyFormData
    })
    const [isLogin, setIsLogin] = useState(true)
    const [info, setInfo] = useState(null)
    const [error, setError] = useState(null)

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleClearAll = () => {
        setFormData(emptyFormData)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        setInfo(null)
        setError(null)

        try {
            if (isLogin) {
                const data = await loginApi(formData)

                login(data.token, data.user)
                setInfo("Успешный вход")

                navigate(ROUTES.PROFILE)

            } else {
                const data = await registerApi(formData)

                setInfo("Успешная регистрация")

                handleChangeMode()
            }
        } catch (error) {
            setError(error.message)
        }
        finally {
            handleClearAll()
        }
    }

    const handleChangeMode = () => {
        setIsLogin(prev => !prev)
    }

    return (
        <div className="auth">
            <h1 className='auth__title'>{isLogin ? "Login" : "Register"}</h1>

            <form onSubmit={handleSubmit} className='auth__form'>
                {!isLogin && (
                    <>
                        <input
                            placeholder='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                        />
                        <input
                            placeholder='second name'
                            name='second_name'
                            value={formData.second_name}
                            onChange={handleChange}
                            type="text"
                        />
                    </>
                )}

                <input
                    placeholder='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    type="text"
                />

                <input
                    placeholder='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    type="text"
                />

                <Button className='button__submit' type='submit'>
                    {isLogin ? "Login" : "Register"}
                </Button>
            </form>

            <Button onClick={handleChangeMode}>
                {isLogin ? "You have not got account? Register!" : "Already have account? Log in!"}
            </Button>

            {error && <p className='auth__error'>{error}</p>}
            {info && <p className='auth__auth-info'>{info}</p>}
        </div>
    )
}

export default Auth