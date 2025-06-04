import React, { useState } from 'react';
import './styles/luxury.css';

function generatePassword(length: number, useUpper: boolean, useNumbers: boolean, useSymbols: boolean) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = lower;
  if (useUpper) chars += upper;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

export default function App() {
  const [length, setLength] = useState(12);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState('');

  function handleGenerate() {
    setPassword(generatePassword(length, useUpper, useNumbers, useSymbols));
  }

  return (
    <div className="luxury-container">
      <div className="luxury-title">Password Generator</div>
      <div style={{ marginBottom: 24 }}>
        <label>
          Length:
          <input
            type="number"
            min={6}
            max={32}
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            style={{ marginLeft: 8, width: 60, borderRadius: 6, border: '1px solid #ffd700', padding: 4 }}
          />
        </label>
        <label style={{ marginLeft: 16 }}>
          <input
            type="checkbox"
            checked={useUpper}
            onChange={e => setUseUpper(e.target.checked)}
          /> Uppercase
        </label>
        <label style={{ marginLeft: 16 }}>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={e => setUseNumbers(e.target.checked)}
          /> Numbers
        </label>
        <label style={{ marginLeft: 16 }}>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={e => setUseSymbols(e.target.checked)}
          /> Symbols
        </label>
      </div>
      <div className="luxury-password">{password || 'Your password will appear here'}</div>
      <button className="luxury-btn" onClick={handleGenerate}>
        Generate Password
      </button>
    </div>
  );
}