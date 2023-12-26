import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { GET_CURRENT_APPLICANT } from '../graphql/Applicant';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router';

export default function ApplicantDetails() {
    const { id } = useParams(null)
    const [applicant, setApplicant] = useState(null);
    const [resume, setResume] = useState(null)
    const navigate = useNavigate();
    const { loading: applicantLoading, data: applicantData, refetch: refetchApplicant } = useQuery(GET_CURRENT_APPLICANT, {
        variables: { applicantId: id },
    });
    useEffect(() => {
        if (!applicantLoading && applicantData && applicantData.applicant) {
            setApplicant(applicantData.applicant);
            
            
        } else {
            refetchApplicant();
            if (applicantData) {
                setApplicant(applicantData.applicant);
                if(applicant.resume){
                    setResume(applicant.resume)
    
                }
            }
        }
    }, [applicantLoading, applicantData, id]);

    return (
        <div className='w-screen min-h-screen bg-white dark:bg-darkBg flex flex-col gap-2 justify-center items-center'>
            <h1 className='text-2xl font-open-sans text-darkBg dark:text-white'>General Information</h1>
            {applicant && (
                <div className='relative overflow-x-auto  rounded-md border border-gray-600'>
                    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-b-md'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-center'>
                            <tr>
                                <th scope="col" class="px-6 py-3">first name</th>
                                <th scope="col" class="px-6 py-3">last name</th>
                                <th scope="col" class="px-6 py-3">email</th>
                                <th scope="col" class="px-6 py-3">phone</th>
                                <th scope="col" class="px-6 py-3">score</th>
                                <th scope="col" class="px-6 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr key={applicant.id} className="hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer border-b  dark:border-gray-700" onClick={(e) => navigate(`/applicants/${applicant.id}`)}>
                                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">{applicant.firstname}</td>
                                <td className='px-6 py-4 text-center'>{applicant.lastname}</td>
                                <td className='px-6 py-4 text-center'>{applicant.email}</td>
                                <td className='px-6 py-4 text-center'>{applicant.phone}</td>
                                <td className='px-6 py-4 text-center'>{applicant.score}</td>
                                <td className='px-6 py-4 text-center '> <span className='px-3 py-2 bg-[#CACC90] text-gray-100 rounded'>{applicant.applicantStatus}</span></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            )}
            {applicant && applicant.resume && (
                <div className='flex flex-col gap-2 justify-start items-center w-full h-screen min-h-screen '>
                    <h1 className='text-2xl font-open-sans text-darkBg dark:text-white'>Applicant Resume </h1>
                    <iframe
                        title='Resume'
                        width='80%'
                        height='100%'
                        src={`data:application/pdf;base64,${applicant.resume}`}
                    />
                </div>

            )}

        </div>
    )
}
