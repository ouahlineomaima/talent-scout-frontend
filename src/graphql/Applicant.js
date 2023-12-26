import { gql } from '@apollo/client';

export const GET_RECRUITMENT_APPLICANTS = gql`
    query RecruitmentApplicants($idRecruitment: ID!) {
        recruitmentApplicants(idRecruitment: $idRecruitment) {
            id
            firstname
            lastname
            email
            score
            applicantStatus
        }
    }
`;

export const GET_RECRUITMENT_CHECKED_APPLICANTS = gql`
    query RecruitmentApplicants($idRecruitment: ID!) {
        checkedRecruitmentApplicants(idRecruitment: $idRecruitment) {
            id
            idRecruitment
            firstname
            lastname
            email
            score
            applicantStatus
        }
    }
`;

export const GET_CURRENT_APPLICANT = gql`
    query RecruitmentApplicants($applicantId: ID!) {
    applicant(id: $applicantId) {
        id
        idRecruitment
        firstname
        lastname
        email
        resume
        coverLetter
        score
        applicantStatus
        applicationStatus
        phone
    }
    }
`;