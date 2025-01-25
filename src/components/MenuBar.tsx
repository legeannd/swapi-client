import { Home, Users, Clapperboard } from "lucide-react"
import { Link } from "react-router"

const MenuBar = () => {
  return (
    <nav className="bg-yellow-400 text-black p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/" className="flex items-center hover:text-white">
            <Home className="mr-2" size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/characters" className="flex items-center hover:text-white">
            <Users className="mr-2" size={20} />
            Characters
          </Link>
        </li>
        <li>
          <Link to="/Films" className="flex items-center hover:text-white">
            <Clapperboard className="mr-2" size={20} />
            Films
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuBar

