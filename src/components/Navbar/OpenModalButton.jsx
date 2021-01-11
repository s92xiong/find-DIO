import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import PopupModal from './PopupModal';

function OpenModalButton() {
  // Initialize variable state to determine if the SignOut modal is open/close
  const [modalOpen, setModalOpen] = useState(false);

  // Event handlers to open/close modal
  const openModal = () => setModalOpen(!modalOpen);
  const closeModal = (e) => (e.target.className === "waldo-background") && setModalOpen(false);

  useEffect(() => {
    if (modalOpen) document.addEventListener("keydown", (e) => (e.key === "Escape") && setModalOpen(false));
  });

  return (
    <div className="modal-button-container">
      <OutsideClickHandler onOutsideClick={closeModal}>
        <div className={(modalOpen) ? "modal-button button-active" : "modal-button"} onClick={openModal}>
          <h2>3</h2>
        </div>
      </OutsideClickHandler>
      { (modalOpen) && <PopupModal /> }
    </div>
  );
}

export default OpenModalButton;