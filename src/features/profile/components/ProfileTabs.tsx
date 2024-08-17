import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileTabs: React.FC = () => {
  const location = useLocation();

  return (
    <div className='d-flex overflow-auto h-55px'>
      <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/overview' && 'active')
            }
            to='/crafted/pages/profile/overview'
          >
            Publicaciones
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/projects' && 'active')
            }
            to='/crafted/pages/profile/projects'
          >
            Información
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/campaigns' && 'active')
            }
            to='/crafted/pages/profile/campaigns'
          >
            Amigos
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/documents' && 'active')
            }
            to='/crafted/pages/profile/documents'
          >
            Fotos
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={
              `nav-link text-active-primary me-6 ` +
              (location.pathname === '/crafted/pages/profile/connections' && 'active')
            }
            to='/crafted/pages/profile/connections'
          >
            Videos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { ProfileTabs };
