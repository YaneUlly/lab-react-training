function Random({ min, max }) {
  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <div>
      Random value between {min} and {max}: {randomInt(min, max)}
    </div>
  );
}

export default Random;
