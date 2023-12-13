import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6';

import { Link, useNavigate } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { MdRemoveRedEye } from 'react-icons/md'

import { useMutation } from '@apollo/client';
import { REGISTER_RECRUITER } from '../graphql/AuthenticationMutations';

export default function Register() {
    
    const [showPassword, setShowPassword] = useState(false);
    const [registerInput, setregisterInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    })
    const [registerRecruiter] = useMutation(REGISTER_RECRUITER);
    const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setregisterInput((prevregisterInput) => ({ ...prevregisterInput, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerRecruiter({
        variables: { registerInput },
      });
      console.log('Registered:', data.registerRecruiter);
    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };
    return (
        <div className='w-screen flex flex-col justify-center items-center h-max mb-4'>
            <div className='flex flex-col gap-[1.875rem]'>
                <h2 className="text-3xl font-bold mb-4 text-center font-open-sans dark:text-white text-darkBg">
                    Créer un compte
                </h2>
                <form className='flex flex-col w-[40%] h-max gap-[0.875rem]'>
                    {/* firstname */}
                    <div className="relative mb-4">
                        <FaUserAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey" />
                        <input
                            type="text"
                            placeholder="Firstname"
                            value={registerInput.firstname}
                            onChange={(e) => setregisterInput({ ...registerInput, firstname: e.target.value })}
                            className="border rounded p-3 pl-8  w-full md:w-64 lg:w-80 border-black border-radius-10 text-montserrat text-input bg-white dark:bg-greyInput dark:border-0 dark:text-bkg" />
                    </div>
                    {/* lastname */}
                    <div className="relative mb-4">
                        <FaUserAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey" />
                        <input
                            type="text"
                            placeholder="Lastname"
                            value={registerInput.lastname}
                            onChange={(e) => setregisterInput({ ...registerInput, lastname: e.target.value })}
                            className="border rounded p-3 pl-8  w-full md:w-64 lg:w-80 border-black border-radius-10 text-montserrat text-input bg-white dark:bg-greyInput dark:border-0 dark:text-bkg" />
                    </div>
                    {/* email */}
                    <div className="relative mb-4">
                        <FaUserAlt className="absolute top-1/2 left-2 transform -translate-y-1/2 text-grey" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={registerInput.email}
                            onChange={(e) => setregisterInput({ ...registerInput, email: e.target.value })}
                            className="border rounded p-3 pl-8 w-full md:w-64 lg:w-80 border-black border-radius-10 text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 dark:text-bkg" />
                    </div>
                    {/* Password */}
                    <div className="relative mb-4">
                       
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Mot de passe"
                            value={registerInput.password}
                            onChange={(e) => setregisterInput({ ...registerInput, password: e.target.value })}
                            className="border rounded p-3 pl-8  w-full md:w-64 lg:w-80 border-black border-radius-10 text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 dark:text-bkg" />
                        <MdRemoveRedEye
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer text-grey"
                            onClick={handleTogglePassword}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={(e)=> handleRegister(e)}
                        className="circle bg-logo p-4 rounded-full ml-auto border-content hover:scale-110 transition-all duration-300 ease-in-out"
                        style={{ boxShadow: "0 0 10px 4px #B71D83", marginTop: "10px" }}
                    >
                        <FaArrowRight className="text-white" />
                    </button>
                </form>
                {/* sign in */}
                <div className="flex flex-col items-center justify-between gap-5 mb-6 font-poppins">
                    <div className="mt-6">
                        <p className="text-grey">Avez-vous déjà un compte ? <Link to="/login"><span className="text-blue">Connectez-vous!</span></Link></p>
                    </div>
                </div>
            </div>

        </div>
    )
}
