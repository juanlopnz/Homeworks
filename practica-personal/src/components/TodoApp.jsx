import React from 'react'
import { TodoList } from "./TodoList";
import { TodoInput } from "./TodoInput";
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

  const {todos, handleNewTodo, removeTodo, doneTodo, countTodos, countPendingTodos} = useTodo()

  return (
    <div>
      <h1>TodoApp: {countTodos}, <small> Pendientes: {countPendingTodos} </small></h1>
      <hr />

      <div>
        <div>
          <TodoList doneTodo={doneTodo} removeTodo={removeTodo} todos={todos}></TodoList>
        </div>
        <div>
          <TodoInput onNewTodo={handleNewTodo}></TodoInput>
        </div>
      </div>

    </div>
  )
}
