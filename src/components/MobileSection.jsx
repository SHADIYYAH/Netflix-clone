import React from 'react'
import phoneImage from "../assets/images/mobile.jpg"
import StrangerThings from "../assets/images/boxshot-strangerthings.png"
import Icon from "../assets/icons/icon.gif"

const MobileSection = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="flex-1 md:mr-10">
          <img src={phoneImage} alt="Phone" className="w-full md:max-w-xs mx-auto" />
          <div className='flex items-center absolute'>
          <img src={StrangerThings} alt=""  className='w-50px'/>
          <div>
            <h4>Stranger Things</h4>
            <h5 className='text-blue'>Downloading ....</h5>
          </div>
          <img src={Icon} alt="" />
          </div>
          
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