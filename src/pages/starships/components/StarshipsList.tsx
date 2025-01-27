import { Rocket } from "lucide-react";
import { Link } from "react-router";
import SearchInput from "../../../components/SearchInput";
import { useEffect, useState } from "react";

interface StarshipsListProps {
  results: { name: string, uid: string }[];
}

const StarshipsList = ({ results }: StarshipsListProps) => {
  const [filter, setFilter] = useState("");
  const [filteredResults, setFilteredResults] = useState(results);

  useEffect(() => {
    const newResults = results.filter((starship) =>
      starship.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredResults(newResults);
  }, [filter, results]);

  return (
    <div className="flex flex-col gap-8">
      <SearchInput type="starships" onSearch={setFilter} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((starship) => {
          return (
            <Link to={`/starships/${starship.uid}`} key={starship.uid} className="block">
              <div className="flex items-center gap-4 bg-gray-800 border-2 border-yellow-400 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <Rocket size={32} />
                <div className="flex flex-col justify-start">
                  <h2 className="text-xl font-semibold text-yellow-400">
                    {starship.name}
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StarshipsList;
