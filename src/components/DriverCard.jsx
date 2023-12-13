function DriverCard({ name, rating, img, car }) {
  const integerPart = Math.floor(rating);
  const decimalPart = rating - integerPart;

  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < integerPart) {
      return '★';
    } else if (index === integerPart && decimalPart >= 0.5) {
      return '★';
    } else {
      return '☆';
    }
  });

  const driverCard = {
    backgroundColor: '#4761B3',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    margin: '10px',
    width: '800px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const driverInfo = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    lineHeight: '8px',
    marginLeft: '15px',
  };

  const driverImg = {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
  };

  return (
    <div style={driverCard}>
      <div style={driverImg}>
        <img src={img} alt={`Driver: ${name}`} style={driverImg} />
      </div>
      <div style={driverInfo}>
        <h2>{name}</h2>
        <div className="rating">
          {stars.map((star, index) => (
            <span key={index} className={star === '★' ? 'filled' : ''}>
              ★
            </span>
          ))}
        </div>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
