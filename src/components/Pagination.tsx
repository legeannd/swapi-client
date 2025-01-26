import { Link } from "react-router";

const Pagination = ({
  currentPage,
  totalPages,
  basePath,
}: { currentPage: number; totalPages: number; basePath: string }) => {
  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {currentPage > 1 && (
        <Link
          to={`${basePath}?page=${currentPage - 1}`}
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300"
        >
          Previous
        </Link>
      )}
      <span className="text-yellow-400">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages && (
        <Link
          to={`${basePath}?page=${currentPage + 1}`}
          className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300"
        >
          Next
        </Link>
      )}
    </div>
  )
}

export default Pagination

