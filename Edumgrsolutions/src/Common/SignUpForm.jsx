import React, { useState } from 'react';
import './SignUpForm.css'
function SignUpForm() {
  const [schoolName, setSchoolName] = useState('');
  const [category, setCategory] = useState('Select Category');
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
  const [chooseLogo, setChooseLogo] = useState('');
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
      <h1>SIGN UP</h1>
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="input-field1"
          placeholder="School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
        />

        <select
          className="input-field1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder='Select Category'
        >
          <option value="Staff">Staff</option>
          <option value="Student">Student</option>
        </select>

        <input
          type="text"
          className="input-field1"
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
          className="input-field1"
          placeholder="School Email"
          value={schoolEmail}
          onChange={(e) => setSchoolEmail(e.target.value)}
        />

        <input
          type="tel"
          className="input-field1"
          placeholder="School Phone Number"
          value={schoolPhoneNumber}
          onChange={(e) => setSchoolPhoneNumber(e.target.value)}
        />

        <input
          type="text"
          className="input-field1"
          placeholder="School Website/URL"
          value={schoolWebsite}
          onChange={(e) => setSchoolWebsite(e.target.value)}
        />

        <input
          type="text"
          className="input-field1"
          placeholder="Contact Name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />

        <input
          type="email"
          className="input-field1"
          placeholder="Contact Email"
          value={contactEmail}
          onChange={(e) => setContactEmail(e.target.value)}
        />

        <div className="input-group">
          <select
            className="dropdown-fiel flag-dropdown"
            value="+234"
            onChange={() => {}}
          >
            <option value="+234">+234</option>
            <option value="+1">+1</option>
          </select>

          <input
            type="tel"
            className="phone-field"
            placeholder="Contact Phone Number"
            value={contactPhoneNumber}
            onChange={(e) => setContactPhoneNumber(e.target.value)}
          />
        </div>
        <input
        type='file'
        className='chooselogo'
        value={chooseLogo}
        onClick={(e) => setChooseLogo(e.target.value)}
        />
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
