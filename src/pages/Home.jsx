import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import home from '../assets/ilustrations/home.svg'
import homeDark from '../assets/ilustrations/homeDark.svg'

export default function Home() {
    return (
        <div className='flex flex-row w-screen h-screen bg-white dark:bg-darkBg'>
            <div className="w-full md:w-[55%] h-2/3 justify-start items-center gap-[2.438rem] flex  pl-4 pt-4 ">
                <div className="flex flex-col  gap-[2.5rem] ">
                    <div className="flex-col justify-start items-start gap-[1.25rem] flex">
                        <h1 className="w-full  text-darkBg dark:text-white text-[4rem] font-bold font-open-sans">TalentScout <br />Hire for the future</h1>
                        <h2 className="w-full text-darkBg dark:text-white text-2xl font-semibold font-open-sans">The complete ATS system to make creative teams</h2>
                    </div>
                    <div className="justify-start items-start gap-6 ss:gap-[2.438rem] flex flex-col ss:flex-row">
                        <button className='justify-center items-center bg-logoGreen w-[11rem] h-[4.125rem] text-center text-white dark:text-darkBg font-normal font-open-sans text-lg p-[0.75rem] rounded-lg'>Get started</button>
                        <button className=' w-max h-[4.125rem] text-center text-logoGreen font-normal font-open-sans text-lg p-[0.75rem] rounded-lg border border-logoGreen pl-2 pr-3 py-3 justify-center items-center gap-2.5 flex'>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5} className="w-9 h-9 fill-none stroke-logoGreen">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                            </svg>
                            How it works</button>

                        
                    </div>
                </div>
                
            </div>
            <div className='w-[45%] h-2/3 pt-4 hidden md:block'>
                <img src={home} alt="" className='w-full h-full block dark:hidden' />
                <img src={homeDark} alt="" className='w-full h-full hidden dark:block  ' />
            </div>

        </div>
    )
}
