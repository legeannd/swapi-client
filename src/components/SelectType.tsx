import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const availableTypes = ["Characters", "Films", "Starships"]
const typeIDs = ["people", "films", "starships"]

interface SelectTypeProps {
  getType: (selectedType: string) => void;
}
const SelectType = ({ getType }: SelectTypeProps) => {
  const [selectedType, setSelectedType] = useState("")
  
  useEffect(() => {
    getType(typeIDs[Number(selectedType)])
  }, [getType, selectedType])
  
  return (
    <div className="relative w-full sm:w-64">
      <select
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="w-full px-4 py-2 text-black bg-yellow-400 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        {availableTypes.map((type, index) => (
          <option key={index} value={index}>
            {type}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <ChevronDown size={20} />
      </div>
    </div>
  );
};

export default SelectType;
