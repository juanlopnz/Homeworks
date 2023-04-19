import React from 'react'
import { NavLink, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ProductsPage } from "./ProductsPage";
// import { SearchPage } from "./SearchPage";

export const UserRoutes = () => {
  return (
    <>
      {/* <NavLink to='/'>Index</NavLink>
      <NavLink to='about'>About</NavLink>
      <NavLink to='products'>Products</NavLink>
      <NavLink to='search'>Search</NavLink>
      <NavLink to='login'>Login</NavLink> */}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path='products' element={ <ProductsPage /> }></Route>
        <Route path='about' element={ <AboutPage /> }></Route>
        {/* <Route path='search' element={ <SearchPage /> }></Route> */}
      </Routes>
    </>
  )
}
