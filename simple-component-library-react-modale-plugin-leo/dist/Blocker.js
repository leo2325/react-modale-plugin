import React from 'react';
import PropTypes from 'prop-types';
import './style/blocker.css';

// Fonction fléchée :
// prenant une prop children en paramètre
// (children = éléments enfants rendus à l'intérieur du composant Blocker).
const Blocker = ({
  children
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "blocker"
  }, children);
};

// PropTypes utilisés pour spécifier le type de chaque prop passée au composant. 
// La prop children est requise (isRequired)
// (garantit que le composant Blocker ne sera pas utilisé sans enfant).
Blocker.propTypes = {
  children: PropTypes.node.isRequired
};
export default Blocker;