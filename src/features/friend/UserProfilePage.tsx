import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();


  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p>Mostrando información del usuario con ID: {id}</p>
    </div>
  );
};

export default UserProfilePage;
