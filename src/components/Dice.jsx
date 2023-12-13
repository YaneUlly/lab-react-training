import { useState } from 'react';

function Dice() {
  const diceImages = [
    '/src/assets/images/dice1.png',
    '/src/assets/images/dice2.png',
    '/src/assets/images/dice3.png',
    '/src/assets/images/dice4.png',
    '/src/assets/images/dice5.png',
    '/src/assets/images/dice6.png',
  ];

  // console.log(diceImages);

  const [diceImage, setDiceImage] = useState(diceImages[0]);

  console.log(diceImage);

  const handleClick = () => {
    setDiceImage('/src/assets/images/dice-empty.png');

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDiceImage(diceImages[randomIndex]);
    }, 1000);
  };
  return (
    <img
      src={diceImage}
      alt="Dice"
      style={{ cursor: 'pointer' }}
      onClick={handleClick}
    />
  );
}

export default Dice;
