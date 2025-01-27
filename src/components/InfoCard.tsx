import { Link } from "react-router";
import { Character, CharacterResponse, Film, FilmResponse, Starship, StarshipResponse } from "../types";

interface InfoCardProps {
  type: string;
  data: CharacterResponse | FilmResponse | StarshipResponse;
}

const InfoCard = ({ type, data }: InfoCardProps) => {
  if (data) {
    if (type === "people") {
      const character = data.properties as Character;
      return (
        <div className="w-full max-w-md bg-gray-800 text-yellow-400 border-2 border-yellow-400 rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-center mb-4">
              {character.name}
            </h2>
            <div className="flex justify-center mb-6"></div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Birth Year:</p>
                <p>{character.birth_year}</p>
              </div>
              <div>
                <p className="font-semibold">Gender:</p>
                <p>{character.gender}</p>
              </div>
              <div>
                <p className="font-semibold">Height:</p>
                <p>{character.height} cm</p>
              </div>
              <div>
                <p className="font-semibold">Mass:</p>
                <p>{character.mass} kg</p>
              </div>
              <div>
                <p className="font-semibold">Eye Color:</p>
                <p>{character.eye_color}</p>
              </div>
              <div>
                <p className="font-semibold">Hair Color:</p>
                <p>{character.hair_color}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="font-semibold">Skin Color:</p>
              <p>{character.skin_color}</p>
            </div>
            <div className="mt-6">
              <Link
                to={`/characters/${data.uid}`}
                className="flex items-center hover:text-white underline"
              >
                Click here to see more about {character.name}
              </Link>
            </div>
          </div>
        </div>
      );
    } else if (type === "films") {
      const film = data.properties as Film;
      return (
        <div className="w-full max-w-md bg-gray-800 text-yellow-400 border-2 border-yellow-400 rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-center">{film.title}</h2>
              <p className="text-center">Episode {film.episode_id}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Director:</p>
                <p>{film.director}</p>
              </div>
              <div>
                <p className="font-semibold">Producer:</p>
                <p>{film.producer}</p>
              </div>
              <div>
                <p className="font-semibold">Release Date:</p>
                <p>{film.release_date}</p>
              </div>
              <div>
                <p className="font-semibold">Opening Crawl:</p>
                <p className="text-sm italic">
                  {film.opening_crawl.slice(0, 150)}...
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to={`/films/${data.uid}`}
                className="flex items-center hover:text-white underline"
              >
                Click here to see more about {film.title}
              </Link>
            </div>
          </div>
        </div>
      );
    } else if(type === "starships") {
      const starship = data.properties as Starship;
      return (
        <div className="w-full max-w-md bg-gray-800 text-yellow-400 border-2 border-yellow-400 rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-center">{starship.name}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Model:</p>
                <p>{starship.model}</p>
              </div>
              <div>
                <p className="font-semibold">Class:</p>
                <p>{starship.starship_class}</p>
              </div>
              <div>
                <p className="font-semibold">Crew:</p>
                <p>{starship.crew}</p>
              </div>
              <div>
                <p className="font-semibold">Passengers:</p>
                <p>{starship.passengers}</p>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to={`/starships/${data.uid}`}
                className="flex items-center hover:text-white underline"
              >
                Click here to see more about {starship.name}
              </Link>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
};

export default InfoCard;
