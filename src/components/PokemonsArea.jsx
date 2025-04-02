import { useEffect, useState } from "react";
import { usePokemonStore } from "../hooks/usePokemonStore";
import PokemonCard from "./PokemonCard";
import { LoadingSpinner } from "./LoadingSpinner";

export function PokemonsArea() {
  const [currentPage, setCurrentPage] = useState(1);
  const { startGetPokemonsFromAPI, pokemons, status } = usePokemonStore();

  useEffect(() => {
    startGetPokemonsFromAPI(currentPage);
  }, [currentPage]);

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  return (
    <main>
      <div className="container mx-auto px-4 py-6">
        <div className={`grid gap-6 shadow-md ${pokemons.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'}`}>
          {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} status={status} />
          ))}
        </div>

        {
          pokemons.length === 1 ? <> </> : <div className="flex justify-center items-center mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-stone-950 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors cursor-pointer disabled disabled:cursor-auto"
          >
            Anterior
          </button>

          <span className="mx-4 text-lg font-medium"></span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-stone-950 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors cursor-pointer"
          >
            Siguiente
          </button>
        </div>
        }
      </div>
    </main>
  );
}
