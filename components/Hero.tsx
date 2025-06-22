import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className='relative pb-20 pt-36 min-h-screen'>
        <div className='relative'>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
            <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw]' fill="purple" />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
        </div>
        
        <div className='relative z-10 text-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
                Welcome to My Portfolio
            </h1>
            <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                I'm a developer passionate about creating amazing digital experiences
            </p>
        </div>
    </div>
  )
}

export default Hero