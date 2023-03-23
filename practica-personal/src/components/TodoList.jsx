import React from 'react'
import { useTodo } from '../hooks/useTodo'
import { TodoItem } from './TodoItem'

export const TodoList = ({doneTodo, removeTodo, todos }) => {

  return (
    <div>
      <ul>{todos.map((todo, key) => {
        return (<TodoItem removeTodo={removeTodo} doneTodo={doneTodo} todo={todo} key={key}/>)
      })}
      </ul>
    </div>
  )
}