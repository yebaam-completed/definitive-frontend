import { Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';
import { logout } from '../../features/auth/reducers/logout.reducer';
import { authApi } from '../../features/auth/services/auth.service';
import { api } from '../../store/api';



export const lowerCase = (str: string): string => {
  return str.toLowerCase();
};

export const firstLetterUppercase = (str: string): string => {
  const valueString = lowerCase(`${str}`);
  return `${valueString.charAt(0).toUpperCase()}${valueString.slice(1).toLowerCase()}`;
};

export const replaceSpacesWithDash = (title: string): string => {
  const lowercaseTitle: string = lowerCase(`${title}`);
  return lowercaseTitle.replace(/\/| /g, '-'); // replace / and space with -
};

export const replaceDashWithSpaces = (title: string): string => {
  const lowercaseTitle: string = lowerCase(`${title}`);
  return lowercaseTitle.replace(/-|\/| /g, ' '); // replace - / and space with -
};

export const replaceAmpersandWithSpace = (title: string): string => {
  return title.replace(/&/g, '');
};

export const replaceAmpersandAndDashWithSpace = (title: string): string => {
  const titleWithoutDash = replaceDashWithSpaces(title);
  return titleWithoutDash.replace(/&| /g, ' ');
};


export const saveToSessionStorage = (data: { isLoggedIn: boolean, username: string }) => {
  window.sessionStorage.setItem('isLoggedIn', JSON.stringify(data.isLoggedIn));
  window.sessionStorage.setItem('loggedInUser', data.username);
};


export const getDataFromSessionStorage = (key: string) => {
  const data = window.sessionStorage.getItem(key) as string;
  return JSON.parse(data);
};

export const saveToLocalStorage = (key: string, data: string): void => {
  window.localStorage.setItem(key, data);
};

export const getDataFromLocalStorage = (key: string) => {
  const data = window.localStorage.getItem(key) as string;
  return JSON.parse(data);
};

export const deleteFromLocalStorage = (key: string): void => {
  window.localStorage.removeItem(key);
};

export const applicationLogout = (dispatch: Dispatch, navigate: NavigateFunction) => {
  const loggedInUsername: string = getDataFromSessionStorage('loggedInuser');
  console.log('loggedInUsername',getDataFromSessionStorage('loggedInuser'))
  dispatch(logout({}));
  if (loggedInUsername) {
    // dispatch(authApi.endpoints.removeLoggedInUser.initiate(`${loggedInUsername}`, { track: false }) as never);
  }
  dispatch(api.util.resetApiState());
  dispatch(authApi.endpoints.logout.initiate() as never);
  saveToSessionStorage(JSON.stringify(false), JSON.stringify(''));

  navigate('/');
};

export const isFetchBaseQueryError = (error: unknown): boolean => {
  return typeof error === 'object' && error !== null && 'status' in error && 'data' in error;
};




