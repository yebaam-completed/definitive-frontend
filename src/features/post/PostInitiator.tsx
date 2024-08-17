import React from 'react';
import Button from 'react-bootstrap/Button';

interface PostInitiatorProps {
  onClick: () => void;
}

const PostInitiator: React.FC<PostInitiatorProps> = ({ onClick }) => {
  return (
    <div className="p-3 bg-white rounded shadow-sm">
      <div className="d-flex align-items-center mb-3">
        <img src="/path-to-profile-picture.jpg" alt="Profile" className="rounded-circle" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
        <Button variant="light" className="ml-3 flex-grow-1 text-left" onClick={onClick}>
          ¿Qué estás pensando, Flower?
        </Button>
      </div>
      <hr />
      <div className="d-flex justify-content-around">
        <Button variant="link" className="text-danger d-flex align-items-center">
          <i className="fas fa-video mr-2"></i> Video en vivo
        </Button>
        <Button variant="link" className="text-success d-flex align-items-center">
          <i className="fas fa-photo-video mr-2"></i> Foto/video
        </Button>
        <Button variant="link" className="text-warning d-flex align-items-center">
          <i className="fas fa-smile mr-2"></i> Sentimiento/actividad
        </Button>
      </div>
    </div>
  );
};

export default PostInitiator;
