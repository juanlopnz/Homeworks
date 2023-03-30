import React from 'react'
import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { NavComponent } from "../components/NavComponent";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

export const MainApp = () => {
  return (
    <div className='w-full'>
      <NavComponent></NavComponent>
      <Routes>
        <Route path="/" element={ <HomePage /> }></Route>
        <Route path="login" element={ <LoginPage /> }></Route>
        <Route path="about" element={ <AboutPage /> }></Route>
        <Route path="/*" element={ <Navigate to="/about" /> }></Route>
      </Routes>
    </div>
  )
}
