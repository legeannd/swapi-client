import { useSearchParams } from "react-router";
import { useData } from "../../api/queries";
import Pagination from "../../components/Pagination";
import FilmsList from "./components/FilmsList";

function Films() {
  const [searchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const { data, isLoading } = useData(`films?page=${currentPage}&limit=12`);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Star Wars Films
      </h1>
      {isLoading && <p>Loading list...</p>}  
      {data && 'result' in data && <FilmsList result={data?.result} />}
      <Pagination currentPage={currentPage} totalPages={data?.total_pages || currentPage} basePath="/films" />

    </div>
  );
}

export default Films