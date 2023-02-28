import React from 'react'
import { useState } from 'react';

export const FirstApp = ({ title, value }) => {

  const [counter, setCounter] = useState( value );

  const handleAdd = () => {
    setCounter(counter + 1)
  }

  const handleSubstract = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(value)
  }

  return (
    <>
      <h1>{ title }</h1>
      <div>
        <span>{ counter }</span>
      </div>   

      <button onClick={ () => handleAdd()} > +1 </button>
      <button onClick={ () => handleSubstract()}> -1 </button>
      <button onClick={ () => handleReset()}> Reset </button>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
  title: "No hay Title hermano!!!!",
  value: 300
}

