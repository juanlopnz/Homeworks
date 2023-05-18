import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from '../api/todosApi';
import { counterSlice } from './slices/counterSlices';
import { pokemonSlice } from './slices/pokemon/pokemonSlice';

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice.reducer,
//     pokemons: pokemonSlice.reducer,
//     [todosApi.reducerPath]: todosApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware),
// })

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
})