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
  const [copied, setCopied] = useState(false);

  function handleGenerate() {
    setPassword(generatePassword(length, useUpper, useNumbers, useSymbols));
    setCopied(false);
  }

  function handleCopy() {
    if (password) {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  }

  return (
    <div className="luxury-container glassy-3d">
      <div className="luxury-title gold-gradient-text">Password Generator</div>
      <div style={{ marginBottom: 24 }}>
        <label>
          Length:
          <input
            type="number"
            min={6}
            max={100}
            value={length}
            onChange={e => setLength(Number(e.target.value))}
            style={{ marginLeft: 8, width: 60, borderRadius: 6, border: '1px solid #ffd700', padding: 4, background: '#18191a', color: '#ffd700' }}
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
      <div className="luxury-password glassy-3d" style={{ color: '#ffd700', background: 'rgba(35,37,38,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 48, fontWeight: 600, fontSize: '1.3rem', boxShadow: '0 4px 32px 0 rgba(255,215,0,0.10)' }}>
        <span style={{ flex: 1, wordBreak: 'break-all', paddingLeft: 8 }}>{password || 'Your password will appear here'}</span>
        {password && (
          <button
            className="luxury-btn btn-3d"
            style={{ marginLeft: 12, padding: '6px 16px', fontSize: '1rem' }}
            onClick={handleCopy}
            type="button"
          >
            Copy
          </button>
        )}
      </div>
      {copied && <div style={{ color: '#ffd700', marginTop: 8, fontWeight: 600, textShadow: '0 0 8px #ffd700' }}>Copied!</div>}
      <button className="luxury-btn btn-3d" onClick={handleGenerate} style={{ marginTop: 24, fontSize: '1.1rem', padding: '12px 36px' }}>
        Generate Password
      </button>
    </div>
  );
}