import React from 'react';

const EmailFormSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-xl md:text-2xl mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input 
            type="email" 
            placeholder="Email address" 
            className="p-3 w-full md:w-auto flex-1 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button 
            className="bg-red-600 text-white px-6 py-3 rounded w-full md:w-auto flex-shrink-0 hover:bg-red-700 transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailFormSection;
