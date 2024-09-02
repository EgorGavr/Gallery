import React, { useEffect } from "react";
import { observer } from "mobx-react";
import photoStore from "../stores/PhotoStore";
import PhotoModal from "./PhotoModal";

const PhotoGallery = observer(() => {
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  useEffect(() => {
    photoStore.fetchPhotos();
  }, []);

  return (
    <div>
      <div className="gallery">
        {photoStore.photos.map((photo) => (
          <img
            key={photo.id}
            src={`http://localhost:8055/assets/${photo.image}`}
            alt={photo.title}
            onClick={() => setSelectedPhoto(photo)}
            className="photo-thumbnail"
          />
        ))}
      </div>

      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
});

export default PhotoGallery;