import React, { useReducer } from 'react'
import { TodoReducer } from './TodoReducer'
import { List } from "./List";
import { Input } from "./Input";

const inicialState = [{
  id: new Date().getTime(),
  description: 'Hacer los challenges',
  done: false
}]

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(TodoReducer, inicialState)

  const handleNewTodo = (todo) => {
    const action = {
      type:'[TODO] ADD TODO',
      payload: todo
    }
    dispatch(action)
  }

  return (
    <div>
      <h1>TodoApp: 10, <small> Pendientes: 2 </small></h1>
      <hr />

      <div>
        <div>
          <List todos={ todos }></List>
        </div>
        <div>
          <Input onNewTodo={handleNewTodo}></Input>
        </div>
      </div>

    </div>
  )
}
