import PropTypes from 'prop-types'

export default function Topbar({ name, avatar }) {
  return (
    <div className="py-4 px-10 shadow-md bg-indigo-400 lg:bg-white w-full fixed z-[9999]">
      <div className="hidden lg:flex justify-between mr-60 items-center">
        <h1 className="text-xl text-left">Discussion Forum App</h1>
        <div className="flex gap-4 items-center">
          <p>{name}</p>
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src={avatar}
            alt="profile"
          ></img>
        </div>
      </div>

      <div className="flex lg:hidden justify-between items-center">
        <h1 className="text-xl font-semibold text-white">Disccusion</h1>
        <button id="hamburger" name="hamburger" type="button">
          <span className="hamburger-line transition duration-300 ease-in-out origin-top-left "></span>
          <span className="hamburger-line transition duration-300 ease-in-out"></span>
          <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
        </button>
      </div>
    </div>
  )
}

Topbar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}
