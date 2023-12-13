function Rating({ children }) {
  // value between 0 and 5
  const ratingValue = Math.min(Math.max(0, parseFloat(children)), 5);

  // filled and empty stars
  const filledStars = Math.round(ratingValue); // round down the values of the rating
  const hasHalfStars = ratingValue % 1 !== 0;

  // array of star elements
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < filledStars) {
      return '★';
    } else if (index === filledStars && hasHalfStars) {
      return '☆';
    } else {
      return '☆';
    }
  });

  return (
    <div>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
}

export default Rating;
