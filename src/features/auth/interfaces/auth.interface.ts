import { ObjectSchema } from 'yup';

export interface IAuthUser {
  profilePublicId: string | null;
  createdAt: Date | null;
  email: string | null;
  emailVerificationToken: string | null;
  emailVerified: boolean | null;
  id: string | null;
  _id:string | null
  uId: number | null;
  passwordResetExpires: Date | null;
  passwordResetToken: null | null;
  profilePicture: string | null;
  updatedAt: Date | null;
  username: string | null;
  browserName: string | null;
  deviceType: string | null;
}

export interface IAuthDocument {
  id?: string;
  _id?: string;
  uid?:string
  userId?: string;
  profilePublicId?: string;
  username?: string;
  email?: string;
  password?: string;
  profilePicture?: string;
  emailVerified?: number;
  emailVerificationToken?: string;
  createdAt?: Date;
  updatedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  browserName?: string;
  deviceType?: string;
  iat?: number;

}

export interface IUseAuthSchema {
  schema: ObjectSchema<ISignInPayload | ISignUpPayload | IResetPassword>;
  userInfo: ISignInPayload | ISignUpPayload | IResetPassword;
}

export const AUTH_FETCH_STATUS = {
  IDLE: '',
  SUCCESS: 'success',
  ERROR: 'error'
};

export interface ISignUpPayload {
  [key: string]: string | null | undefined;
  username: string;
  password: string;
  avatarColor?: string | null; // Permitir null
  avatarImage?: string | null; // Permitir null
  email: string;
  profilePicture?: string | null; // Permitir null
  browserName?: string | null; // Permitir null
  deviceType?: string | null; // Permitir null
}

export interface ISignInPayload {
  [key: string]: string | null | undefined;
  username: string;
  password: string;
  // browserName: string | null | undefined;
  // deviceType: string | null | undefined;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  [key: string]: string;
  password: string;
  confirmPassword: string;
}

export interface IReduxAuthPayload {
  authInfo?: IAuthDocument;
}

export interface IReduxAddAuthUser {
  type: string;
  payload: IReduxAuthPayload;
}

export interface IReduxLogout {
  type: string;
  payload: boolean;
}

export interface IAuthResponse {
  message: string;
}
