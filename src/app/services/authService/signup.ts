import { httpClient } from '../httpClient';

export interface SignupParams {
  name: string;
  email: string;
  password: string;
}

interface SignupResponse {
  accessToken: string;
}

export const signup = async (params: SignupParams) => {
  const { data } = await httpClient.post<SignupResponse>(
    '/auth/signup',
    params,
  );

  return data;
};
