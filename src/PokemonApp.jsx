import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { PokemonsArea } from "./components/PokemonsArea";

export function PokemonApp() {
  return (
    <>
      <Header />
      <SearchBar />
      <PokemonsArea />
    </>
  )
}