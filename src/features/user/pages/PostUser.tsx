import React from 'react';

interface PostUserProps {
  userId: string;
}

const PostUser: React.FC<PostUserProps> = ({ userId }) => {
  return (
    <div>
      <h2>Publicaciones del usuario {userId}</h2>
      {/* Lógica para mostrar las publicaciones */}
    </div>
  );
};

export { PostUser };
