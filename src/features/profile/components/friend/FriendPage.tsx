import React from 'react';
import { FriendTabs } from './FriendTabs';
import { FriendList } from './FriendList';
import { Content } from '../../../../components/layout/components/Content';

export const FriendPage: React.FC = () => {
  return (
    <Content>
      <div className="d-flex flex-wrap flex-stack mb-6">
        <h3 className="fw-bolder my-2">
          Lista de amigos
          <span className="fs-6 text-gray-500 fw-bold ms-1">30</span>
        </h3>

        <div className="d-flex align-items-center my-2">
          <button className="btn btn-primary btn-sm me-3">
            Buscar amigo
          </button>
          <button className="btn btn-primary btn-sm">
            Solicitudes de amistad
          </button>
        </div>
      </div>

      <FriendTabs />
      <FriendList />
    </Content>
  );
};
