import React, { useContext } from 'react'
import { UserContext } from "./context/UserContext";

export const Child2 = () => {
  const { setUser} = useContext( UserContext )
  
  const onLogin = () =>{
    setUser({
      id: 313,
      name: 'Juan Carlos Lopez',
      email: 'jucalora17@gmail.com'
    })
  }

  return (
    <div>
      <div>Child Component 2</div>
      <button
        className='btn btn-primary'
        onClick={ () => onLogin()}
      >
        Set User Info
      </button>
    </div>
  )
}
