import React from 'react'
import logo from '../assets/logo/logo.svg'
import strokeLogo from '../assets/logo/logoStroke.png'
import { Link, useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-max px-[3.125rem] justify-between items-center inline-flex">
            <div className="w-[100px] h-[100px]">
                <Link to={'/'}>
                <img src={logo} alt="logo" className="w-[100px] h-[100px]" /></Link>
                
            </div>

            <div className="justify-center items-center gap-[1.875rem] flex">
            <Link to={'/capabilities'} className='text-logoGreen font-open-sans text-xl text-center font-normal'>Capabilities</Link>
            <Link to={'/pricing'} className='text-logoGreen font-open-sans text-xl text-center font-normal'>Pricing</Link>
            <Link to={'/about'} className='text-logoGreen font-open-sans text-xl text-center font-normal'>About us</Link>

            </div>
            <div className='flex flex-row gap-4'>
            <Link to={'/login'} className='bg-logoGreen w-[7rem] text-center text-white font-normal font-open-sans text-lg p-[0.75rem] rounded-lg'>Log in</Link>
            <Link to={'/register'} className='border border-logoGreen w-[7rem] text-center text-logoGreen font-normal font-open-sans text-lg p-[0.75rem] rounded-lg'>Register</Link>
            </div>
            
            
            
        </div>
    )
}
