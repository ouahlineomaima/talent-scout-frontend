import React, { useState } from 'react'
import NoRecruitments from '../assets/ilustrations/noRecruitments.svg'
import NoRecruitmentsDark from '../assets/ilustrations/noRecruitmentsDark.svg'

export default function Recruitments() {
    const [recruitments, setRecruitments] = useState(null);
    return (
        <div className='w-screen bg-white dark:bg-darkBg flex flex-col justify-center items-center gap-3 '>
            <div className='w-full flex flex-col justify-center items-end'>
                <button className='flex flex-row w-[8rem] xs:w-[17%] h-[3.538rem] p-2 font-plus-jakarta-sans font-semibold text-xs ss:text-sm text-center items-center justify-center rounded-[1.5rem] text-white gap-2 mr-4' style={{ background: "linear-gradient(281deg, #46BC4D -6.69%, #468ABC 100%)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <path d="M18 14V23M22.5 18.5H13.5M31.5 18.5C31.5 20.2728 31.1508 22.0283 30.4724 23.6662C29.7939 25.3041 28.7995 26.7923 27.5459 28.0459C26.2923 29.2995 24.8041 30.2939 23.1662 30.9724C21.5283 31.6508 19.7728 32 18 32C16.2272 32 14.4717 31.6508 12.8338 30.9724C11.1959 30.2939 9.70765 29.2995 8.45406 28.0459C7.20047 26.7923 6.20606 25.3041 5.52763 23.6662C4.84919 22.0283 4.5 20.2728 4.5 18.5C4.5 14.9196 5.92232 11.4858 8.45406 8.95406C10.9858 6.42232 14.4196 5 18 5C21.5804 5 25.0142 6.42232 27.5459 8.95406C30.0777 11.4858 31.5 14.9196 31.5 18.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Créer un cours
                </button>
            </div>
            {!recruitments && (
                <div className='border-dashed border-2 border-gray-600 w-[70vw] h-[70vh] flex justify-center items-center flex-col gap-4 rounded-[18px]' >
                    <img src={NoRecruitments} alt="" className='w-[80%] h-[80%] block dark:hidden' />
                    <img src={NoRecruitmentsDark} alt="" className='w-[80%] h-[80%] hidden dark:block' />
                    <h2 className='text-gray-600 text-lg font-open-sans'> Create a new recruitment and Start your hiring process</h2>
                    
                </div>
            )}
        </div>
    )
}
