import { useLocation } from 'react-router-dom'
import menu from '../utils/menu'
import MenuItem from './MenuItem'
import { IoMdLogOut } from 'react-icons/io'
import PropTypes from 'prop-types'

export default function Sidebar({ onLogout }) {
  const location = useLocation()

  return (
    <aside className="bg-indigo-400 w-52 lg:w-60  fixed z-[9999] hidden left-36 lg:left-0 top-16 lg:top-0 lg:h-screen lg:flex items-center">
      <ul className="w-full">
        {menu.map((item, index) => (
          <MenuItem
            key={index}
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
  onLogout: PropTypes.func,
}
