import {createSlice} from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemonspage = action.payload.pokemons;
    }
  }
})

export const { startLoading, setPokemon } = pokemonSlice.actions;