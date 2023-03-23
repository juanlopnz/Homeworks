import React from 'react'

export const TodoItem = ({removeTodo, todo}) => {
  return (
    <li>
      <span> {todo.description} </span>
      <button onClick={() => removeTodo(todo)}> Borrar </button>
    </li>)
}
