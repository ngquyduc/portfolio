import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Link from 'next/link'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600
                '>Let's build something together</p>
                <h1 className='py-4 text-gray-700
                '>
                    Hi, I'm <span className='text-[#5651e5]'>Quy Duc</span>
                </h1>
                <h1 className='py-4 text-gray-700'>
                    A Full-Stack Developer 
                </h1>
                <div className='flex items-center justify-between max-w-[350px] m-auto py-5'>
                <a
                            href='https://www.linkedin.com/in/quyduc/'
                            target='_blank'
                            >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin/>
                    </div>
                            </a>
                            <a
                            href='https://github.com/ngquyduc/'
                            target='_blank'
                            >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                            </a>
                    
                    <Link href='/#contact'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                        </Link>
                    
                    
                    <a
                            href='https://drive.google.com/file/d/1Mj0hnCdL7jYCTvzs6YGC-TsqiSOaG0Zx/view?usp=sharing'
                            target='_blank'
                            >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                    </div>
                            </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main