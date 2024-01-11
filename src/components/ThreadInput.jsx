import PropTypes from 'prop-types'

export default function ThreadInput({
  title,
  onTitleChange,
  category,
  onCategoryChange,
  body,
  onBodyChange,
  addThread,
}) {
  return (
    <div className="w-3/4 shadow-md p-8 rounded-md m-auto border">
      <h2 className="text-xl text-center text-gray-700 font-semibold mb-8">
        Buat Diskusi Baru
      </h2>
      <form className="flex flex-col gap-4" onSubmit={addThread}>
        <input
          value={title}
          onChange={onTitleChange}
          className="p-2 border-2 border-gray-400 rounded-md"
          type="text"
          placeholder="Judul"
        />
        <input
          value={category}
          onChange={onCategoryChange}
          className="p-2 border-2 border-gray-400 rounded-md"
          type="text"
          placeholder="Kategori"
        />
        <textarea
          value={body}
          onChange={onBodyChange}
          className="p-2 border-2 border-gray-400 rounded-md"
          rows="10"
        ></textarea>
        <button
          className="p-2 bg-indigo-400 text-white rounded-md"
          type="submit"
        >
          Buat
        </button>
      </form>
    </div>
  )
}

ThreadInput.propTypes = {
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  addThread: PropTypes.func.isRequired,
}
