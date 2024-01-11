import { BiShare } from 'react-icons/bi'

export default function ShareVoteButton() {
  return (
    <div className="flex items-center gap-1">
      <button className="text-lg" type="button">
        <BiShare />
      </button>
      <div>0</div>
    </div>
  )
}
