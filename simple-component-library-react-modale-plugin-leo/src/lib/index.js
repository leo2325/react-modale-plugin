// Importation des modules et composants nécessaires 
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Modal from './Modal';
import Spinner from './Spinner';
import Blocker from './Blocker';

// Fonction composant retournant l'interface du plug in.
const Plugin = ({ message, closeFunction, containerId }) => {
  // Hooks useState 
  // Utilisés pour déclarer des états locaux contrôlant :
  // l'affichage du spinner et du modal respectivement.
  const [showSpinner, setShowSpinner] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showBlocker, setShowBlocker] = useState(true);
  // Hook useEffect 
  // Utilisé pour exécuter une action après le rendu initial du composant. 
  // -> Crée un timer qui change les états après 2 secondes :
  // masque le spinner et affiche le modal.
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Fonction de gestionnaire d'événements
  // modifiant l'état showModal pour masquer la modal.
  // modifiant l'état showBlocker pour fermer le blocker.
  const handleClose = () => {
    setShowModal(false);
    setShowBlocker(false);
    closeFunction();
  };

  // Le composant Plugin retourne le JSX :
  // qui rend le Blocker, 
  // le Spinner (si showSpinner est vrai) 
  // le Modal (si showModal est vrai).
  return (
    <div>
      {showBlocker && <Blocker onClose={handleClose}>
        {showSpinner && <Spinner />}
        {showModal && <Modal onClose={handleClose} message={message} />}
      </Blocker>}
    </div>
  );
};

// Rendu de l'application :
// Trouvez le conteneur où la racine ReactDOM doit être créée
const containerId = 'plugin-container'; // ID du conteneur

// Rendu de l'application :
// Fonction createRoot: pour créer une racine de rendu pour le plugin.
// Méthode render: pour rendre le composant Plugin à la racine.
const root = document.getElementById(containerId);
if (root) {
  createRoot(root).render(<Plugin containerId={containerId} />);
} else {
  console.error(`Container with id '${containerId}' not found.`);
}

export default Plugin;