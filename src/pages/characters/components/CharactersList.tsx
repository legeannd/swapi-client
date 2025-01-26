import { Link } from "react-router";
import CharacterAvatar from "./CharacterAvatar";

interface CharactersListProps {
  results: [{ uid: string; name: string }];
}

const CharactersList = ({ results }: CharactersListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((character) => {
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
  );
};

export default CharactersList;
