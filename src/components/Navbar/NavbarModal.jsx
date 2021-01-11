import React, { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import dioImg from "../../images/dio.png";
import spikeImg from "../../images/spike.png";
import edImg from "../../images/ed.png";

function NavbarModal() {
  // Initialize variable state to determine if the SignOut modal is open/close
  const [modalOpen, setModalOpen] = useState(false);

  // Event handlers to open/close modal
  const openModal = () => setModalOpen(!modalOpen);
  const closeModal = (e) => (e.target.className === "waldo-background") && setModalOpen(false);

  useEffect(() => {
    if (modalOpen) document.addEventListener("keydown", (e) => (e.key === "Escape") && setModalOpen(false));
  });

  return (
    <div className="navbar-modal-button">
      <OutsideClickHandler onOutsideClick={closeModal}>
        <div className="background-circle" onClick={openModal}><h2>3</h2></div>
      </OutsideClickHandler>
      {
        (modalOpen) && (
          <div className="navbar-modal">

            <div className="img-div">
              <img src={dioImg} alt="" className="dio-img" />
              <div className="character-info">
                <h3>DIO</h3>
                <p>JoJo's Bizarre Adventure</p>
              </div>
            </div>

            <div className="img-div">
              <img src={edImg} alt="" className="edward-img" />
              <div className="character-info">
                <h3>Edward</h3>
                <p>Full Metal Alchemist</p>
              </div>
            </div>

            <div className="img-div">
              <img src={spikeImg} alt="" className="spike-img" />
              <div className="character-info">
                <h3>Spike</h3>
                <p>Cowboy Bebop</p>
              </div>
            </div>
            
          </div>
        )
      }
    </div>
  );
}

export default NavbarModal;