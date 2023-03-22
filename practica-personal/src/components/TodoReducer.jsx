import React from 'react'

export const TodoReducer = (inicialState, action) => {
  switch (action.type) {
    case 'ABC':
      throw new Error('action not yet implemented')
      break;

    default:
      return inicialState;
  }
}
