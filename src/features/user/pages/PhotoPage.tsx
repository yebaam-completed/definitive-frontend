import React from 'react';

interface PhotoPageProps {
  userId: string;
}

const PhotoPage: React.FC<PhotoPageProps> = ({ userId }) => {
  return (
    <div>
      <h2>Fotos del usuario {userId}</h2>
      {/* Lógica para mostrar las fotos del usuario */}
    </div>
  );
};

export { PhotoPage };
