import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import home from '../assets/ilustrations/home.svg'
import homeDark from '../assets/ilustrations/homeDark.svg'
import PricingCard from '../components/PricingCard';

export default function Home() {
    const includedFeatures = ["Unlimited Templates", "Own custom Tailwind styles", "All illimited components"]
    return (
        <div className='flex flex-col w-screen bg-white dark:bg-darkBg overflow-x-hidden gap-4'>
            {/* Lnding page */}
            <div className='flex flex-row w-screen h-[90vh] bg-white dark:bg-darkBg justify-center items-center'>

                <div className="w-full md:w-[55%] h-2/3 justify-start items-center gap-[2.438rem] flex  pl-4 pt-4 ">
                    <div className="flex flex-col  gap-[2.5rem] ">
                        <div className="flex-col justify-start items-start gap-[1.25rem] flex">
                            <h1 className="w-full  text-darkBg dark:text-white text-[4rem] font-bold font-open-sans">TalentScout <br />Hire for the future</h1>
                            <h2 className="w-full text-darkBg dark:text-white text-2xl font-semibold font-open-sans">The complete ATS system to make creative teams</h2>
                        </div>
                        <div className="justify-start items-start gap-6 ss:gap-[2.438rem] flex flex-col ss:flex-row">
                            <button className='justify-center items-center bg-logoGreen w-[11rem] h-[4.125rem] text-center text-white dark:text-darkBg font-normal font-open-sans text-lg p-[0.75rem] rounded-lg'>Get started</button>
                            <button className=' w-max h-[4.125rem] text-center text-logoGreen font-normal font-open-sans text-lg p-[0.75rem] rounded-lg border border-logoGreen pl-2 pr-3 py-3 justify-center items-center gap-2.5 flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-9 h-9 fill-none stroke-logoGreen">
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
            {/* Capabilities */}
            <div className="w-full h-max px-[1.875rem] flex-col justify-start items-center gap-[6.25rem] inline-flex mb-4">
                <h1 className="w-[60%] text-center text-darkBg dark:text-white text-6xl font-bold font-open-sans">Taking hiring to the next level</h1>
                {/* Capabilities section */}
                <div className="w-full self-stretch justify-start items-start gap-[1rem] flex flex-col lg:flex-row ">
                    <div className="w-full flex-col justify-start items-start gap-[1.875rem] inline-flex">
                        <div className="w-full justify-center items-center gap-2.5 inline-flex  h-max">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-12 fill-darkBg dark:fill-white ' viewBox="0 0 56 56" >
                                <g clip-path="url(#clip0_36_6)">
                                    <path d="M53.9984 0.0984375L32.7469 8.26875L32.9984 5.06406C33.1078 3.66406 31.5984 2.7125 30.3734 3.4125L11.0797 14.5906C4.22188 18.5609 0 25.8781 0 33.7969C0 46.0578 9.94219 56 22.2031 56C30.1219 56 37.45 51.7781 41.4203 44.9203L52.5875 25.6266C53.2984 24.4125 52.3469 22.8922 50.9359 23.0016L47.7312 23.2531L55.9016 2.00156C55.9672 1.8375 56 1.65156 56 1.47656C56 0.65625 55.3438 0 54.5234 0C54.3375 0 54.1625 0.0328125 53.9984 0.0984375ZM21 21C24.713 21 28.274 22.475 30.8995 25.1005C33.525 27.726 35 31.287 35 35C35 38.713 33.525 42.274 30.8995 44.8995C28.274 47.525 24.713 49 21 49C17.287 49 13.726 47.525 11.1005 44.8995C8.475 42.274 7 38.713 7 35C7 31.287 8.475 27.726 11.1005 25.1005C13.726 22.475 17.287 21 21 21ZM21 31.5C21 30.5717 20.6313 29.6815 19.9749 29.0251C19.3185 28.3687 18.4283 28 17.5 28C16.5717 28 15.6815 28.3687 15.0251 29.0251C14.3687 29.6815 14 30.5717 14 31.5C14 32.4283 14.3687 33.3185 15.0251 33.9749C15.6815 34.6313 16.5717 35 17.5 35C18.4283 35 19.3185 34.6313 19.9749 33.9749C20.6313 33.3185 21 32.4283 21 31.5ZM22.75 42C23.2141 42 23.6592 41.8156 23.9874 41.4874C24.3156 41.1592 24.5 40.7141 24.5 40.25C24.5 39.7859 24.3156 39.3408 23.9874 39.0126C23.6592 38.6844 23.2141 38.5 22.75 38.5C22.2859 38.5 21.8408 38.6844 21.5126 39.0126C21.1844 39.3408 21 39.7859 21 40.25C21 40.7141 21.1844 41.1592 21.5126 41.4874C21.8408 41.8156 22.2859 42 22.75 42Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_36_6">
                                        <rect className='w-14 h-14 fill-white dark:fill-none' />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h2 className="grow shrink basis-0 h-20 text-darkBg dark:text-white text-xl font-semibold font-open-sans">Effortless Resume Screening and Matching</h2>
                        </div>
                        <div className="w-full text-darkBg dark:text-white text-base font-medium font-open-sans ">Optimize your recruitment and rank your Gmail job applications effortlessly.</div>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-[1.875rem] inline-flex ">
                        <div className="w-full justify-center items-center gap-2.5 inline-flex  h-max">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-14 fill-darkBg dark:fill-white ' viewBox="0 0 56 64" >
                                <g clip-path="url(#clip0_37_19)">
                                    <path d="M43.675 5.57515C44.4125 3.86265 43.8625 1.86265 42.35 0.762654C40.8375 -0.337346 38.775 -0.237346 37.3625 0.987654L5.3625 28.9877C4.1125 30.0877 3.6625 31.8502 4.25 33.4002C4.8375 34.9502 6.3375 36.0002 8 36.0002H21.9375L12.325 58.4252C11.5875 60.1377 12.1375 62.1377 13.65 63.2377C15.1625 64.3377 17.225 64.2377 18.6375 63.0127L50.6375 35.0127C51.8875 33.9127 52.3375 32.1502 51.75 30.6002C51.1625 29.0502 49.675 28.0127 48 28.0127H34.0625L43.675 5.57515Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_37_19">
                                        <rect className='w-14 h-16 fill-white dark:fill-white' />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h2 className="grow shrink basis-0 h-20 text-darkBg dark:text-white text-xl font-semibold font-open-sans">Automated Interview Scheduling</h2>
                        </div>
                        <div className="w-full text-darkBg dark:text-white text-base font-medium font-open-sans">With just a few clicks, manage responses, and ensure a seamless scheduling experience.</div>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-[1.875rem] inline-flex">
                        <div className="w-full justify-center items-center gap-2.5 inline-flex  h-max">

                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-[3.667rem] fill-darkBg dark:fill-white ' viewBox="0 0 56 76" >
                                <g clip-path="url(#clip0_37_33)">
                                    <path d="M39.6666 56.6665C41.0666 52.0144 43.9687 48.0478 46.8416 44.0957C47.6 43.0603 48.3583 42.0248 49.0875 40.9748C51.975 36.8186 53.6666 31.7873 53.6666 26.3478C53.6666 12.1582 42.175 0.666504 28 0.666504C13.825 0.666504 2.33331 12.1582 2.33331 26.3332C2.33331 31.7728 4.02498 36.8186 6.91248 40.9603C7.64165 42.0103 8.39998 43.0457 9.15831 44.0811C12.0458 48.0332 14.9479 52.0144 16.3333 56.6519H39.6666V56.6665ZM28 75.3332C34.4458 75.3332 39.6666 70.1123 39.6666 63.6665V61.3332H16.3333V63.6665C16.3333 70.1123 21.5541 75.3332 28 75.3332ZM16.3333 26.3332C16.3333 27.6165 15.2833 28.6665 14 28.6665C12.7166 28.6665 11.6666 27.6165 11.6666 26.3332C11.6666 17.3061 18.9729 9.99984 28 9.99984C29.2833 9.99984 30.3333 11.0498 30.3333 12.3332C30.3333 13.6165 29.2833 14.6665 28 14.6665C21.5541 14.6665 16.3333 19.8873 16.3333 26.3332Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_37_33">
                                        <rect className='w-14 h-[74.67px] fill-white dark:fill-none' transform="translate(0 0.666504)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h2 className="grow shrink basis-0 h-20 text-darkBg dark:text-white text-xl font-semibold font-open-sans">Personalized Communication and Status Tracking</h2>
                        </div>
                        <div className="w-full text-darkBg dark:text-white text-base font-medium font-open-sans">Communicate efficiently with applicants by sending personalized acceptance or rejection emails.</div>
                    </div>
                    <div className="w-full flex-col justify-start items-start gap-[1.875rem] inline-flex ">
                        <div className="w-full justify-center items-center gap-2.5 inline-flex  h-max">

                            <svg xmlns="http://www.w3.org/2000/svg" className='w-12 h-12 fill-darkBg dark:fill-white ' viewBox="0 0 56 56" >
                                <g clip-path="url(#clip0_37_41)">
                                    <path d="M45.5 22.75C45.5 27.7703 43.8703 32.4078 41.125 36.1703L54.9719 50.0281C56.3391 51.3953 56.3391 53.6156 54.9719 54.9828C53.6047 56.35 51.3844 56.35 50.0172 54.9828L36.1703 41.125C32.4078 43.8813 27.7703 45.5 22.75 45.5C10.1828 45.5 0 35.3172 0 22.75C0 10.1828 10.1828 0 22.75 0C35.3172 0 45.5 10.1828 45.5 22.75ZM11.375 23.625V30.625C11.375 32.0797 12.5453 33.25 14 33.25C15.4547 33.25 16.625 32.0797 16.625 30.625V23.625C16.625 22.1703 15.4547 21 14 21C12.5453 21 11.375 22.1703 11.375 23.625ZM20.125 13.125V30.625C20.125 32.0797 21.2953 33.25 22.75 33.25C24.2047 33.25 25.375 32.0797 25.375 30.625V13.125C25.375 11.6703 24.2047 10.5 22.75 10.5C21.2953 10.5 20.125 11.6703 20.125 13.125ZM28.875 20.125V30.625C28.875 32.0797 30.0453 33.25 31.5 33.25C32.9547 33.25 34.125 32.0797 34.125 30.625V20.125C34.125 18.6703 32.9547 17.5 31.5 17.5C30.0453 17.5 28.875 18.6703 28.875 20.125Z" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_37_41">
                                        <rect className='w-14 h-14 fill-white dark:fill-none' />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h2 className="grow shrink basis-0 h-20 text-darkBg dark:text-white text-xl font-semibold font-open-sans">Dynamic Ranking System for Informed Decision-Making</h2>
                        </div>
                        <div className="w-full text-darkBg dark:text-white text-base font-medium font-open-sans">Maintain a clear overview of your recruitment pipeline with customizable statuses lables.</div>
                    </div>
                </div>
            </div>
            {/* Pricing */}
            <div className='w-full flex flex-col justify-center items-center gap-10 mt-8'>
                <h1 className="w-[60%] text-center text-darkBg dark:text-white text-6xl font-bold font-open-sans ">Discover our plans</h1>
                <div className='flex flex-row gap-4 mb-4'>
                    <PricingCard pack={{ name: "basic", price: "99$" }} includedFeatures={includedFeatures} excludedFeatures={includedFeatures} ></PricingCard>
                    <PricingCard pack={{ name: "premium", price: "99$" }} includedFeatures={includedFeatures} excludedFeatures={includedFeatures} center={true}></PricingCard>
                    <PricingCard pack={{ name: "pro", price: "99$" }} includedFeatures={includedFeatures} excludedFeatures={includedFeatures}></PricingCard>


                </div>




            </div>

        </div>


    )
}
