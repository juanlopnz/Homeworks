import React from 'react'
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {

  const {counter, handleAdd} = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  return (
    <div>
      <h1>MultipleCustomHooks</h1>
      {
        isLoading ? (<div>
          Loading...
        </div>
        ) : (
          <blockquote>
            <p>{ data[0]?.quote }</p>
            <footer>{ data[0]?.author }</footer>
          </blockquote>
        )
      }

      <button onClick={() => handleAdd()}>Next Quote</button>
    </div>
  )
}
