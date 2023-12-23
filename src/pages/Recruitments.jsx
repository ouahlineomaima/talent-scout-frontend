import React, { useRef, useState, useContext, useEffect } from 'react';
import NoRecruitments from '../assets/ilustrations/noRecruitments.svg';
import NoRecruitmentsDark from '../assets/ilustrations/noRecruitmentsDark.svg';
import { useMutation, useQuery } from '@apollo/client';
import { GET_RECRUITER_RECRUITMENTS, ADD_RECRUITMENT } from '../graphql/Recruitment';
import AuthContext from '../context/AuthContext';
import RecruitmentStatus from '../utils/RecruitmentStatus';
import axios from 'axios';
import { useParams } from 'react-router-dom';


// TagsInput component
const TagsInput = ({ tags, setTags }) => {
    const [inputValue, setInputValue] = useState('');

    const addTag = (e) => {
        if (e.key === 'Shift') {
            if (inputValue.length > 0) {
                setTags([...tags, inputValue]);
                setInputValue('');
            }
        }
    };

    const removeTag = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    return (

        <div className='w-full md:w-64 lg:w-80 flex flex-row flex-wrap border border-solid rounded-lg p-[10px] gap-2 text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 dark:text-bkg'>
            {tags.map((tag, index) => (
                <div key={index} className='flex items-center p-1 border border-solid border-gray-400 text-darkBg dark:text-white rounded-md'>
                    {tag} {/* <span onClick={() => removeTag(tag)} className='ml-1 cursor-pointer '>x</span> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={() => removeTag(tag)} className='ml-1 cursor-pointer w-6 h-6'>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                </div>
            ))}
            <input
                type='text'
                onKeyDown={addTag}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Technologies (press Shift to add)'
                className='flex outline-none p-1  text-darkBg dark:text-white  w-full text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 ' />
        </div>
    );
};

export default function Recruitments() {
    const [recruitments, setRecruitments] = useState(null);
    const { user, token, permissionsGranted } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [recruitmentInput, setrecruitmentInput] = useState({
        token: '',
        jobTitle: '',
        emailSubject: '',
        descriptions: {
            technologies: []
        },
    });
    const modalRef = useRef();
    /* const [isPermissionsGranted, setIsPermissionsGranted] = useState(false); */
    const [addRecruitmentMutation] = useMutation(ADD_RECRUITMENT);
    const { loading, data, refetch } = useQuery(GET_RECRUITER_RECRUITMENTS, {
        variables: { token },
    });
    const { error } = useParams();

    useEffect(() => {
        if (!loading && data && data.currentRecruiter) {
            setRecruitments(data.currentRecruiterRecruitments)

        } else {
            refetch();
            if (data) {
                setRecruitments(data.currentRecruiterRecruitments)
            }

        }
    }, [loading, data, token]);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setrecruitmentInput((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedRecruitmentInput = { ...recruitmentInput, token };
            setrecruitmentInput(updatedRecruitmentInput);
            const { data } = await addRecruitmentMutation({
                variables: { recruitmentInput },
            });
            if (data) {
                setRecruitments((prevRecruitments) => prevRecruitments.concat(data.addRecruitment));
            }

        } catch (error) {
            console.error('Loading error:', error.message);
        }

        closeModal();
    };

    /* const grantPermission = async (e) =>{
        e.preventDefault()
        try{
            await axios.get('http://localhost:5001/auth');
            if(error){
                setIsPermissionsGranted(false);
                return;

            }
            else{
                setIsPermissionsGranted(true);
                return;
            }
            


        }catch(err){
            console.log(err)
        }
    } */

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };



    return (
        <div className='w-screen bg-white dark:bg-darkBg flex flex-col justify-center items-center gap-3' >
            <div className='w-full flex flex-col justify-center items-end'>
                <button
                    onClick={openModal}
                    className='flex flex-row w-[8rem] xs:w-[15%] h-[3.538rem] font-plus-jakarta-sans font-semibold text-xs ss:text-sm text-center items-center justify-center rounded-[1rem] text-white gap-2 mr-6'
                    style={{ background: 'linear-gradient(281deg, #46BC4D -6.69%, #468ABC 100%)' }}
                >
                    <svg xmlns='http://www.w3.org/2000/svg' width='36' height='37' viewBox='0 0 36 37' fill='none'>
                        <path
                            d='M18 14V23M22.5 18.5H13.5M31.5 18.5C31.5 20.2728 31.1508 22.0283 30.4724 23.6662C29.7939 25.3041 28.7995 26.7923 27.5459 28.0459C26.2923 29.2995 24.8041 30.2939 23.1662 30.9724C21.5283 31.6508 19.7728 32 18 32C16.2272 32 14.4717 31.6508 12.8338 30.9724C11.1959 30.2939 9.70765 29.2995 8.45406 28.0459C7.20047 26.7923 6.20606 25.3041 5.52763 23.6662C4.84919 22.0283 4.5 20.2728 4.5 18.5C4.5 14.9196 5.92232 11.4858 8.45406 8.95406C10.9858 6.42232 14.4196 5 18 5C21.5804 5 25.0142 6.42232 27.5459 8.95406C30.0777 11.4858 31.5 14.9196 31.5 18.5Z'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </svg>
                    Add recruitment
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-70 flex justify-center items-center z-10' onClick={handleOverlayClick}>
                    <div className=' w-[50vw] min-h-[40vh] h-max flex justify-start items-center flex-col gap-4 rounded-[18px] bg-white dark:bg-darkBg shadow-md mt-4' ref={modalRef}>
                        <button
                            type='button'
                            onClick={closeModal}
                            className='  rounded-lg border-content dark:text-white ml-[90%] pt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='cursor-pointer w-8 h-8 text-darkBg dark:text-white'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <form className='flex flex-col items-center gap-4 w-full my-3' >
                            <input
                                type='text'
                                name='jobTitle'
                                placeholder='Job Title'
                                value={recruitmentInput.jobTitle}
                                onChange={handleInputChange}
                                className="rounded-lg p-3 w-full md:w-64 lg:w-80 border border-solid border-radius-10 text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 dark:text-bkg"
                            />
                            <input
                                type='text'
                                name='emailSubject'
                                placeholder='Email Subject'
                                value={recruitmentInput.emailSubject}
                                onChange={handleInputChange}
                                className="border rounded-lg p-3  w-full md:w-64 lg:w-80 border-solid border-radius-10 text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 dark:text-bkg"
                            />
                            {/* <input
                type='text'
                name='technologies'
                placeholder='Technologies (comma separated)'
                value={recruitmentInput.technologies.join(', ')}
                onChange={handleInputChange}
                className="border rounded-lg p-3  w-full md:w-64 lg:w-80 border-solid border-radius-10 text-montserrat text-input bg-bkg dark:bg-greyInput dark:border-0 dark:text-bkg"
              /> */}
                            <TagsInput tags={recruitmentInput.descriptions.technologies} setTags={(tags) => setrecruitmentInput((prevData) => ({ ...prevData, descriptions: { technologies: tags } }))} />
                            <div className='flex flex-row gap-2'>
                                <button
                                    type='submit'
                                    onClick={(e) => handleSubmit(e)}
                                    className='p-4 rounded-lg border-content text-white'
                                    style={{
                                        background: 'linear-gradient(281deg, #46BC4D -6.69%, #468ABC 100%)',
                                        cursor: permissionsGranted ? 'pointer' : 'not-allowed',
                                        opacity: permissionsGranted ? 1 : 0.5,
                                    }}
                                    disabled={permissionsGranted}
                                >
                                    Add recruitment
                                </button>
                                {/* <button
                                    type='button'
                                    onClick={(e) => grantPermission(e)}
                                    className=' p-4 rounded-lg border-content text-white'
                                    style={{
                                        background: 'linear-gradient(281deg, #46BC4D -6.69%, #468ABC 100%)',
                                        cursor: permissionsGranted ? 'pointer' : 'not-allowed',
                                        opacity: permissionsGranted ? 1 : 0.5,
                                    }}
                                    disabled={permissionsGranted}
                                >
                                    Grant Permission
                                </button> */}
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Content when there are no recruitments */}
            {(!recruitments || recruitments.length === 0) && (
                <div className='border-dashed border-2 border-gray-600 w-[70vw] h-[70vh] flex justify-center items-center flex-col gap-4 rounded-[18px]'>
                    <img src={NoRecruitments} alt='' className='w-[80%] h-[80%] block dark:hidden' />
                    <img src={NoRecruitmentsDark} alt='' className='w-[80%] h-[80%] hidden dark:block' />
                    <h2 className='text-gray-600 text-lg font-open-sans text-center'>Create a new recruitment and start your hiring process</h2>
                </div>
            )}
            {recruitments && recruitments.length > 0 && (
                <div className='relative overflow-x-auto  rounded-md border border-gray-600'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-b-md'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-center'>
                            <tr>
                                <th scope="col" class="px-6 py-3">Job Title</th>
                                <th scope="col" class="px-6 py-3">Tracked Email</th>
                                <th scope="col" class="px-6 py-3">Email Subject</th>
                                <th scope="col" class="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {recruitments.map((recruitment) => (
                                <tr key={recruitment.id} className="hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer border-b  dark:border-gray-700">
                                    <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{recruitment.jobTitle}</td>
                                    <td className='px-6 py-4'>{recruitment.trackedEmail}</td>
                                    <td className='px-6 py-4'>{recruitment.emailSubject}</td>
                                    <td className='px-6 py-4'> <span className={`px-3 py-2 rounded-lg text-white ${recruitment.status === RecruitmentStatus.Open ? "bg-logoGreen" : "bg-gray-700"}`}>{recruitment.status}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            )}

        </div>
    );
}
