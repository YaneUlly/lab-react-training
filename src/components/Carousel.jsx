import { useState } from 'react';

function Carousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={handlePrevClick}>Left</button>
      <img
        src={images[currentImageIndex]}
        alt={`Carousel Images ${currentImageIndex + 1}`}
        style={{ maxWidth: '100%', maxHeight: '300px', margin: '10px' }}
      />
      <button onClick={handleNextClick}>Right</button>
    </div>
  );
}

export default Carousel;
