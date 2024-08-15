import React from 'react'
import netflixLogo from "../assets/images/netflix-logo.png"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-transparent absolute top-0 w-full z-10">
    <img  className=" cursor-pointer" src={netflixLogo} alt="" width={90}/>
    <button className="text-white bg-red-600 px-4 py-2 rounded">Sign In</button>
  </nav>
  )
}

export default Navbar