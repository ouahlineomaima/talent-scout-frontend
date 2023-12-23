import { gql } from '@apollo/client';

export const GET_RECRUITER_RECRUITMENTS = gql`
  query ExampleQuery($token: String!) {
  currentRecruiterRecruitments(token: $token) {
    id
    trackedEmail
    emailSubject
    jobTitle
    status
  }
}

`;
export const ADD_RECRUITMENT = gql`
  mutation AddRecruitment($recruitmentInput: RecruitmentInput!) {
    addRecruitment(recruitmentInput: $recruitmentInput) {
      id
      trackedEmail
      emailSubject
      jobTitle
      descriptions {
        technologies
      }
      applicants
      status
    }
  }
`;