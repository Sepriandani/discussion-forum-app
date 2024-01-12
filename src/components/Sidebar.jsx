import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { IoMdLogOut } from 'react-icons/io'
import menu from '../utils/menu'
import MenuItem from './MenuItem'

export default function Sidebar({ onLogout }) {
  const location = useLocation()

  return (
    <aside className="bg-indigo-400 w-52 lg:w-60  fixed z-10 hidden left-36 lg:left-0 top-16 lg:top-0 lg:h-screen lg:flex items-center">
      <ul className="w-full">
        {menu.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            path={item.path}
            icon={item.icon}
            location={location}
          />
        ))}
        <li>
          <button
            onClick={onLogout}
            className="flex gap-4 p-4 px-10 items-center text-gray-200"
            type="button"
          >
            <IoMdLogOut /> Logout
          </button>
        </li>
      </ul>
    </aside>
  )
}

Sidebar.propTypes = {
  onLogout: PropTypes.func.isRequired,
}
