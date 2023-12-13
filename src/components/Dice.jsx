import { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import diceEmpty from '../assets/images/dice-empty.png';

function Dice() {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6, diceEmpty];

  // console.log(diceImages);

  const [diceImage, setDiceImage] = useState(diceImages[0]);

  console.log(diceImage);

  const handleClick = () => {
    setDiceImage(diceEmpty);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      setDiceImage(diceImages[randomIndex]);
    }, 1000);
  };
  return (
    <img
      src={diceImage}
      alt="Dice"
      style={{ cursor: 'pointer', width: '50px', height: '50px' }}
      onClick={handleClick}
    />
  );
}

export default Dice;
