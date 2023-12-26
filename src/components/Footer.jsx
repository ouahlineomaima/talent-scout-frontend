import React from 'react'
import MobileStoreButton from 'react-mobile-store-button';


export default function Footer() {

    return (
        <div className="flex w-screen h-max ss:h-[30.625rem] py-4 bg-white dark:bg-darkBg flex-col justify-start items-start gap-[1.063rem] ss:inline-flex">
            <div className="self-stretch px-[7.5rem] ss:pt-[3.75rem] pb-6 justify-between items-start ss:inline-flex flex flex-col ss:flex-row">
                {/* Logo */}
                <div className="w-[11.625rem] h-[7.875rem] justify-between items-center flex">
                    <a href='#' className='bg-Logo dark:bg-LogoStroke bg-cover w-[11.35256rem] h-[8.80019rem]'></a>
                </div>
                {/* A propos */}
                <div className="w-[12.5rem] pr-4 py-4 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-slate-500 text-lg font-bold font-nunito-sans">À propos</div>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">À propos de TalentScout</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Comment ça marche</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Presse</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Blog</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Forum</a>

                    </div>
                </div>

                {/* Partenariat */}
                <div className="w-[13.75rem] pr-4 py-4 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                        <div href="" className="grow shrink basis-0 text-slate-500 text-lg font-bold font-nunito-sans">Partenariat</div>

                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Programmes</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Promotions et événements</a>

                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Intégration</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Commaunté</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Programme de fidilité</a>
                    </div>
                </div>
                {/* Support */}
                <div className="w-[12.5rem] pr-4 py-4 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                        <div className="grow shrink basis-0 text-slate-500 text-lg font-bold font-nunito-sans">Support</div>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Centre d’aide</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Contacter nous</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Politique de confidentialté</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Terms of service</a>

                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Condition d’utilisation</a>
                    </div>
                    <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">

                        <a href="" className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">Accessibilité</a>
                    </div>
                </div>
                {/* Obtenir l'App */}
                <div className="w-[12.5rem] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="h-[8.813rem] pr-4 py-4 flex-col justify-start items-start gap-2 flex">
                        <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-slate-500 text-lg font-bold font-nunito-sans">Obtenir l’application</div>
                        </div>

                        <div className="self-stretch p-1 justify-start items-start gap-2.5 inline-flex">
                            <div className="grow shrink basis-0 text-slate-400 text-base font-normal font-nunito-sans">TalentScout pour Android</div>
                        </div>
                        <MobileStoreButton
                            store="android"
                            url="#"
                            linkProps={{ title: 'App Store Button' }}
                            width={167}
                            height={72}
                        />
                    </div>


                </div>
            </div>


            <div className="self-stretch h-16 ss:px-[7.5rem] ss:py-3 justify-between items-center  ss:inline-flex bg-bkg dark:bg-content flex flex-col ss:flex-row">
                <div className="p-2 justify-start items-start gap-5 flex">
                    <div className="w-6 h-6 relative" >
                        {/* Twitter */}
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M23 6.01262C22.7129 6.4417 22.3882 6.84184 22.0259 7.21304C21.6636 7.58423 21.2705 7.92307 20.8467 8.22956C20.8535 8.32491 20.8586 8.41856 20.8621 8.51051C20.8655 8.60246 20.8672 8.69611 20.8672 8.79146C20.8672 9.64963 20.7749 10.4976 20.5903 11.3353C20.4058 12.1731 20.1392 12.9836 19.7905 13.7668C19.2847 14.9042 18.6523 15.9208 17.8936 16.8164C17.1348 17.712 16.2751 18.4697 15.3147 19.0895C14.3543 19.7093 13.3066 20.1827 12.1719 20.5096C11.0371 20.8365 9.84766 21 8.60351 21C7.42773 21 6.281 20.8382 5.16333 20.5147C4.04565 20.1912 2.99121 19.7093 2 19.0691C2.33496 19.11 2.67676 19.1304 3.02539 19.1304C4.00293 19.1304 4.94799 18.9738 5.86059 18.6605C6.77319 18.3471 7.6123 17.8908 8.37792 17.2915C7.91992 17.2846 7.479 17.208 7.05517 17.0616C6.63134 16.9152 6.2434 16.7108 5.89135 16.4486C5.5393 16.1864 5.23168 15.8748 4.9685 15.5138C4.70531 15.1528 4.50194 14.7544 4.35839 14.3185C4.49511 14.3389 4.63012 14.356 4.76342 14.3696C4.89672 14.3832 5.03173 14.39 5.16845 14.39C5.55126 14.39 5.92723 14.3389 6.29638 14.2368C5.79052 14.1346 5.32739 13.9541 4.90698 13.6953C4.48657 13.4365 4.12255 13.1215 3.81493 12.7503C3.50732 12.3791 3.26806 11.9602 3.09716 11.4937C2.92626 11.0271 2.84081 10.5385 2.84081 10.0276V9.97656C3.44238 10.3171 4.09521 10.4976 4.79931 10.518C4.49853 10.3137 4.23022 10.0804 3.99438 9.81821C3.75854 9.55599 3.55859 9.27163 3.39453 8.96514C3.23046 8.65865 3.104 8.33514 3.01513 7.99459C2.92626 7.65405 2.88183 7.30329 2.88183 6.94231C2.88183 6.5609 2.92968 6.188 3.02538 5.82362C3.12109 5.45924 3.26806 5.11358 3.4663 4.78666C4.01318 5.46094 4.62158 6.06541 5.2915 6.60006C5.96142 7.13472 6.67407 7.59275 7.42944 7.97416C8.18481 8.35557 8.97607 8.65695 9.80321 8.87831C10.6304 9.09966 11.478 9.23077 12.3462 9.27164C12.3052 9.11498 12.2761 8.95323 12.259 8.78636C12.2419 8.61949 12.2334 8.45433 12.2334 8.29087C12.2334 7.69832 12.3462 7.14153 12.5718 6.62049C12.7974 6.09946 13.105 5.64483 13.4946 5.25661C13.8843 4.86839 14.3406 4.5619 14.8635 4.33714C15.3865 4.11238 15.9453 4 16.54 4C17.1416 4 17.7141 4.11749 18.2576 4.35246C18.801 4.58744 19.2778 4.92288 19.688 5.35877C20.1733 5.26342 20.6433 5.1289 21.0979 4.95523C21.5525 4.78155 21.9917 4.56871 22.4155 4.31671C22.2583 4.8139 22.0173 5.26683 21.6926 5.67548C21.3679 6.08413 20.98 6.42127 20.5288 6.6869C21.3901 6.58474 22.2139 6.35998 23 6.01262L23 6.01262Z" fill="#6E7491" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-6 h-6 relative">
                        {/* Instagram */}
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.25 7.45455C1.25 4.04033 4.04033 1.25 7.45455 1.25H16.5455C19.9597 1.25 22.75 4.04033 22.75 7.45455V16.5455C22.75 19.9597 19.9597 22.75 16.5455 22.75H7.45455C4.04033 22.75 1.25 19.9597 1.25 16.5455V7.45455ZM7.45455 2.75C4.86876 2.75 2.75 4.86876 2.75 7.45455V16.5455C2.75 19.1312 4.86876 21.25 7.45455 21.25H16.5455C19.1312 21.25 21.25 19.1312 21.25 16.5455V7.45455C21.25 4.86876 19.1312 2.75 16.5455 2.75H7.45455ZM12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5ZM12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM17 7C17.5523 7 18 6.55228 18 6C18 5.44771 17.5523 5 17 5C16.4477 5 16 5.44771 16 6C16 6.55228 16.4477 7 17 7Z" fill="#6E7491" />
                            </svg>
                        </a>
                    </div>
                    <div className="w-6 h-6 relative">
                        {/* Facebook */}
                        <a href="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M20.0524 3H3.94765C3.70178 3.0166 3.47027 3.12177 3.29602 3.29602C3.12177 3.47027 3.0166 3.70178 3 3.94765V20.0524C3.00139 20.3033 3.10168 20.5435 3.2791 20.7209C3.45651 20.8983 3.69674 20.9986 3.94765 21H12.5686V13.9895H10.2942V11.3372H12.6628V9.34765C12.6118 8.87052 12.6666 8.388 12.8233 7.93447C12.9801 7.48095 13.2349 7.06757 13.5697 6.72379C13.9045 6.38002 14.311 6.1143 14.7602 5.94558C15.2094 5.77685 15.6903 5.70927 16.1686 5.74765C17.1162 5.74765 17.9686 5.84188 18.2524 5.84188V8.30577H16.8314C15.6942 8.30577 15.5047 8.87435 15.5047 9.63247V11.3372H18.1571L17.778 14.0848H15.4105V21H20.0524C20.3033 20.9986 20.5435 20.8983 20.7209 20.7209C20.8983 20.5435 20.9986 20.3033 21 20.0524V3.94765C20.9834 3.70178 20.8782 3.47027 20.704 3.29602C20.5297 3.12177 20.2982 3.0166 20.0524 3V3Z" fill="#6E7491" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="text-right text-slate-400 text-lg font-normal font-['Nunito Sans']">© 2023 TalentScout</div>
            </div>
        </div>









    )
}