import React from 'react'
import { useState, useEffect, useContext } from 'react';
import logo from '../assets/logo/logo.svg'
import strokeLogo from '../assets/logo/logoStroke.svg'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


export default function NavBar() {
    const { theme, switchTheme, isAuthenticated } = useContext(AuthContext);
    const [isBurgerClicked, setIsBurgerClicked] = useState(false);
    const navigate = useNavigate()
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                localStorage.setItem("theme", "dark");
                break;
            case "light":
                element.classList.remove("dark");
                localStorage.setItem("theme", "light");
                break;
            default:
                localStorage.removeItem("theme");
                break;
        }

    }, [theme])

    function onWindowMatch() {
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
            element.classList.add("dark")
        } else {
            element.classList.remove("dark")
        }
    }
    onWindowMatch();

    darkQuery.addEventListener("change", (e) => {
        if (!"theme" in localStorage) {
            if (e.matches) {
                element.classList.add("dark")
            }
            else {
                element.classList.remove("dark")
            }
        }
    })
    const handleSwitchClick = (given) => {
        switchTheme(given === 'dark' ? 'dark' : 'light');

    }
    const handleBurgerClick = () => {
        setIsBurgerClicked(!isBurgerClicked);
    }
    return (
        <div className='flex flex-col w-screen h-24 xl:h-28 relative overflow-visible'>
            <div className="w-screen h-24 px-[3.125rem] justify-between items-center inline-flex bg-white dark:bg-darkBg">
                <div className="w-[100px] h-[100px]">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="dark:hidden w-[100px] h-[100px]" />
                        <img src={strokeLogo} alt="logo" className="hidden dark:block w-[100px] h-[100px]" /></Link>

                </div>

                <div className="hidden md:flex justify-center items-center gap-[1.875rem] ">
                    <Link to={'/capabilities'} className='text-logoGreen font-open-sans text-xl text-center font-normal'>Capabilities</Link>
                    <Link to={'/pricing'} className='text-logoGreen font-open-sans text-xl text-center font-normal'>Pricing</Link>
                    <Link to={'/about'} className='text-logoGreen font-open-sans text-xl text-center font-normal'>About us</Link>

                </div>
                {!isAuthenticated && (
                    <div className='hidden md:flex flex-row gap-4'>
                    <Link to={'/login'} className='bg-logoGreen w-[7rem] text-center text-white dark:text-darkBg font-normal font-open-sans text-lg p-[0.75rem] rounded-lg'>Log in</Link>
                    <Link to={'/register'} className='border border-logoGreen w-[7rem] text-center text-logoGreen font-normal font-open-sans text-lg p-[0.75rem] rounded-lg'>Register</Link>
                </div>
                )}
                

                {/* Theme switchers */}
                <div className='flex w-[7.66763rem] h-16 justify-center items-center gap-2 sm:gap-[1.5625rem]'>

                    <svg className='dark:fill-logoGreen dark:stroke-none stroke-logoGreen fill-none w-6 h-6 xl:w-12 xl:h-12  cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} onClick={() => handleSwitchClick('dark')}  >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 xl:w-12 xl:h-12 dark:fill-none fill-logoGreen stroke-logoGreen cursor-pointer" onClick={() => handleSwitchClick('light')} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>




                </div>
                {/* Burgur to toggle sidebar */}
                <div className='md:hidden'>
                    <div className={`relative w-6 h-6 overflow-visible justify-center items-center`}>
                        <div className='w-6 h-6 inset-x-1/2' onClick={() => handleBurgerClick()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="stroke-logoGreen w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>

                    </div>


                </div>



            </div>
            {/* Mobile navbar content */}
            {isBurgerClicked && (localStorage.getItem('token') == '' || localStorage.getItem('token') == null) && (
                <div className='flex justify-center flex-col items-start w-screen h-max border-b bg-white dark:bg-darkBg py-[0.5rem] px-[1.375rem]  border-solid stroke-content dark:stroke-navborder z-50 whitespace-nowrap'>
                    <Link to={`/capabilities`} className='flex p-[0.625rem] justify-center items-center list-none text-logoGreen hover:opacity-50 text-center font-open-sans text-base font-medium'>Capabilities</Link>
                    <Link to={`/pricing`} className='flex p-[0.625rem] justify-center items-center list-none text-logoGreen hover:opacity-50 text-center font-open-sans text-base font-medium'>Pricing</Link>
                    <Link to={`/about`} className='flex p-[0.625rem] justify-center items-center list-none text-logoGreen hover:opacity-50 text-center font-open-sans text-base font-medium'>About us</Link>

                    {/* <div className='w-full h-[0.0625rem] bg-navborder'></div> */}
                    <Link to={`/signin`} className='flex p-[0.625rem] justify-center items-center list-none text-logoGreen  opacity-50 hover:opacity-30 text-center font-open-sans text-base font-medium'>Se connecter</Link>
                    <Link to={`/joinus`} className='flex p-[0.625rem] justify-center items-center list-none text-logoGreen  opacity-50 hover:opacity-30 text-center font-open-sans text-base font-medium'>S'inscrire</Link>

                </div>
            )}

        </div>

    )
}
