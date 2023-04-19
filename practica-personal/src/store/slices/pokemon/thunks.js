import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoading } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
  return async ( dispatch, getState ) => {
    dispatch( startLoading() );

    // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`;
    // const resp = await fetch( url )
    // const data = await resp.json();

    const resp = await pokemonApi.get( `pokemon?limit=10&offset=${ page * 10 }` )

    dispatch( setPokemons(
      {
        getPokemons: resp.data.results,
        page: page + 1
      }
    ));
  }
}