import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordStrong = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleNationalityChange = (e) => {
    const newNationality = e.target.value;
    setNationality(newNationality);
  };

  return (
    <div className="signup">
      <h2>Sign up Page</h2>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: isEmailValid(email) ? 'green' : 'red' }}
        />
      </label>

      <label>
        Password:{' '}
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: isPasswordStrong(password) ? 'green' : 'red' }}
        />
      </label>

      <label>
        Nationality:
        <select value={nationality} onChange={handleNationalityChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </label>

      <button className="signupButton">Sing up</button>

      <p>
        {nationality === 'en' && 'Hello'}
        {nationality === 'de' && 'Hallo'}
        {nationality === 'fr' && 'Bonjour'}
      </p>

      <p>Your email is {email}</p>
    </div>
  );
}

export default SignupPage;
