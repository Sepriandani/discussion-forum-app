import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import ThreadsList from '../components/ThreadsList'
import {
  asyncDownVoteThread,
  asyncUpVoteThread,
} from '../states/threads/action'
import { useEffect, useState } from 'react'
import asyncPopulateUsersAndThreads from '../states/shared/action'

export default function ThreadsPage() {
  const { threads = [], users = [], authUser } = useSelector((states) => states)

  const dispatch = useDispatch()
  const [selectedCategory, setSelectedCategory] = useState('')

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const onUpVoteBy = (id) => {
    dispatch(asyncUpVoteThread(id))
  }

  const onDownVoteBy = (id) => {
    dispatch(asyncDownVoteThread(id))
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? '' : category,
    )
  }

  const threadsList = threads.map((thread) => ({
    ...thread,
    authUser: authUser.id,
    owner: users.find((user) => user.id === thread.ownerId)?.name || null,
  }))

  const filteredThreads =
    selectedCategory === ''
      ? threadsList
      : threadsList.filter((thread) => thread.category === selectedCategory)

  return (
    <>
      <Categories
        threads={threadsList}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ThreadsList
        threads={filteredThreads}
        upVoteBy={onUpVoteBy}
        downVoteBy={onDownVoteBy}
      />
    </>
  )
}
