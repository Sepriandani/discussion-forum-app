import PropTypes from 'prop-types'

export default function CategoryItem({
  category,
  isSelected,
  onCategoryChange,
}) {
  const handleClick = () => {
    onCategoryChange(category)
  }

  return (
    <button
      className={`${
        isSelected && `bg-indigo-400 text-white`
      } px-3 py-1 ring-1 ring-gray-500 rounded-sm hover:bg-indigo-400 hover:text-white`}
      type="button"
      onClick={handleClick}
    >
      #{category}
    </button>
  )
}

CategoryItem.propTypes = {
  category: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onCategoryChange: PropTypes.func,
}
