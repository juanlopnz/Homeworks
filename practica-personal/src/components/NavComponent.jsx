import React from 'react'
import { NavLink } from "react-router-dom";

export const NavComponent = () => {
  return (
    <div className='flex w-full py-3 px-10 bg-gray-800 justify-end gap-2'>
      <div className='text-white text-2xl font-semibold mr-auto'>NavComponent</div>
      <NavLink className={(args) => `${args.isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'} ease-in-out duration-500`} to="/">Home</NavLink>
      <NavLink className={(args) => `${args.isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'} ease-in-out duration-500`} to="about">About</NavLink>
      <NavLink className={(args) => `${args.isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'} ease-in-out duration-500`} to="login">Login</NavLink>
    </div>
  )
}
