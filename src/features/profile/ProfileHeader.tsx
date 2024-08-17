import React from 'react';
import { Content } from '../../components/layout/components/Content';
import { ProfileDetails } from './components/ProfileDetails';
// import { ProfilePicture } from './components/ProfilePicture';
import { ProfileStats } from './components/ProfileStats';
import { ProfileTabs } from './components/ProfileTabs';
import { ProfileHeaderWithCover } from './components/ProfileHeaderWithCover';

const ProfileHeader: React.FC = () => (
  <Content>
    <ProfileHeaderWithCover />
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          {/* <ProfilePicture /> */}
          <div className='flex-grow-1'>
            <ProfileDetails />
            <div className='d-flex flex-wrap flex-stack'>
              <ProfileStats />
            </div>
          </div>
        </div>
        <ProfileTabs />
      </div>
    </div>
  </Content>
);

export { ProfileHeader };
