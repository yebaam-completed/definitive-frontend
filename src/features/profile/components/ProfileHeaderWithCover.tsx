import React from 'react';
import { CoverPhoto } from './CoverPhoto';
import { ProfilePictureWithFriends } from './ProfilePictureWithFriends';
import styles from '../scss/ProfileHeaderWithCover.module.scss';

const ProfileHeaderWithCover: React.FC = () => (
  <div className={styles['profile-header-container']}>
    <CoverPhoto />
    <div className={styles['profile-picture-and-info']}>
      <ProfilePictureWithFriends />
    </div>
  </div>
);

export { ProfileHeaderWithCover };
