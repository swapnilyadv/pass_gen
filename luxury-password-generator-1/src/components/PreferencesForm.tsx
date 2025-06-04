import React, { useState } from 'react';

const PreferencesForm = ({ onPreferencesChange }) => {
    const [length, setLength] = useState(12);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        onPreferencesChange({
            length,
            includeUppercase,
            includeNumbers,
            includeSpecialChars,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Password Length:
                <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    min="4"
                    max="20"
                />
            </label>
            <label>
                Include Uppercase Letters:
                <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                />
            </label>
            <label>
                Include Numbers:
                <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                />
            </label>
            <label>
                Include Special Characters:
                <input
                    type="checkbox"
                    checked={includeSpecialChars}
                    onChange={(e) => setIncludeSpecialChars(e.target.checked)}
                />
            </label>
            <button type="submit">Set Preferences</button>
        </form>
    );
};

export default PreferencesForm;