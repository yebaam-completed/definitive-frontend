import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactsHeaderComponent: React.FC = () => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-2">
      <h6 className="text-uppercase text-muted">Contactos</h6>
      <div className="d-flex align-items-center">
        <i className="bi bi-search me-2"></i>
        <i className="bi bi-three-dots"></i>
      </div>
    </div>
  );
};
