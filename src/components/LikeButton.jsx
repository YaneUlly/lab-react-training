import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const currentColor = colors[colorIndex];

  const handleLikeClick = () => {
    const newLikes = likes + 1;
    const newColorIndex = (colorIndex + 1) % colors.length; // make sure that the index wraps around 0

    setLikes(newLikes);
    setColorIndex(newColorIndex);
  };

  return (
    <button
      style={{ backgroundColor: currentColor, color: 'white' }}
      onClick={handleLikeClick}
    >
      {likes} Likes
    </button>
  );
}

export default LikeButton;
