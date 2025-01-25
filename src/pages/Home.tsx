import { useState } from "react";
import SearchInput from "../components/SearchInput";
import SelectType from "../components/SelectType";

function Home() {
  const [selectedType, setSelectedType] = useState("");
  const getCurrentType = (type: string) => {
    setSelectedType(type);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className={`space-mono-regular text-4xl md:text-6xl text-center mb-8`}>
        Welcome to the Galaxy Far, Far Away
      </h1>
      <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
        Greetings, young Padawan! May the Force be with you on your new journey.
      </p>
      <div className="flex gap-2">
        <SelectType getType={getCurrentType} />
        <SearchInput type={selectedType} />
      </div>
    </main>
  );
}

export default Home;
