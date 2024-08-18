import React from 'react';

interface FriendPageProps {
  userId: string;
}

const FriendPage: React.FC<FriendPageProps> = ({ userId }) => {
  return (
    <div>
      <h2>Amigos del usuario {userId}</h2>
      {/* Lógica para mostrar la lista de amigos */}
    </div>
  );
};

export { FriendPage };
