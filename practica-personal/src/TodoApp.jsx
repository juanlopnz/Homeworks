import React from 'react'
import { useGetTodoIdQuery } from './api/todosApi';

export const TodoApp = () => {

  const [id, setId] = useState(1);

  const {data, isLoading} = useGetTodoIdQuery(id);

  return (
    <>
      <h1>Todo App ID</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <li> {data?.title} </li>
      <button onClick={() => setId(id - 1)}>Prev ToDo</button>
      <button onClick={() => setId(id + 1)}>Next ToDo</button>
    </>
  )
}
