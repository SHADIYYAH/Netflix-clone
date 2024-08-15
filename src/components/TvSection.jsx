import React from 'react'
import tvImage from "../assets/images/tv-img.png"
import Section from './shared/Section'

const TvSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
        <Section>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
      <div className="flex-1 mb-8 md:mb-0 md:pr-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoy on your TV</h2>
        <p className="text-lg md:text-xl">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
        </p>
      </div>
      <div className="flex-1">
        <img src={tvImage} alt="TV" className="w-full h-auto" />
      </div>
    </div>
        </Section>
    
  </div>
  )
}

export default TvSection