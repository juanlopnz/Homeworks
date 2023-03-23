import React from 'react'

export const actions = {
  ADD: 'add',
  REMOVE: 'rm'
}

export const TodoReducer = (initialState = [], action) => {
  switch (action.type) {
    case actions.ADD:
      return [...initialState, {
        id: new Date().getTime(),
        description: action.payload, 
        done: false
      }]
    case (actions.REMOVE):
      const newState = initialState.filter((x) => x.id !== action.payload)
      return newState
    default:
      return initialState;
  }
  return initialState;
}
