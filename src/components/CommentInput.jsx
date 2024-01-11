import PropTypes from 'prop-types'

export default function CommentInput({ onContentInput, onAddComment }) {
  return (
    <>
      <div className="text-lg font-semibold">Beri Komentar</div>
      <div className="my-4">
        <div
          className="border-2 border-gray-700 p-2 mb-4 h-52 rounded-md"
          contentEditable
          onInput={onContentInput}
        ></div>
        <button
          onClick={onAddComment}
          className="bg-indigo-400 rounded-sm w-full p-2 text-white font-semibold"
          type="button"
        >
          Kirim
        </button>
      </div>
    </>
  )
}

CommentInput.propTypes = {
  onContentInput: PropTypes.func.isRequired,
  onAddComment: PropTypes.func.isRequired,
}
