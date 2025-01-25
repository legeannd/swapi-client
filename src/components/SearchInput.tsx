import { Search } from 'lucide-react'

const SearchInput = ({type}: {type: string}) => {
  
  return (
    <div className="relative w-full">
    <input
      type="text"
      placeholder={`Search for ${type.toLowerCase()}`}
      className="w-full px-4 py-2 text-black bg-yellow-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 placeholder:text-gray-700"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black hover:text-white">
      <Search size={20} />
    </button>
  </div>
  )
}

export default SearchInput