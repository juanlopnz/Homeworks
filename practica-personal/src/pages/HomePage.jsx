import React, { useContext } from 'react'
import { UserContext } from "../components/context/UserContext";

export const HomePage = () => {

  const { user, isLogged } = useContext(UserContext);

  return (
    <div>HomePage
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      {isLogged && <h1>Bienvenido {user?.username}</h1>}
    </div>
  )
}
