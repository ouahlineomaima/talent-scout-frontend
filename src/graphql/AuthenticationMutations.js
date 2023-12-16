import { gql } from '@apollo/client';

export const REGISTER_RECRUITER = gql`
  mutation RegisterRecruiter($registerInput: RegisterInput!) {
    registerRecruiter(registerInput: $registerInput) {
      firstname
      lastname
      email
      token
    }
  }
`;

export const LOGIN_RECRUITER = gql`
  mutation LoginRecruiter($loginInput: LoginInput!) {
    loginRecruiter(loginInput: $loginInput) {
      firstname
      lastname
      email
      token
      profilePicture

    }
  }
`;

export const GET_CURRENT_RECRUITER = gql`
  query GetCurrentRecruiter($token: String!) {
    currentRecruiter(token: $token) {
      id
      firstname
      lastname
      email
      profilePicture
      token
    }
  }
`;
