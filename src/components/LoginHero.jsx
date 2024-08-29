import React from 'react'
import Background from '../assets/Background.jpg'
const LoginHero = () => {
  return (
    <div className='md:w-1/2 h-screen md:blur-0 blur-sm hidden md:block'>
        <img src={Background} alt="" className='h-screen object-cover'/>
    </div>
  )
}

export default LoginHero