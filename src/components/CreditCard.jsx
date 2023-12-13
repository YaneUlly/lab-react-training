function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const lastFourDigits = number.slice(-4);

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    margin: '10px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const headerStyle = {
    fontSize: '24px',
    marginBottom: '10px',
    textAlign: 'right',
    width: '100%',
  };

  const expirationStyle = {
    fontSize: '14px',
    marginBottom: '5px',
    textAlign: 'left',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>{type === 'Visa' ? 'VISA' : 'MasterCard'}</div>
      <div style={{ fontSize: '18px', marginBottom: '10px' }}>
        **** **** **** {lastFourDigits}
      </div>
      <div style={expirationStyle}>
        <div>
          Expires {expirationMonth}/{expirationYear}
        </div>
        <div>{bank}</div>
      </div>
      <div style={{ fontSize: '16px', textAlign: 'left', width: '100%' }}>
        {owner}
      </div>
    </div>
  );
}

export default CreditCard;
