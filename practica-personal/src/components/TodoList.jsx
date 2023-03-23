import React from 'react'
import { TodoItem } from './TodoItem'

export const List = ({ removeTodo, todos }) => {

  return (
    <div>
      <ul>{todos.map((todo, key) => {
        return (<TodoItem removeTodo={removeTodo} todo={todo} key={key}/>)
      })}
      </ul>
    </div>
  )
}
