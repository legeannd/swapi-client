import { useState } from "react";
import SearchInput from "../components/SearchInput";
import SelectType from "../components/SelectType";
import InfoCard from "../components/InfoCard";
import { useSearchByName } from "../api/queries";

function Home() {
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isError, isLoading } = useSearchByName(
    selectedType,
    searchTerm
  );

  const getCurrentType = (type: string) => {
    setSelectedType(type);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1
        className={`space-mono-regular text-4xl md:text-6xl text-center mb-8`}
      >
        Welcome to the Galaxy Far, Far Away
      </h1>
      <p className="text-xl md:text-2xl text-center max-w-2xl mb-2">
        Greetings, young Padawan! May the Force be with you on your new journey.
      </p>
      <p className="text-xs md:text-sm text-center max-w-2xl mb-8">
        Use the search input to search about your favorite characters, films or starships.
      </p>
      <div className="flex gap-2">
        <SelectType getType={getCurrentType} />
        <SearchInput type={selectedType} onSearch={handleSearch} />
      </div>

      <div className="my-4">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error, check your input and try again</p>}
        {!isError && !isLoading && <InfoCard type={selectedType} data={data} />}
      </div>
    </main>
  );
}

export default Home;
