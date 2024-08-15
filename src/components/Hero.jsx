import React from 'react'
import backgroundImage from "../assets/images/netflix-background.jpg"
import { FaChevronRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div
    className="relative h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-white text-5xl font-bold mb-4">Unlimited movies, TV shows, and more.</h1>
      <h2 className="text-white text-2xl mb-4">Watch anywhere. Cancel anytime.</h2>
      <p className="text-white text-lg mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
      <form className="flex max-w-lg w-full">
        <input
          type="email"
          placeholder="Email address"
           className="flex-grow px-4 py-3 text-white bg-transparent border border-white rounded-l-md outline-none"
        />
        <button  className="bg-red-600 text-white font-semibold px-9 py-3 ml-2 rounded-md flex items-center">
          Get Started <FaChevronRight />
        </button>
      </form>
    </div>
  </div>
  )
}

export default Hero