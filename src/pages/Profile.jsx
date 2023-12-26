import { useContext, useState, useEffect } from "react";
import React from 'react'
import AuthContext from "../context/AuthContext";
import axios from "axios";

export default function Profile() {
    const { user, token, grantPermission, permissionsGranted } = useContext(AuthContext);
    const [message, setMessage] = useState(null)

    const handleGrantPermission = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get('http://localhost:5001/auth');
            console.log(res.error)
            if (!res.error) {
                grantPermission()
                return;
            }
            else {
                setMessage("Please grant permissions")
                setTimeout(() => setMessage(null), 5000); // Hide message after 5 seconds
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        if (permissionsGranted) {
            setMessage('Permissions granted!');
            setTimeout(() => setMessage(null), 5000); // Hide message after 5 seconds
        }
    }, [permissionsGranted]);

    return (

        <div className='flex flex-col w-screen justify-center items-center'>
            {user && (<>
                <div className="w-28 h-28 flex flex-col gap-3">
                    <img src={user.profilePicture} alt="" className="rounded-full w-20 h-20 " />
                    <h4 className="capitalize text-lg text-darkBg dark:text-white">{user.firstname} {user.lastname}</h4>
                </div>
                <div className="flex flex-row w-full gap-8 pl-4 pt-4">
                    <div className="flex flex-col w-1/2 ">
                        <div className="flex flex-col justify-start w-1/2">
                            <h4 className="capitalize text-base text-darkBg dark:text-white">Last name</h4>
                            <h4 className="capitalize text-base text-darkBg dark:text-white border border-gray-500 bg-gray-100 rounded-md pl-1">{user.lastname}</h4>
                        </div>
                        <div className="flex flex-col justify-start w-1/2">
                            <h4 className="capitalize text-base text-darkBg dark:text-white ">First name</h4>
                            <h4 className="capitalize text-base text-darkBg dark:text-white border border-gray-500 bg-gray-100 pl-1 rounded-md ">{user.firstname}</h4>
                        </div>

                    </div>
                    <div className="flex flex-col justify-start w-1/2 ">
                        <h4 className="capitalize text-base text-darkBg dark:text-white">Tracked email</h4>
                        <div className="flex flex-row gap-2">
                            <h4 className="capitalize text-base text-darkBg dark:text-white border border-gray-500 bg-gray-100 rounded-md">{user.email}</h4>
                            <button
                                type='button'
                                onClick={(e) => handleGrantPermission(e)}
                                className=' p-4 rounded-lg border-content text-white'
                                style={{
                                    background: 'linear-gradient(281deg, #46BC4D -6.69%, #468ABC 100%)',
                                    cursor: !permissionsGranted ? 'pointer' : 'not-allowed',
                                    opacity: !permissionsGranted ? 1 : 0.5,
                                }}
                                disabled={permissionsGranted}
                            >
                                Grant Permission
                            </button>
                            {message && <p>{message}</p>}
                        </div>


                    </div>




                    
                </div>
            </>)}

        </div>
    )
}
