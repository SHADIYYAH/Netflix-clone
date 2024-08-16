import React from 'react';
import tvImage from "../assets/images/netflix-background.jpg"

const SignIn = () => {
  return (
    <div className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${tvImage})` }}> 
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-white text-5xl font-bold mb-4">Sign In</h1>
        <form className="flex flex-col max-w-md w-full">
          <input type="email" placeholder="Email or mobile number" className="mb-4 px-4 py-3 text-black bg-white rounded-md outline-none" />
          <input type="password" placeholder="Password" className="mb-4 px-4 py-3 text-black bg-white rounded-md outline-none" />
          <button className="bg-red-600 text-white font-semibold px-9 py-3 rounded-md">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
