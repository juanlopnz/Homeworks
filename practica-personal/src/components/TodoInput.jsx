import React, { useState } from 'react'

export const TodoInput = ({onNewTodo}) => {

  const [todo, setTodo] = useState()

  return (
    <div>
      <h4>Agregar TODO</h4>
      <hr />
      <div>
        <input value={todo} type="text" onChange={(e) => setTodo(e.target.value)} />
        <button onClick={() => {onNewTodo(todo); setTodo("")}}>Agregar</button>
      </div>
    </div>
  )
}
