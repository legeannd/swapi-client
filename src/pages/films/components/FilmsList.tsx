import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

interface FilmsListProps {
  result: [
    {
      uid: string, 
      properties: {
        title: string,
        director: string,
      }
    }
  ];
}

const FilmsList = ({ result }: FilmsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {result.map((film) => {
        return (
          <Link
            to={`/films/${film.uid}`}
            key={film.uid}
            className="block"
          >
            <div className="flex items-center gap-4 bg-gray-800 border-2 border-yellow-400 rounded-lg p-4 hover:bg-gray-700 transition-colors">
              <Clapperboard size={32} />
              <div className="flex flex-col justify-start">
                <h2 className="text-xl font-semibold text-yellow-400">
                  {film.properties.title}
                </h2>
                <p className="text-sm font-semibold text-yellow-400">
                  Directed by {film.properties.director}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FilmsList;
