import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateLeaderboards } from '../states/leaderboards/action'
import LeaderboardItem from '../components/LeaderboardItem'

export default function LeaderboardsPage() {
  const dispatch = useDispatch()
  const { leaderboards = [] } = useSelector((states) => states)

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards())
  }, [dispatch])

  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">Klasmen Pengguna Aktif</h1>
      <div className="w-3/4">
        <div className="flex justify-between mb-3">
          <p>Pengguna</p>
          <p>Scrore</p>
        </div>
        {leaderboards.map(({ user, score }) => (
          <LeaderboardItem key={user.id} user={user} score={score} />
        ))}
      </div>
    </div>
  )
}
