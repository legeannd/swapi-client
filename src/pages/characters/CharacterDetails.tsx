import { useParams } from "react-router"

function CharacterDetails() {
  const { id } = useParams()
  return (
    <div className="text-white w-full h-full ">Character details {id}</div>
  )
}

export default CharacterDetails