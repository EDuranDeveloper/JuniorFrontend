import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemons: [],
    allPokemonNames: [],
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
      state.status = "succeeded";
    },
    setAllPokemonNames: (state, action) => {
      state.allPokemonNames = action.payload;
      state.status = "succeeded";
    },
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const { setPokemons, setLoading, setError, setAllPokemonNames } = pokemonSlice.actions;