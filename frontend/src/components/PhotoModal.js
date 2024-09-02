import React from "react";

const PhotoModal = ({ photo, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <img src={`http://localhost:8055/assets/${photo.image}`} alt={photo.title} />
        <p>{photo.title}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PhotoModal;
