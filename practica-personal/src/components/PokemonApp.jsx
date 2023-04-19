import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from '../store/slices/pokemonSlices'

export const PokemonApp = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() )
  }, [])
  

  return (
    <div>PokemonApp</div>
  )
}
