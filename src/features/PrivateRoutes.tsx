import { FC, lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getCSSVariableValue } from "../components/assets/ts/_utils";
import { WithChildren } from "../components/helpers";
import { DisableSidebar } from "../components/layout/core";
import { MasterLayout } from "../components/layout/MasterLayout";
import { DashboardWrapper } from "./pages/dashboard/DashboardWrapper";
import TopBarProgress from "react-topbar-progress-indicator";
import UserProfilePage from "./user/UserProfilePage";
import { UserModel } from "./auth";

type PrivateRoutesProps = {
  currentUser: UserModel; 
  logout: () => void;
};

const PrivateRoutes: FC<PrivateRoutesProps> = ({currentUser, logout}) => {

  const ProfilePage = lazy(() => import("../features/profile/ProfilePage"));
  const AccountPage = lazy(() => import("../features/accounts/AccountPage"));
  const ChatPage = lazy(() => import("../features/apps/chat/ChatPage"));
  const FeedsPage = lazy(() => import('../features/feed/FeedsPage'));
  const VideosPage = lazy(() => import('../features/videos/VideosPage'));
  const GroupsPage = lazy(() => import('../features/grups/GroupsPage'));
  const FriendsPage = lazy(() => import('../features/user/pages/friend/FriendsPage'));


  return (
    <Routes>
      <Route element={<MasterLayout currentUser={currentUser} logout={logout} />}>
        <Route path="auth/*" element={<Navigate to="/home" />} />
        <Route path="home" element={<DashboardWrapper />} />
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage  currentUser={currentUser}/>
            </SuspensedView>
          }
        />
        <Route
          path="groups"
          element={
            <SuspensedView>
              <GroupsPage />
            </SuspensedView>
          }
        />

        <Route
          path="videos"
          element={
            <SuspensedView>
              <VideosPage />
            </SuspensedView>
          }
        />

        <Route
          path="friends"
          element={
            <SuspensedView>
              <FriendsPage />
            </SuspensedView>
          }
        />

        <Route
          path="profile/:id/*"
          element={
            <SuspensedView>
              <UserProfilePage />
            </SuspensedView>
          }
        />

        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
          <Route
          path='feeds'
          element={
            <SuspensedView>
              <FeedsPage />
            </SuspensedView>
          }
        />

        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
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
