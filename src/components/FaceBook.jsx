import { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [sortBy, setSortBy] = useState('firstName');
  const [searchTerm, setSearchTerm] = useState('');

  const uniqueCountries = Array.from(
    new Set(profiles.map((profile) => profile.country))
  );

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleSortChange = (criteria) => {
    setSortBy(criteria);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProfiles = profiles
    .filter((profile) =>
      profile.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));

  const isHighlighted = (country) => {
    return country === selectedCountry ? 'lightblue' : '';
  };

  return (
    <div>
      <h1>Facebook Profiles</h1>
      <div>
        <input
          type="text"
          placeholder="Search by first name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <label>Sorte by:</label>
        <select
          value={sortBy}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="country">Country</option>
        </select>
      </div>
      <div>
        {uniqueCountries.map((country) => (
          <button
            key={country}
            style={{ backgroundColor: isHighlighted(country) }}
            onClick={() => handleCountryClick(country)}
          >
            {country}
          </button>
        ))}
      </div>

      {filteredProfiles.map((profile) => (
        <div
          key={profile.firstName + profile.lasName}
          className={`id-card ${selectedProfile === profile ? 'selected' : ''}`}
          style={{ backgroundColor: isHighlighted(profile.country) }}
          onClick={() => handleProfileClick(profile)}
        >
          <img
            src={profile.img}
            alt={`${profile.firstName} ${profile.lastName}`}
          />
          <container>
            <p>
              <strong>First Name:</strong>
              {profile.firstName}
            </p>
            <p>
              <strong>Last Name:</strong>
              {profile.lastName}
            </p>
            <p>
              <strong>Country:</strong>
              {profile.country}
            </p>
            <p>
              <strong>Type:</strong>
              {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </container>
        </div>
      ))}
    </div>
  );
}
export default FaceBook;
