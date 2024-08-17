/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ChangeCoverPhotoModal } from './modals/ChangeCoverPhotoModal';

const CoverPhoto: React.FC = () => {
  const [showCoverModal, setShowCoverModal] = useState(false);

  const handleCoverSave = (image: File | null) => {
    // Lógica para guardar la nueva imagen de portada
    setShowCoverModal(false);
  };

  const handleOpenModal = () => {
    setShowCoverModal(true);
  };

  return (
    <div className="position-relative">
      <img
        src="https://images.unsplash.com/photo-1723647395168-d916159b78c9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Aquí debes poner el link a la foto de portada real.
        alt="Cover"
        className="img-fluid w-100"
        style={{ height: '300px', objectFit: 'cover', cursor: 'pointer' }}  // Agrega el cursor pointer
        onClick={handleOpenModal} // Abre el modal al hacer clic en la imagen
      />
      <button
        className="btn btn-light position-absolute bottom-0 end-0 m-3"
        style={{ cursor: 'pointer' }}
        onClick={handleOpenModal} // Abre el modal al hacer clic en el botón
      >
        <i className="bi bi-camera-fill me-2"></i> Editar foto de portada
      </button>

      {showCoverModal && (
        <ChangeCoverPhotoModal
          show={showCoverModal}
          onClose={() => setShowCoverModal(false)}
          onSave={handleCoverSave}
        />
      )}
    </div>
  );
};

export { CoverPhoto };
