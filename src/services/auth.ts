import { http } from "../config/http";
import { User } from "./user";

export type SignInType = {
  userType: "provider" | "receiver";
  email: string;
  password: string;
};

type SignInResponseType = {
  token: string;
  user: User;
};

export const signInRequest = async (
  body: SignInType
): Promise<SignInResponseType> => {
  const { data } = await http.post(`/auth/sign-in/`, body);
  const { token, user } = data;

  return { token, user };
};

export type SignUpType = {
  name: string;
  birthdate: string;
  phone: string;
  taxId: string;
  email: string;
  password: string;
};

type SignUpResponseType = {
  id: number;
};

export const signUpRequest = async (
  body: SignUpType
): Promise<SignUpResponseType> => {
  const { data } = await http.post(`/auth/sign-up/`, body);
  return data;
};

export type ConfirmSignUpType = {
  email: string;
  securityCode: string;
};

export const confirmSignUpRequest = async (
  body: ConfirmSignUpType
): Promise<void> => {
  await http.post(`/auth/confirm-sign-up/`, body);
};

export type RecoverUserImformationType = {
  token: string;
  user: User;
};

export const recoverUserImformation =
  async (): Promise<RecoverUserImformationType> => {
    const { data } = await http.get(`/auth/recover-user-imformation/`);

    return data;
  };
