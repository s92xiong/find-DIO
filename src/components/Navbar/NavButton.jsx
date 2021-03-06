import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import DropdownMenu from './DropdownMenu';
import "./styles/NavButton.css";

function NavButton({ className, characters, setMenuOpen }) {
  // Initialize variable state to determine if the SignOut modal is open/close
  const [modalOpen, setModalOpen] = useState(false);

  // Event handlers to open/close modal
  const openModal = () => {
    setModalOpen(!modalOpen);
    setMenuOpen(false);
  }
  
  const closeModal = (e) => (e.target.className === "background-img") && setModalOpen(false);

  useEffect(() => {
    if (modalOpen) document.addEventListener("keydown", (e) => (e.key === "Escape") && setModalOpen(false));
  });

  return (
    <div className={className}>
      <div className="nav-button-container">
        <OutsideClickHandler onOutsideClick={closeModal}>
          <div className={(modalOpen) ? "nav-button button-active" : "nav-button"} onClick={openModal}>
            <h2>Help</h2>
          </div>
        </OutsideClickHandler>
        { (modalOpen) && <DropdownMenu characters={characters} /> }
      </div>
    </div>
  );
}

export default NavButton;