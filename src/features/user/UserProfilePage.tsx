/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';
import { PageLink, PageTitle } from '../../components/layout/core';
import { ProfileUserHeader } from './ProfileUserHeader';
import { PostUser } from './pages/PostUser';
import { InfoProfileUser } from './pages/InfoProfileUser';
import { FriendPage } from './pages/FriendPage';
import { PhotoPage } from './pages/PhotoPage';
import { VideoPage } from './pages/VideoPage';

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
  const userId = id ?? ''; // Proporcionar un valor por defecto
  return (
    <Routes>
      <Route
        element={
          <>
            <ProfileUserHeader userId={userId} /> 
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle>
              <PostUser userId={userId} /> 
            </>
          }
        />
        <Route
          path='info'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Info</PageTitle>
              <InfoProfileUser userId={userId} /> 
            </>
          }
        />
        <Route
          path='friends'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Friends</PageTitle>
              <FriendPage userId={userId} /> 
            </>
          }
        />
        <Route
          path='photos'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Photos</PageTitle>
              <PhotoPage userId={userId} /> 
            </>
          }
        />
        <Route
          path='videos'
          element={
            <>
              <PageTitle breadcrumbs={profileBreadCrumbs}>Videos</PageTitle>
              <VideoPage userId={userId} /> 
            </>
          }
        />
        <Route index element={<Navigate to='overview' />} />
      </Route>
    </Routes>
  );
};

export default UserProfilePage;
