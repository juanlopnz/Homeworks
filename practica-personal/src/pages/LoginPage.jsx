import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../components/context/UserContext';

export const LoginPage = () => {
  const { setUser, setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const onLogin = () => {
    setUser({
      username: username,
      password: password
    })

    setIsLogged(true);

    const lastPath = localStorage.getItem('lastPath') || '/';
    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <>
      <div>Login Page</div>
      <div className='flex flex-col items-center'>
        <input
          type="text"
          className="px-4 py-2 w-72 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nombre de usuario"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          className="px-4 py-2 w-72 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className='bg-gray-300 w-16 rounded-md p-2 hover:bg-gray-500' onClick={() => onLogin()}>
          Login
        </button>
      </div>
    </>
  )
}
