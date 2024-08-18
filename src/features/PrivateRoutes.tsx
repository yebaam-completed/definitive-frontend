import { FC, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getCSSVariableValue } from '../components/assets/ts/_utils';
import { WithChildren } from '../components/helpers';
import { DisableSidebar } from '../components/layout/core';
import { MasterLayout } from '../components/layout/MasterLayout';
import { DashboardWrapper } from './pages/dashboard/DashboardWrapper';
import TopBarProgress from 'react-topbar-progress-indicator';
import UserProfilePage from './user/UserProfilePage';

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import('../features/profile/ProfilePage'));
  const AccountPage = lazy(() => import('../features/accounts/AccountPage'));
  const ChatPage = lazy(() => import('../features/apps/chat/ChatPage'));

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/home' />} />
        {/* Pages */}
        <Route path='home' element={<DashboardWrapper />} />

        {/* Lazy Modules */}
        {/* Ruta para el perfil del usuario logueado */}
        <Route
          path='crafted/pages/profile/*'
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />

        {/* Ruta para el perfil de otro usuario, con su ID */}
        <Route
          path='profile/:id/*'
          element={
            <SuspensedView>
              <UserProfilePage />
            </SuspensedView>
          }
        />

        {/* Otras rutas */}
        <Route
          path='crafted/account/*'
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path='apps/chat/*'
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />

        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue('--bs-primary');
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return (
    <Suspense fallback={<TopBarProgress />}>
      <DisableSidebar>{children}</DisableSidebar>
    </Suspense>
  );
};

export { PrivateRoutes };
