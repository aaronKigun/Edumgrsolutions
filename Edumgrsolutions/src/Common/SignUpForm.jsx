import React, { useState } from 'react';

function SignUpForm() {
  const [schoolName, setSchoolName] = useState('');
  const [category, setCategory] = useState('Staff');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [schoolEmail, setSchoolEmail] = useState('');
  const [schoolPhoneNumber, setSchoolPhoneNumber] = useState('');
  const [schoolWebsite, setSchoolWebsite] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhoneNumber, setContactPhoneNumber] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add your form submission logic here

    // Example output for testing
    console.log({
      schoolName,
      category,
      address,
      country,
      state,
      city,
      schoolEmail,
      schoolPhoneNumber,
      schoolWebsite,
      contactName,
      contactEmail,
      contactPhoneNumber,
      acceptedTerms,
    });
  };

  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="input-field"
          placeholder="School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />

        <select
          className="input-field"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Staff">Staff</option>
          <option value="Student">Student</option>
        </select>

        <input
          type="text"
          className="input-field"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="input-group">
          <select
            className="dropdown-field"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="Country">Country</option>
            {/* Add country options */}
          </select>

          <select
            className="dropdown-field"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value="State/Province">State/Province</option>
            {/* Add state options */}
          </select>

          <select
            className="dropdown-field"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="City">City</option>
            {/* Add city options */}
          </select>
        </div>

        <input
          type="email"
          className="input-field"
          placeholder="School Email"
          value={schoolEmail}
          onChange={(e) => setSchoolEmail(e.target.value)}
        />

        <input
          type="tel"
          className="input-field"
          placeholder="School Phone Number"
          value={schoolPhoneNumber}
          onChange={(e) => setSchoolPhoneNumber(e.target.value)}
        />

        <input
          type="text"
          className="input-field"
          placeholder="School Website/URL"
          value={schoolWebsite}
          onChange={(e) => setSchoolWebsite(e.target.value)}
        />

        <input
          type="text"
          className="input-field"
          placeholder="Contact Name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />

        <input
          type="email"
          className="input-field"
          placeholder="Contact Email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />

        <div className="input-group">
          <select
            className="dropdown-field flag-dropdown"
            value="+234"
            onChange={() => {}}
          >
            <option value="+234">+234</option>
            {/* Add other country codes */}
          </select>

          <input
            type="tel"
            className="input-field phone-field"
            placeholder="Contact Phone Number"
            value={contactPhoneNumber}
            onChange={(e) => setContactPhoneNumber(e.target.value)}
          />
        </div>

        <label>
          <input
            type="checkbox"
            className="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          I accept that I have read and clearly understood the terms and
          conditions guiding the use of this service.
        </label>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
