import { Link } from "react-router";
import CharacterAvatar from "./CharacterAvatar";
import { useEffect, useState } from "react";
import SearchInput from "../../../components/SearchInput";

interface CharactersListProps {
  results: { uid: string; name: string }[];
}

const CharactersList = ({ results }: CharactersListProps) => {
  const [filter, setFilter] = useState("");
  const [filteredResults, setFilteredResults] = useState(results);

  useEffect(() => {
    const newResults = results.filter((character) =>
      character.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredResults(newResults);
  }, [filter, results]);

  return (
    <div className="flex flex-col gap-8">
      <SearchInput type="people" onSearch={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResults.map((character) => {
          return (
            <Link
              to={`/characters/${character.uid}`}
              key={character.uid}
              className="block"
            >
              <div className="bg-gray-800 border-2 border-yellow-400 rounded-lg p-4 hover:bg-gray-700 transition-colors">
                <div className="flex items-center space-x-4">
                  <CharacterAvatar name={character.name} />
                  <h2 className="text-xl font-semibold text-yellow-400">
                    {character.name}
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

export default CharactersList;
