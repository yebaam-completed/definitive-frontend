import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query/react';


export const getDataFromSessionStorage = (key: string) => {
  const data = window.sessionStorage.getItem(key) as string;
  return JSON.parse(data);
};

const BASE_ENDPOINT = 'http://localhost:5000'; 
// import.meta.env.VITE_BASE_ENDPOINT
// 'https://api.serversocial.xyz';

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_ENDPOINT}/api/v1`,
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    return headers;
  },
  credentials: 'include'
});

const baseQueryWithReAuth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    const loggedInUsername: string = getDataFromSessionStorage('loggedInuser');
    await baseQuery(`/auth/refresh-token/${loggedInUsername}`, api, extraOptions);
  }
  return result;
};

export const api = createApi({
  reducerPath: 'clientApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({})
});
