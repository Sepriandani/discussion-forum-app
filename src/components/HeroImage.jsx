import LoginImage from '../image/login-image.svg'

export default function HeroImage() {
  return (
    <div className="flex-1">
      <div className="text-4xl mb-8">Discussion Forum App</div>
      <img className="" src={LoginImage} alt="login-image" />
    </div>
  )
}
