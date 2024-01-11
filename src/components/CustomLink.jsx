import { Link, useResolvedPath } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function CustomLink({ to, children, location, ...props }) {
  const resolvePath = useResolvedPath(to)
  const isActive =
    location.pathname === resolvePath.pathname ||
    location.pathname.startsWith(resolvePath.pathname)

  return (
    <li>
      <Link
        to={to}
        {...props}
        className={
          isActive
            ? 'text-indigo-400 flex gap-4 p-4 px-10 bg-white items-center'
            : 'flex gap-4 p-4 px-10 items-center text-gray-200'
        }
      >
        {children}
      </Link>
    </li>
  )
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
}
