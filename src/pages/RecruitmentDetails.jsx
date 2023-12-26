import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useQuery } from '@apollo/client';
import AuthContext from '../context/AuthContext';
import { useContext, useState, useEffect } from 'react';
import { GET_RECRUITMENT } from '../graphql/Recruitment';
import { GET_RECRUITMENT_APPLICANTS } from '../graphql/Applicant';
import { GET_RECRUITMENT_CHECKED_APPLICANTS } from '../graphql/Applicant';

export default function RecruitmentDetails() {

    const { id } = useParams(null)
    const [recruitment, setRecruitment] = useState(null);
    const [applicants, setApplicants] = useState(null);
    const { user } = useContext(AuthContext)
    const { loading: recruitmentLoading, data: recruitmentData, refetch: refetchRecruitment } = useQuery(GET_RECRUITMENT, {
        variables: { recruitmentId: id },
    });

    const { loading: applicantsLoading, data: applicantsData, refetch: refetchApplicants } = useQuery(GET_RECRUITMENT_CHECKED_APPLICANTS, {
        variables: { idRecruitment: id },
    });
    const navigate = useNavigate()
    useEffect(() => {
        if (!recruitmentLoading && recruitmentData && recruitmentData.recruitment) {
            setRecruitment(recruitmentData.recruitment);
        } else {
            refetchRecruitment();
            if (recruitmentData) {
                setRecruitment(recruitmentData.recruitment);
            }
        }
    }, [recruitmentLoading, recruitmentData, id]);

    useEffect(() => {
        if (!applicantsLoading && applicantsData && applicantsData.checkedRecruitmentApplicants) {
            setApplicants(applicantsData.checkedRecruitmentApplicants);
        } else {
            refetchApplicants();
            if (applicantsData) {
                setApplicants(applicantsData.checkedRecruitmentApplicants);
            }
        }
    }, [applicantsLoading, applicantsData, recruitment, id]);
    return (
        <div className='flex flex-col w-screen gap-4  bg-white dark:bg-darkBg pb-4'>
            {user && recruitment && applicants && (
                <div className='flex flex-row gap-3 justify-between pl-2 items-center mx-2'>
                    <div className='flex flex-row gap-2 items-center mt-4'>
                        <img src={user.profilePicture} alt="" className='w-32 h-32 shadow-lg' style={{ borderRadius: "50%" }} />
                        <h3 className='uppercase text-base font-open-sans text-darkBg dark:text-white'>{user.firstname} {user.lastname}</h3>
                    </div>
                    <div className='flex flex-col justify-start items-start gap-2'>
                        <h3 className=' text-lg font-open-sans text-darkBg dark:text-white'>Job Title: {recruitment.jobTitle}</h3>
                        <h3 className=' text-lg font-open-sans text-darkBg dark:text-white'>Email subject: {recruitment.emailSubject}</h3>
                        <div className='flex flex-row gap-2 flex-wrap text-lg text-darkBg dark:text-white'>
                            Technologies: 
                            {recruitment.descriptions.technologies.map((technology) => {
                                return (
                                    <h3 className='capitalize bg-logoGreen rounded-md  text-base font-open-sans text-white mx-1 p-1'>
                                        {technology}
                                    </h3>
                                );
                            })}
                        </div>


                    </div>
                </div>

            )}

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl font-open-sans text-darkBg dark:text-white text-center'>List of applicants</h1>
                {applicants && (
                    <div className='relative overflow-x-auto  rounded-md border border-gray-600'>
                        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-b-md'>
                            <thead className='text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 text-center'>
                                <tr>
                                    <th scope="col" class="px-6 py-3">first name</th>
                                    <th scope="col" class="px-6 py-3">last name</th>
                                    <th scope="col" class="px-6 py-3">email</th>
                                    <th scope="col" class="px-6 py-3">score</th>
                                    <th scope="col" class="px-6 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {applicants.map((applicant) => (
                                    <tr key={applicant.id} className="hover:bg-gray-100 dark:hover:bg-gray-500 cursor-pointer border-b  dark:border-gray-700" onClick={(e) => navigate(`/applicants/${applicant.id}`)}>
                                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{applicant.firstname}</td>
                                        <td className='px-6 py-4'>{applicant.lastname}</td>
                                        <td className='px-6 py-4'>{applicant.email}</td>
                                        <td className='px-6 py-4'>{applicant.score}</td>
                                        <td className='px-6 py-4'>{applicant.applicantStatus}</td>
                                        {/* <td className='px-6 py-4'> <span className={`px-3 py-2 rounded-lg text-white ${recruitment.status === RecruitmentStatus.Open ? "bg-logoGreen" : "bg-gray-700"}`}>{recruitment.status}</span></td> */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                )}

            </div>


        </div>
    )
}
