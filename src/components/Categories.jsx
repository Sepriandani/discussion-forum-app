import PropTypes from 'prop-types'
import CategoryItem from './CategoryItem'

export default function Categories({
  threads,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="w-full">
      <div className="text-lg mb-4">Kategori Populer</div>
      <div className="flex gap-4">
        {threads.map((thread) => (
          <CategoryItem
            key={thread.id}
            category={thread.category}
            isSelected={selectedCategory === thread.category}
            onCategoryChange={onCategoryChange}
          />
        ))}
      </div>
    </div>
  )
}

Categories.propTypes = {
  threads: PropTypes.array.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
}
