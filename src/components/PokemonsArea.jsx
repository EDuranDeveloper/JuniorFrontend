import { useEffect } from "react";
import { usePokemonStore } from "../hooks/usePokemonStore";
import PokemonCard from "./PokemonCard";

export function PokemonsArea() {

  const { startGetPokemonsFromAPI, pokemons } = usePokemonStore();

  useEffect(() => {
    startGetPokemonsFromAPI();
  }, [])
  
  return (
    <main>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 shadow-md">
          {
            pokemons.map((pokemon)=> (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </div>

        <div className="flex justify-center items-center mt-8">
          <button
            className="px-4 py-2 bg-stone-950 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors cursor-pointer"
          >
            Anterior
          </button>

          <span className="mx-4 text-lg font-medium">
          </span>

          <button
            className="px-4 py-2 bg-stone-950 text-white rounded-lg hover:bg-stone-700 disabled:opacity-50 transition-colors cursor-pointer"
          >
            Siguiente
          </button>
        </div>
      </div>
    </main>
  );
}
