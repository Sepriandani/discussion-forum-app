import React from 'react'
import { nanoid } from 'nanoid'
import { IoMdAddCircle, IoMdChatboxes, IoMdStats } from 'react-icons/io'

const menu = [
  {
    id: nanoid(),
    name: 'Threads',
    path: '/threads',
    icon: <IoMdChatboxes />,
  },
  {
    id: nanoid(),
    name: 'Leaderboards',
    path: '/leaderboards',
    icon: <IoMdStats />,
  },
  {
    id: nanoid(),
    name: 'Add Thread',
    path: '/new',
    icon: <IoMdAddCircle />,
  },
]

export default menu
