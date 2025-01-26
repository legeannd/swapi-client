import { useSearchParams } from "react-router";
import { useData } from "../../api/queries";
import Pagination from "../../components/Pagination";
import CharactersList from "./components/CharactersList";

function Characters() {
  const [searchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const { data, isLoading } = useData(`people?page=${currentPage}&limit=12`);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-8">
        Star Wars Characters
      </h1>
      {isLoading && <p>Loading list...</p>}  
      {data?.results && <CharactersList results={data?.results} />}
      <Pagination currentPage={currentPage} totalPages={data?.total_pages || currentPage} basePath="/characters" />

    </div>
  );
}

export default Characters;
