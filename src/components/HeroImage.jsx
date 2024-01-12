import React from 'react'
import LoginImage from '../image/login-image.svg'

export default function HeroImage() {
  return (
    <div className="flex-1">
      <div className="text-4xl mb-8">Discussion Forum Website</div>
      <img className="" aria-hidden src={LoginImage} alt="login-image" />
    </div>
  )
}
