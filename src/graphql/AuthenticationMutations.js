
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
    }
  }
`;
