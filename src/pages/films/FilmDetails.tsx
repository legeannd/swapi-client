import { useParams } from "react-router";
import { useDetailedFilm } from "../../api/queries";
import { useMemo } from "react";
import { formatDetails } from "../../utils/format";
import { Clapperboard } from "lucide-react";
import PageDetails from "../../components/PageDetails";

function FilmDetails() {
  const { id } = useParams();
  const { data, isLoading } = useDetailedFilm(id || "1");

  const filteredData = useMemo(() => (data && formatDetails(data)),[data])

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-800 border-2 border-yellow-400 rounded-lg mt-8 p-6 max-w-3xl mx-auto">
      <div className="flex flex-col items-center mb-6">
        <Clapperboard size={48} />
        <h2 className="text-3xl font-bold text-yellow-400 mt-4">{data.title}</h2>
      </div>
      <PageDetails data={filteredData} basePath={"/films"} />
    </div>
  );
}

export default FilmDetails