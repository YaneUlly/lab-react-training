import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };
  return (
    <img
      src={isClicked ? imgClicked : img}
      alt="clickableimage"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
  );
}

export default ClickablePicture;
