import React, { useState, useContext } from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { REGISTER_RECRUITER } from '../graphql/AuthenticationMutations';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md';
import { useMutation } from '@apollo/client';
import AuthContext from '../context/AuthContext';

export default function Register() {
    const { setUser, login } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [registerRecruiter] = useMutation(REGISTER_RECRUITER);
    const [registerInput, setRegisterInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterInput((prevregisterInput) => ({ ...prevregisterInput, [name]: value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const { data } = await registerRecruiter({
                variables: { registerInput },
            });
            if (data) {
                console.log('Registered:', data.registerRecruiter);
                login(data.registerRecruiter.token)
                setUser(data.registerRecruiter);
                navigate('/profile')
            }
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };
    return (
        <div className='w-screen flex flex-col justify-center items-center h-max mb-4'>
            <div className='flex flex-col gap-[1.575rem]  w-full justify-center items-center'>
                <h2 className="text-3xl font-bold mb-4 text-center font-open-sans dark:text-white text-darkBg">
                    Créer un compte
                </h2>
                <form className='flex flex-col w-[40%] h-max gap-[0.875rem] items-center'>
                    {/* firstname */}
                    <div className="relative mb-4">
                        <FaUserAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey" />
                        <input
                            type="text"
                            placeholder="Firstname"
                            value={registerInput.firstname}
                            onChange={(e) => setRegisterInput({ ...registerInput, firstname: e.target.value })}
                            className="border rounded-lg p-3 pl-8  w-full md:w-64 lg:w-80 border-black border-radius-10 text-montserrat text-input bg-white dark:bg-greyInput dark:border-0 dark:text-bkg" />
                    </div>
                    {/* lastname */}
                    <div className="relative mb-4">
                        <FaUserAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey" />
                        <input
                            type="text"
                            placeholder="Lastname"
                            value={registerInput.lastname}
                            onChange={(e) => setRegisterInput({ ...registerInput, lastname: e.target.value })}
                            className="border rounded-lg p-3 pl-8  w-full md:w-64 lg:w-80 border-black border-radius-10 text-montserrat text-input bg-white dark:bg-greyInput dark:border-0 dark:text-bkg" />
                    </div>
                    {/* email */}
                    <div className="relative mb-4">
                        <FaUserAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerInput.email}
                            onChange={(e) => setRegisterInput({ ...registerInput, email: e.target.value })}
                            className="border rounded-lg p-3 pl-8 w-full md:w-64 lg:w-80 border-black border-radius-10 text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 dark:text-bkg" />
                    </div>
                    {/* Password */}
                    <div className="relative ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none" className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66146 7H12.3385C12.8657 6.99998 13.3205 6.99997 13.695 7.03057C14.0904 7.06287 14.4836 7.13419 14.862 7.32698C15.4265 7.6146 15.8854 8.07355 16.173 8.63803C16.3658 9.01641 16.4371 9.40963 16.4694 9.80498C16.5 10.1795 16.5 10.6344 16.5 11.1615V15.8386C16.5 16.3657 16.5 16.8205 16.4694 17.195C16.4371 17.5904 16.3658 17.9836 16.173 18.362C15.8854 18.9265 15.4265 19.3854 14.862 19.673C14.4836 19.8658 14.0904 19.9371 13.695 19.9694C13.3205 20 12.8657 20 12.3385 20H4.66145C4.13431 20 3.67954 20 3.30498 19.9694C2.90963 19.9371 2.51641 19.8658 2.13803 19.673C1.57355 19.3854 1.1146 18.9265 0.826984 18.362C0.63419 17.9836 0.562874 17.5904 0.530573 17.195C0.49997 16.8205 0.499984 16.3657 0.500001 15.8386V11.1614C0.499984 10.6343 0.49997 10.1795 0.530573 9.80498C0.562874 9.40963 0.63419 9.01641 0.826984 8.63803C1.1146 8.07355 1.57355 7.6146 2.13803 7.32698C2.51641 7.13419 2.90963 7.06287 3.30498 7.03057C3.67953 6.99997 4.13434 6.99998 4.66146 7ZM8.5 13C7.94772 13 7.5 13.4477 7.5 14V15C7.5 15.5523 7.94772 16 8.5 16C9.05229 16 9.5 15.5523 9.5 15V14C9.5 13.4477 9.05229 13 8.5 13Z" fill="#626262" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 4C4.5 1.79086 6.29086 0 8.5 0C10.7091 0 12.5 1.79086 12.5 4V7H10.5V4C10.5 2.89543 9.60457 2 8.5 2C7.39543 2 6.5 2.89543 6.5 4V7H4.5V4Z" fill="#626262" />
                        </svg>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Mot de passe"
                            value={registerInput.password}
                            onChange={(e) => setRegisterInput({ ...registerInput, password: e.target.value })}
                            className="border rounded-lg p-3 pl-8  w-full md:w-64 lg:w-80 border-black border-radius-10 text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 dark:text-bkg" />

                    </div>
                    <button
                        type="submit"
                        onClick={(e) => handleRegister(e)}
                        className="circle bg-logoGreen p-4 rounded-full ml-auto border-content hover:scale-110 transition-all duration-300 ease-in-out"
                        style={{ boxShadow: "0 0 10px 4px #66BC46", marginTop: "10px" }}
                    >
                        <FaArrowRight className="text-white" />
                    </button>
                </form>
                {/* sign in */}
                <div className="flex flex-col items-center justify-between gap-5 mb-6 font-poppins ">
                    <div className="">
                        <p className="text-grey">Avez-vous déjà un compte ? <Link to="/login"><span className="text-blue">Connectez-vous!</span></Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
