import { IoMdAddCircle, IoMdChatboxes, IoMdStats } from 'react-icons/io'

const menu = [
  {
    name: 'Threads',
    path: '/threads',
    icon: <IoMdChatboxes />,
  },
  {
    name: 'Leaderboards',
    path: '/leaderboards',
    icon: <IoMdStats />,
  },
  {
    name: 'Add Thread',
    path: '/new',
    icon: <IoMdAddCircle />,
  },
]

export default menu
