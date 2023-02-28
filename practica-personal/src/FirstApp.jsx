import React from 'react'
import PropTypes from "prop-types";
import { useCounter } from './hooks/useCounter';

export const FirstApp = ({ title, value }) => {

  const {handleAdd, handleReset, handleSubstract, counter} = useCounter(value)

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

