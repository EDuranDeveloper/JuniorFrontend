import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading, setPokemons } from "../store/pokemon/pokemonSlice";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const limit = 6;

export function usePokemonStore() {
  const dispatch = useDispatch();
  const { pokemons, status, error } = useSelector((state) => state.pokemon);

  const startGetPokemonsFromAPI = async (page) => {
    const offset = (page - 1) * limit;
    dispatch(setLoading());

    try {
      const res = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
      const data = await res.json();

      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const pokemonData = await res.json()

          const officialArtwork = pokemonData.sprites.other["official-artwork"].front_default;

          return{
            id: pokemonData.id,              
            name: pokemonData.name,
            image: officialArtwork,
            types: pokemonData.types, 
          }
        })
      );

      dispatch(setPokemons(detailedPokemons));
    //   console.log(detailedPokemons);

    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return { pokemons, status, error, startGetPokemonsFromAPI };
}