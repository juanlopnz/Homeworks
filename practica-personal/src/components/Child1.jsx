import React, { useContext } from 'react'
import { UserContext } from "./context/UserContext";

export const Child1 = () => {
  const { user } = useContext( UserContext );

  return (
    <div>
      <div>Child Component 1</div>
      <pre>
        { JSON.stringify( user, null, 3) }
      </pre>
    </div>
  )
}
