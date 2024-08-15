import React from "react";

import StrangerThings from "../assets/images/boxshot-strangerthings.png";
// import phoneImage from "../assets/images/mobile.jpg"
import phoneImage from "../assets/images/mobile.jpg";
import Icon from "../assets/icons/icon.gif";

const MobileSection = () => {
  return (
    <section className="py-12 border-b border-gray-700 bg-black">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center px-4">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={phoneImage}
            alt="Mobile device"
            className="w-72 md:w-80 lg:w-96"
          />

          <div className="absolute bottom-4 w-[180px] md:w-[200px] lg:w-[220px] bg-black/70 p-2 flex items-center justify-between rounded-md">
            <img
              src={StrangerThings}
              alt="Stranger Things"
              className="w-12 h-16 object-cover rounded-md"
            />

            <div className="ml-2">
              <p className="text-white text-sm">Stranger Things</p>
              <p className="text-blue-500 text-xs">Downloading...</p>
            </div>
            <img src={Icon} alt="Downloading icon" className="w-6 h-6 ml-2" />
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">
            Download your shows to watch offline
          </h2>
          <p className="mt-4 text-gray-400">
            Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileSection;
