import { useDispatch } from 'react-redux'
import ThreadInput from '../components/ThreadInput'
import { useNavigate } from 'react-router-dom'
import { asyncAddThread } from '../states/threads/action'
import useInput from '../hooks/useInput'

export default function AddThreadPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, onTitleChange] = useInput('')
  const [category, onCategoryChange] = useInput('')
  const [body, onBodyChange] = useInput('')

  const onAddThread = () => {
    dispatch(asyncAddThread({ title, category, body }))
    navigate('/threads')
  }

  return (
    <ThreadInput
      title={title}
      onTitleChange={onTitleChange}
      category={category}
      onCategoryChange={onCategoryChange}
      body={body}
      onBodyChange={onBodyChange}
      addThread={onAddThread}
    />
  )
}
