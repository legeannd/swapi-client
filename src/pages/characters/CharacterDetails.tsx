import { Link, useParams } from "react-router";
import CharacterAvatar from "./components/CharacterAvatar";
import { useDetailedCharacter } from "../../api/queries";
import { ChevronLeft } from "lucide-react";

function CharacterDetails() {
  const { id } = useParams();
  const { data, isLoading } = useDetailedCharacter(id || "1");

  if (!data || isLoading) {
    return <p>Loading...</p>;
  }

  const filteredData = Object.entries(data).filter(([key]) => (key !== 'created' && key !== 'edited'));

  return (
    <div className="bg-gray-800 border-2 border-yellow-400 rounded-lg mt-8 p-6 max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-6">
        <CharacterAvatar name={data.name} />
        <h2 className="text-3xl font-bold text-yellow-400 mt-4">{data.name}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredData.map(([key, value]) => (
          <div key={key} className="mb-4">
            <h3 className="text-lg font-semibold text-yellow-400 capitalize">
              {key.replace("_", " ")}:
            </h3>
            <p className="text-white">{value || "Unknown"}</p>
          </div>
        ))}
      </div>
      <Link to={'/characters'} className="flex items-center mt-8 hover:text-white hover:underline">
        <ChevronLeft size={20}/>
        Back to list 
      </Link>
    </div>
  );
}

export default CharacterDetails;
