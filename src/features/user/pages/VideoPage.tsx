import React from 'react';

interface VideoPageProps {
  userId: string;
}

const VideoPage: React.FC<VideoPageProps> = ({ userId }) => {
  return (
    <div>
      <h2>Videos del usuario {userId}</h2>
      {/* Lógica para mostrar los videos del usuario */}
    </div>
  );
};

export { VideoPage };
