import { useDispatch } from 'react-redux'
import HeroImage from '../components/HeroImage'
import LoginForm from '../components/LoginForm'
import { asyncSetAuthUser } from '../states/authUser/action'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }))
    navigate('/threads')
  }

  return (
    <div className="flex gap-24 h-screen items-center p-8">
      <HeroImage />
      <LoginForm login={onLogin} />
    </div>
  )
}
