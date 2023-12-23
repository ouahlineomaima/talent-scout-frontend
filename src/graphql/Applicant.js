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