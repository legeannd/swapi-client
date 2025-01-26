import { Character, CharacterResponse, Film, FilmResponse } from "../types";

interface InfoCardProps {
  type: string;
  data: CharacterResponse | FilmResponse;
}

const InfoCard = ({ type, data }: InfoCardProps) => {
  if (data) {
    console.log(data);
    if (type === "people") {
      const character = data as Character;
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
          </div>
        </div>
      );
    } else {
      const film = data as Film;
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
          </div>
        </div>
      );
    }
  } else {
    return <></>;
  }
};

export default InfoCard;
