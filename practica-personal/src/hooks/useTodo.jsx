import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { TodoReducer, actions } from '../components/TodoReducer'

const inicialState = [{
  id: new Date().getTime(),
  description: 'Hacer los challenges',
  done: false
}]

export const useTodo = () => {

  const [todos, dispatch] = useReducer(TodoReducer, inicialState)

  const [countTodos, setCountTodos] = useState(todos.length)

  const [countPendingTodos, setCountPendingTodos] = useState((todos.filter((x) => !x.done)).length)

  const handleNewTodo = useCallback(
    (todo) => {
      const action = {
        type: actions.ADD,
        payload: todo
      }
      dispatch(action)
    },
    [],
  )

  const removeTodo = useCallback(
    (todo) => {
      const action = {
        type: actions.REMOVE,
        payload: todo.id
      }
      dispatch(action)
    }, []
  )

  const doneTodo = useCallback(
    (todo) => {
      const action = {
        type: actions.DONE,
        payload: todo.id
      }
      dispatch(action)
    }, []
  )

  useEffect(() => {
    setCountTodos(todos.length)
    setCountPendingTodos((todos.filter((x) => x.done === false)).length)
  }, [todos])

  return { todos, handleNewTodo, removeTodo, doneTodo, countTodos, countPendingTodos }
}
