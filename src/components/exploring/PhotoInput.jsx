import React, { useState } from 'react';
import InputDetailsForm from './InputDetailsForm';
import './PhotoInput.css';

const PhotoInput = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePhotoInputClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="photo-input-container">
      {/* Box version for wider screens */}
      <div className="photo-input" onClick={handlePhotoInputClick}>
        <div className="plus-symbol">+</div>
        <div className="add-photo-text">Add your photo</div>
      </div>
      {/* Button version for narrower screens */}
      <button className="photo-input-button" onClick={handlePhotoInputClick}>
        Add your photo
      </button>
      {showModal && <InputDetailsForm onClose={handleCloseModal} showModal={showModal} />}
      {showModal && <div className="dark-overlay" onClick={handleCloseModal}></div>}
    </div>
  );
};

export default PhotoInput;