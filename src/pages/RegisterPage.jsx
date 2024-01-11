import { useNavigate } from 'react-router-dom'
import HeroImage from '../components/HeroImage'
import RegisterForm from '../components/RegiterForm'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../states/users/action'

export default function RegisterPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }))

    navigate('/')
  }

  return (
    <div className="flex gap-24 h-screen items-center p-8">
      <HeroImage />
      <RegisterForm register={onRegister} />
    </div>
  )
}
