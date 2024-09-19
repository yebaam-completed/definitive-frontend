import axios from "axios";
const API_URL = 'http://localhost:5000';
// import.meta.env.VITE_APP_API_URL;
// https://api.serversocial.xyz/api/v1

export const REGISTER_URL = `${API_URL}/register`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

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
