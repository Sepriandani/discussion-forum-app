import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  asyncCreateComment,
  asyncDownVoteComment,
  asyncDownVoteThreadDetail,
  asyncNeutralizeVoteThreadDetail,
  asyncReceiveThreadDetail,
  asyncUpVoteComment,
  asyncUpVoteThreadDetail,
} from '../states/threadDetail/action'
import NotFoundPage from './NotFoundPage'
import ThreadDetail from '../components/ThreadDetail'
import CommentsList from '../components/commentsList'
import CommentInput from '../components/CommentInput'

export default function DetailThreadPage() {
  const { threadId } = useParams()
  const { threadDetail = null, authUser } = useSelector((states) => states)
  const dispatch = useDispatch()
  const [content, setContent] = useState('')

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId))
  }, [threadId, dispatch])

  const onUpVoteThreadDetail = () => {
    dispatch(asyncUpVoteThreadDetail())
  }

  const onDownVoteThreadDetail = () => {
    dispatch(asyncDownVoteThreadDetail())
  }

  const onNeutralizeVoteThreadDetail = () => {
    dispatch(asyncNeutralizeVoteThreadDetail())
  }

  const onContentCommentInputHandler = (event) => {
    setContent(event.target.innerHTML)
  }

  const onAddCommentHandler = () => {
    dispatch(asyncCreateComment({ content }))
  }

  const onUpVoteCommentHandler = (commentId) => {
    dispatch(asyncUpVoteComment(commentId))
  }

  const onDownVoteCommentHandler = (commentId) => {
    dispatch(asyncDownVoteComment(commentId))
  }

  if (threadDetail === null) {
    return <NotFoundPage />
  }

  return (
    <div className="p-8 my-5 rounded-md shadow-sm border">
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        upVoteThreadDetail={onUpVoteThreadDetail}
        downVoteThreadDetail={onDownVoteThreadDetail}
        neutralizeVoteThreadDetail={onNeutralizeVoteThreadDetail}
      />
      <div className="mt-5">
        <CommentInput
          onContentInput={onContentCommentInputHandler}
          onAddComment={onAddCommentHandler}
        />
        <div className="text-lg font-semibold">
          Komentar ({threadDetail.comments.length})
        </div>
        <CommentsList
          comments={threadDetail.comments}
          authUser={authUser.id}
          upVoteComment={onUpVoteCommentHandler}
          downVoteComment={onDownVoteCommentHandler}
        />
      </div>
    </div>
  )
}
