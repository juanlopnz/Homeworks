import React, { useContext } from 'react'
import { useLocation } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const PrivateRoutes = ({ children }) => {
  const { isLogged } = useContext( UserContext )

  const { pathname, search } = useLocation();
  // localStorage.setItem('lastPath', `${pathname}${search}`)

  return isLogged ? children : <> Error 403 </>
}
