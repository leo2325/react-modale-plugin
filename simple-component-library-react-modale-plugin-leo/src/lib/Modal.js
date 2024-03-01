import React from 'react';
import './style/modal.css';

// Fonction fléchée :
// Deux props en paramètre : message et onClose.
const Modal = ({ message, onClose }) => {


  return (
        <div className="modal">
            <p>{message}</p>
            <span className="close-modal" onClick={onClose}>X</span>
          
        </div>
      )}

export default Modal;
