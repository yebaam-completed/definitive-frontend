/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { ChangeProfilePictureModal } from './modals/ChangeProfilePictureModal';

const ProfilePictureWithFriends: React.FC = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleProfileSave = (image: File | null) => {
    // Lógica para guardar la nueva imagen de perfil
    setShowProfileModal(false);
  };

  return (
    <div className="d-flex align-items-center position-relative mt-n5">
      <div className="position-relative">
        <img
          src="https://images.unsplash.com/photo-1719937050445-098888c0625e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  // Aquí debes poner el link a la foto de perfil real.
          alt="Profile"
          className="rounded-circle border border-3 border-white"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <button
          className="btn btn-light rounded-circle position-absolute bottom-0 end-0"
          onClick={() => setShowProfileModal(true)} // Abre el modal
        >
          <i className="bi bi-camera-fill"></i>
        </button>
      </div>

      <div className="ms-3">
        <div className="text-center">
          <h2 className="fw-bold">Flower Moreno</h2>
        </div>

        <div className="d-flex mt-2">
          {/* Lista de amigos */}
          {Array.from({ length: 3 }).map((_, index) => (
            <img
              key={index}
              src={`https://plus.unsplash.com/premium_photo-1723791732457-788311c5da12?q=80&w=1766&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D-${index}.jpg`}  
              alt={`Friend ${index}`}
              className="rounded-circle border border-2 border-white"
              style={{ width: '40px', height: '40px', objectFit: 'cover', marginLeft: '-10px' }}
            />
          ))}
        </div>
      </div>

      <ChangeProfilePictureModal
        show={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        onSave={handleProfileSave}
      />
    </div>
  );
};

export { ProfilePictureWithFriends };
