import postedAt from '../utils'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import VoteButton from './VoteButton'
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from 'react-icons/bi'
import { userShape } from './ThreadDetail'

export default function CommentItem({
  id,
  content,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  authUser,
  upVoteComment,
  downVoteComment,
}) {
  const isCommentUpVote = upVotesBy.includes(authUser)
  const isCommentDownVote = downVotesBy.includes(authUser)

  const onUpVoteClick = (event) => {
    event.stopPropagation()
    upVoteComment(id)
  }

  const onDownVoteClick = (event) => {
    event.stopPropagation()
    downVoteComment(id)
  }

  return (
    <div className="border-b-2 py-2 mt-2">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={owner.avatar}
            alt="Owner avatar"
            className="rounded-full w-6"
          ></img>
          <div className="font-semibold">{owner.name}</div>
        </div>
        <div>{postedAt(createdAt)}</div>
      </div>
      <div className="my-4">{parse(content)}</div>
      <div className="flex gap-4">
        <VoteButton
          voteBy={upVoteComment}
          votesBy={upVotesBy}
          onVoteClick={onUpVoteClick}
          icon={isCommentUpVote ? <BiSolidLike /> : <BiLike />}
        />
        <VoteButton
          voteBy={downVoteComment}
          votesBy={downVotesBy}
          onVoteClick={onDownVoteClick}
          icon={isCommentDownVote ? <BiSolidDislike /> : <BiDislike />}
        />
      </div>
    </div>
  )
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
}

CommentItem.propTypes = {
  ...commentShape,
}

// eslint-disable-next-line react-refresh/only-export-components
export { commentShape }
