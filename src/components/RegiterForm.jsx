import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useInput from '../hooks/useInput'

export default function RegisterForm({ register }) {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  return (
    <div className="flex-1">
      <div className="mx-16 p-8 shadow-md rounded-md">
        <h1 className="text-center text-2xl font-semibold mb-8">
          Yuk Daftar Dulu
        </h1>
        <form className="flex flex-col">
          <input
            value={name}
            onChange={onNameChange}
            className="mb-4 ring-gray-400 ring-1 p-2 rounded-sm"
            type="text"
            id="name"
            placeholder="Name"
          />
          <input
            value={email}
            onChange={onEmailChange}
            className="mb-4 ring-gray-400 ring-1 p-2 rounded-sm"
            type="email"
            id="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={onPasswordChange}
            className="mb-4 ring-gray-400 ring-1 p-2 rounded-sm"
            type="password"
            id="password"
            placeholder="Password"
          />
          <div className="mb-4 text-sm">
            Sudah punya akun ?{' '}
            <Link className="text-indigo-400" to="/">
              Login disini
            </Link>
          </div>
          <button
            onClick={() => register({ name, email, password })}
            className="bg-indigo-400 p-2 rounded-sm text-white font-semibold"
            type="button"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  )
}

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
}
