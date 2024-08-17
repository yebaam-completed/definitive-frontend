import React from 'react';
import { UserProfileComponent } from './UserProfileComponent';
import { NavItemComponent } from './NavItemComponent';
import { SeeMoreButtonComponent } from './SeeMoreButtonComponent';
import { NavListComponent } from './NavListComponent';

export const SidebarComponent: React.FC = () => {
  return (
    <div className="sidebar">
      <UserProfileComponent />
      <NavListComponent>
        <NavItemComponent title="Amigos" icon="bi-people" route="/friends" />
        <NavItemComponent title="Recuerdos" icon="bi-clock-history" route="/memories" />
        <NavItemComponent title="Guardado" icon="bi-bookmark" route="/saved" />
        <NavItemComponent title="Grupos" icon="bi-people-fill" route="/groups" />
        <NavItemComponent title="Video" icon="bi-camera-video" route="/videos" />
        <NavItemComponent title="Marketplace" icon="bi-shop" route="/marketplace" />
        <NavItemComponent title="Feeds" icon="bi-rss" route="/feeds" />
        <SeeMoreButtonComponent />
      </NavListComponent>
        {/* aqui otro seccion */}
    </div>
  );
};
