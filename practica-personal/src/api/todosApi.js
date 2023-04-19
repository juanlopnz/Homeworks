import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos'
    }),
    getTodoId: builder.query({
      query: () => `/todo/${id}`
    })
  })
})

export const { useGetTodosQuery, useGetTodoIdQuery } = todosApi;