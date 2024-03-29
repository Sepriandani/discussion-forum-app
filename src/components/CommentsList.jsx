import React from 'react'
import PropTypes from 'prop-types'
import CommentItem, { commentShape } from './CommentItem'

export default function CommentsList({
  comments,
  authUser,
  upVoteComment,
  downVoteComment,
}) {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          {...comment}
          authUser={authUser}
          upVoteComment={upVoteComment}
          downVoteComment={downVoteComment}
        />
      ))}
    </>
  )
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVoteComment: PropTypes.func.isRequired,
  downVoteComment: PropTypes.func.isRequired,
}
