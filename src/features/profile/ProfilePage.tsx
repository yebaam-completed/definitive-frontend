import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PostUser} from './components/postUser/PostUser'
import {InfoProfileUser} from './components/info/InfoProfileUser'
import {FriendPage} from './components/friend/FriendPage'
import {PhotoPage} from './components/photos/PhotoPage'
import {VideoPage} from './components/videos/VideoPage'
import {ProfileHeader} from './ProfileHeader'
import { PageLink, PageTitle } from '../../components/layout/core'

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: 'Profile',
    path: '/profile/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const ProfilePage = () => (
  <Routes>
    <Route
      element={
        <>
          <ProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='overview'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Overviewdddd</PageTitle>
            <PostUser />
          </>
        }
      />
      <Route
        path='projects'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Info</PageTitle>
            <InfoProfileUser />
          </>
        }
      />
      <Route
        path='campaigns'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Friend</PageTitle>
            <FriendPage />
          </>
        }
      />
      <Route
        path='documents'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Fotos</PageTitle>
            <PhotoPage />
          </>
        }
      />
      <Route
        path='connections'
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Videos</PageTitle>
            <VideoPage />
          </>
        }
      />
      <Route index element={<Navigate to='/crafted/pages/profile/overview' />} />
    </Route>
  </Routes>
)

export default ProfilePage
