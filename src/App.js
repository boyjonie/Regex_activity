import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    // Check password strength using regex
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(newPassword)) {
      setPasswordError('Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be at least 8 characters long');
      setPasswordStrength('');
    } else {
      setPasswordError('');
      // Set password strength based on length
      if (newPassword.length < 10) {
        setPasswordStrength('Weak');
      } else if (newPassword.length < 14) {
        setPasswordStrength('Medium');
      } else {
        setPasswordStrength('Strong');
      }
    }
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <form style={formStyle}>
      <div style={formGroupStyle}>
        <label>Email:</label>
        <input
          style={inputStyle}
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div style={formGroupStyle}>
        <label>Password:</label>
        <input
          style={inputStyle}
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        {passwordError && <p style={errorMessageStyle}>{passwordError}</p>}
        {passwordStrength && <p>Password Strength: {passwordStrength}</p>}
      </div>
      <div style={formGroupStyle}>
        <label>Confirm Password:</label>
        <input
          style={inputStyle}
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        {confirmPassword !== password && <p style={errorMessageStyle}>Passwords do not match</p>}
      </div>
      <button type="submit" style={buttonStyle}>Login</button>
    </form>
  );
};

export default App;

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '2px solid #ccc',
  borderRadius: '10px',
  padding: '20px',
  maxWidth: '400px',
  margin: '0 auto',
};

const formGroupStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  width: 340,
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const errorMessageStyle = {
  color: 'blue',
  width: 300
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'blue',
  color: 'white',
  cursor: 'pointer',
  fontSize: '16px',
};

