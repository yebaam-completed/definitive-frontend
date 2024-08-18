import React from 'react';

interface InfoProfileUserProps {
  userId: string;
}

const InfoProfileUser: React.FC<InfoProfileUserProps> = ({ userId }) => {
  return (
    <div>
      <h2>Información del usuario {userId}</h2>
      {/* Lógica para mostrar la información del usuario */}
    </div>
  );
};

export { InfoProfileUser };
