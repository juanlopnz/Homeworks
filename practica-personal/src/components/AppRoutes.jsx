import React from 'react'
import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { NavComponent } from "../components/NavComponent";
import { UserRoutes } from './UserRoutes';
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { PrivateRoutes } from './PrivateRoutes';
import { UserProvider } from '../components/context/UserProvider';

export const AppRoutes = () => {
  return (
    <UserProvider>
      <NavComponent></NavComponent>
      <Routes>
        <Route path='login' element={<LoginPage></LoginPage>}></Route>
        <Route path='home' element={<HomePage></HomePage>}></Route>
        <Route path="/*" element={
          <PrivateRoutes>
            <UserRoutes />
          </PrivateRoutes>
        }>
        </Route>
      </Routes>
    </UserProvider>
  )
}
