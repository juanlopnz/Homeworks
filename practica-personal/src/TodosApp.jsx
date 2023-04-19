import React from 'react'
import { useGetTodosQuery } from "./api/todosApi";

export const TodosApp = () => {
  const { data = [], isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>
      
      <pre>
        {
          data.map((todo, key) => {
            return <li key={key}> {todo.title}</li>
          })
        }
      </pre>
    </>
  )
}
