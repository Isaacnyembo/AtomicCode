import React from 'react'
import Background from '../assets/Background.jpg'
import {Apple, Atom,Eye,Linkedin,Mail,Aperture } from 'lucide-react'

const LoginPage = () => {
  return (
    <div className="md:w-1/2 flex flex-col gap-8 md:gap-0">
        
        <div className="flex items-center">
            <div className=' px-3 mt-3 flex gap-3 cursor-pointer'>
                <Atom className='text-blue-500'/>
                <h1 className='font-bold'>AtomicCode</h1>
            </div>
           
        </div>
        <div className="md:relative flex  items-center justify-center mx-auto ">
                    <div className='md:absolute md:top-8 w-[360px]'>
                            <div className=" flex flex-col items-center md:items-start">
                                <h4 className='font-thin'>start your Journey here</h4>
                                <h2 className='text-2xl font-bold'>Sign up to AtomicCode</h2>
                            </div>
                            <div className="mt-4 py-4 flex flex-col justify-center items-center md:gap-8 gap-14">
                                <div className='relative  md:w-full w-[300px]'>
                                    <input type="text" className="py-4 border w-full  outline-none focus:border-blue-300 rounded-md text-sm px-4 focus-within:border-blue-200" placeholder='xyz@mail.com'/>
                                    <Mail className='font-thin text-neutral-300 absolute top-3 right-1 '/>
                                    <span className='absolute -top-3 left-4 bg-white text-sm text-blue-300'>E-mail</span>
                                </div>
                                <div className='relative  md:w-full w-[300px]'>
                                    <input type="password" className="py-4 border w-full outline-none focus:border-blue-300 rounded-md text-sm px-4 focus:b" placeholder='Enter your Email'/>
                                    
                                    <button><Eye className='font-thin text-neutral-300 absolute top-3 right-1 '/></button>
                                    
                                    <span className='absolute -top-3 left-4 bg-white text-sm text-blue-300'>Password</span>
                                </div>
                                <div className='md:w-full w-[300px]'>
                                    <button className='bg-blue-400 text-white w-full p-2 rounded-sm cursor-pointer hover:bg-blue-500'>Sign Up</button>
                                </div>
                                <div className='w-full border-b  relative flex justify-center items-center'>
                                        <span className='bg-white absolute text-sm text-slate-300'>or sign up with</span>
                                </div>

                                <div className='flex justify-center gap-4 '>
                                    <div className='w-20 h-10 border flex items-center rounded-md cursor-pointer hover:text-white hover:bg-blue-400 hover:transition-all hover:duration-200'>
                                    <Aperture className='w-full'/>
                                    </div>
                                    
                                    <div className='w-20 h-10 border flex items-center rounded-md cursor-pointer hover:text-white hover:bg-blue-400 hover:transition-all hover:duration-200'>
                                    <Linkedin className='w-full'/>
                                    </div>
                                    <div className='w-20 h-10 border flex items-center rounded-md cursor-pointer hover:text-white hover:bg-blue-400 hover:transition-all hover:duration-200'>
                                    <Apple className='w-full'/>
                                    </div>
                                </div>
                            
                            </div>
                    </div>
         </div>
    </div>
  )
}

export default LoginPage