/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
// import { PostUser } from './components/postUser/PostUser';
// import { InfoProfileUser } from './components/info/InfoProfileUser';
// import { FriendPage } from './components/friend/FriendPage';
// import { PhotoPage } from './components/photos/PhotoPage';
// import { VideoPage } from './components/videos/VideoPage';
// import { ProfileUserHeader } from './ProfileUserHeader';
import { PageLink, PageTitle } from '../../components/layout/core';
import Friend from '../contact/Friend';
import { ProfileUserHeader } from './ProfileUserHeader';

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/profile/user',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
];

const UserProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Obtener el ID del usuario de la URL

  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileUserHeader  /> 
            {/* <ProfileUserHeader userId={id} />  */}
            {/* Pasar el ID al Header para cargar la info del usuario */}
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
              {/* <Friend /> */}
               {/* Pasar el ID al componente PostUser */}
            </>
          }
        />
        <Route
          path='info'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Info</PageTitle>
              {/* <InfoProfileUser userId={id} /> */}
               {/* Pasar el ID al componente InfoProfileUser */}
            </>
          }
        />
        <Route
          path='friends'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Friends</PageTitle>
              {/* <FriendPage userId={id} />  */}
              {/* Pasar el ID al componente FriendPage */}
            </>
          }
        />
        <Route
          path='photos'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Photos</PageTitle>
              {/* <PhotoPage userId={id} /> */}
               {/* Pasar el ID al componente PhotoPage */}
            </>
          }
        />
        <Route
          path='videos'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Videos</PageTitle>
              {/* <VideoPage userId={id} />  */}
              {/* Pasar el ID al componente VideoPage */}
            </>
          }
        />
        <Route index element={<Navigate to='overview' />} />
      </Route>
    </Routes>
  );
};

export default UserProfilePage;
