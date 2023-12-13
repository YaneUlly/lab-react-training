function IdCard({ picture, firstName, lastName, gender, height, birth }) {
  return (
    <div>
      <h1>Id Cards</h1>
      <div className="id-card">
        <img src={picture} alt={`${firstName} ${lastName}`} />
        <container>
          <p>
            <strong>First Name:</strong>
            {firstName}
          </p>
          <p>
            <strong>Last Name:</strong>
            {lastName}
          </p>
          <p>
            <strong>Gender:</strong>
            {gender}
          </p>
          <p>
            <strong>Height:</strong>
            {`${height}m`}
          </p>
          <p>
            <strong>Birth:</strong>
            {birth.toDateString()}
          </p>
        </container>
      </div>
    </div>
  );
}
export default IdCard;
