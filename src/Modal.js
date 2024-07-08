import React from 'react';
import './Modal.css';

function Modal({ show, message, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <p>{message}</p>
          <button className="modal-button" onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
