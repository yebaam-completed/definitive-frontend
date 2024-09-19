/* eslint-disable react-hooks/exhaustive-deps */

import {FC, useEffect, useState} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {App} from '../App'
import { useAppSelector } from '../store/store';
import { useCheckCurrentUserQuery } from '../features/auth/services/auth.service';
import { mockUser } from '../mocks/mocks'
import {PrivateRoutes} from './PrivateRoutes'
import { Logout, AuthPage, UserModel } from './auth'
import { ErrorsPage } from './errors/ErrorsPage'

const {BASE_URL} = import.meta.env

const AppRoutes: FC = () => {

const [currentUser, setCurrentUser] = useState<UserModel | null>(null);

  const authUser = useAppSelector((state) => state.authUser);
  const { data, isError, refetch } = useCheckCurrentUserQuery();

  const checkUser = async() => {
    await refetch();
    if (data && data.user) {
      const newCurrentUser = {
        ...mockUser,
        ...data.user,
      };
      console.log({newCurrentUser});
      setCurrentUser(newCurrentUser as UserModel);
    } else if (isError) {
      console.log(isError);
    }
  };

  useEffect(() => {
    checkUser();
  }, [authUser]);

  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          <Route path='logout' element={<Logout />} />
          {currentUser?.username ? (
            <>
              <Route 
                path='/*'
                element={
                <PrivateRoutes currentUser={currentUser} logout={()=>{}} />
                }
              />
              <Route index element={<Navigate to='/home' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
