import axios from "axios";
import { AuthModel, UserModel } from "./_models";

const API_URL = 'http://localhost:5000/api/v1';
// const API_URL = import.meta.env.VITE_APP_API_URL;
// http://localhost:5000/api/v1
export const GET_USER_BY_ACCESSTOKEN_URL = `http://localhost:5000/api/v1/currentuser`;
export const LOGIN_URL = `${API_URL}/signin`;
export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

// Server should return AuthModel
export function login(username: string, password: string) {
  return axios.post<AuthModel>(
    LOGIN_URL,
    {
      username,
      password,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,  // Para enviar cookies de sesión al backend
    }
  );
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(
    REGISTER_URL,
    {
      email,
      first_name: firstname,
      last_name: lastname,
      password,
      password_confirmation,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,  // Para enviar cookies de sesión al backend
    }
  );
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(
    REQUEST_PASSWORD_URL,
    {
      email,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,  // Para enviar cookies de sesión al backend
    }
  );
}

// export function getUserByToken(token: string) {
//   return axios.post<UserModel>(
//     GET_USER_BY_ACCESSTOKEN_URL,
//     {
//       api_token: token,
//     },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,  // Para enviar cookies de sesión al backend
//     }
//   );
// }


export function getUserByToken(token: string) {
  return axios.get<UserModel>(
    GET_USER_BY_ACCESSTOKEN_URL,
    {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      withCredentials: true,  // Para enviar cookies de sesión al backend
    }
  );
}
