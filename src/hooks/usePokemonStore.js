import { useDispatch, useSelector } from "react-redux";
import { setAllPokemonNames, setError, setLoading, setPokemons } from "../store/pokemon/pokemonSlice";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const limit = 6;

export function usePokemonStore() {
  const dispatch = useDispatch();
  const { pokemons, status, error, allPokemonNames } = useSelector((state) => state.pokemon);

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
            weight: (pokemonData.weight / 10),
            height: (pokemonData.height / 10)
          }
        })
      );

      dispatch(setPokemons(detailedPokemons));

    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const startGetAllPokemonNames = async () => {
    dispatch(setLoading());
    
    if (allPokemonNames.length > 0) return;

    try {
      const res = await fetch(`${API_URL}?limit=10000`);
      const data = await res.json();

      const namesList = data.results.map((pokemon) => ({
        name: pokemon.name,
        url: pokemon.url,
      }));

      dispatch(setAllPokemonNames(namesList));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  const startGetPokemonBySearch = async (searchTerm) => {
    dispatch(setLoading());

    try {
      const res = await fetch(`${API_URL}/${searchTerm.toLowerCase()}`);
      if (!res.ok) {
        throw new Error("Pokémon no encontrado");
      }
      const data = await res.json();

      const officialArtwork = data.sprites.other["official-artwork"].front_default;

      const detailedPokemon = {
        id: data.id,
        name: data.name,
        image: officialArtwork,
        types: data.types,
        weight: data.weight / 10,
        height: data.height / 10,
      };

      dispatch(setPokemons([detailedPokemon])); 
    } catch (err) {
      dispatch(setError(err.message));
    }
  };

  return {
    //Attributes 
    pokemons, 
    status, 
    error, 
    allPokemonNames,

    //Methods 
    startGetPokemonsFromAPI, 
    startGetAllPokemonNames,
    startGetPokemonBySearch,
   };
}