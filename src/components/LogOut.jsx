import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LogOut() {
  return (
      <NavLink to="/">
            <button className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 mt-5 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
      </NavLink>
  )
}
