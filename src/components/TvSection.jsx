
import React from 'react';
import tvImage from "../assets/images/tv-img.png";
import Section from './shared/Section';

const TvSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <Section>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="flex-1 mb-12 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Enjoy on your TV</h2>
            <p className="text-lg md:text-2xl leading-relaxed">
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img 
              src={tvImage} 
              alt="TV" 
              className="w-full h-auto md:max-w-2xl lg:max-w-3xl xl:max-w-4xl" 
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default TvSection;
