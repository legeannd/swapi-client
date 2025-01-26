interface CharacterAvatarProps {
  name: string
}

const CharacterAvatar = ({ name }: CharacterAvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div
      className={`w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center border-4 border-yellow-400`}
    >
      <span className="text-4xl font-bold text-yellow-400">{initials}</span>
    </div>
  )
}

export default CharacterAvatar

