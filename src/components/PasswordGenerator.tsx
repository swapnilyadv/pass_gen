import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [generatedPassword, setGeneratedPassword] = useState('');

    const generatePassword = () => {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let characterPool = lowercaseChars;
        if (includeUppercase) characterPool += uppercaseChars;
        if (includeNumbers) characterPool += numberChars;
        if (includeSpecialChars) characterPool += specialChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            password += characterPool[randomIndex];
        }

        setGeneratedPassword(password);
    };

    return (
        <div className="password-generator">
            <h2>Generate Your Luxury Password</h2>
            <div>
                <label>
                    Password Length:
                    <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        min="4"
                        max="20"
                    />
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                    />
                    Include Uppercase Letters
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                    />
                    Include Numbers
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={includeSpecialChars}
                        onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                    />
                    Include Special Characters
                </label>
            </div>
            <button onClick={generatePassword}>Generate Password</button>
            {generatedPassword && (
                <div>
                    <h3>Your Generated Password:</h3>
                    <p>{generatedPassword}</p>
                </div>
            )}
        </div>
    );
};

export default PasswordGenerator;