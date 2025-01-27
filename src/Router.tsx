import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import { DefaultLayout } from "./layouts/Default";
import Characters from "./pages/characters/index";
import CharacterDetails from "./pages/characters/CharacterDetails";
import Films from "./pages/films/index";
import FilmDetails from "./pages/films/FilmDetails";
import Starships from "./pages/starships";
import StarshipDetails from "./pages/starships/StarshipDetails";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmDetails />} />
        <Route path="/starships" element={<Starships />} />
        <Route path="/starships/:id" element={<StarshipDetails />} />
      </Route>
    </Routes>
  );
}
