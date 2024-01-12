import React from 'react'
import PropTypes from 'prop-types'
import CustomLink from './CustomLink'

function MenuItem({ name, path, icon, location }) {
  return (
    <CustomLink to={path} location={location}>
      {icon} {name}
    </CustomLink>
  )
}

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
}

export default MenuItem
