import React from 'react'
import phoneImage from "../assets/images/mobile.jpg"

const MobileSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 md:mr-10">
          <img src={phoneImage} alt="Phone" className="w-full md:max-w-xs mx-auto" />
        </div>
        <div className="flex-1 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">Download your shows to watch offline</h2>
          <p className="text-lg">Save your favorites easily and always have something to watch.</p>
        </div>
      </div>
    </div>
  )
}

export default MobileSection