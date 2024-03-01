import React from 'react';
import './style/modal.css';

// Fonction fléchée :
// Deux props en paramètre : message et onClose.
const Modal = ({
  message,
  onClose
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("p", null, message), /*#__PURE__*/React.createElement("span", {
    className: "close-modal",
    onClick: onClose
  }, "X"));
};
export default Modal;