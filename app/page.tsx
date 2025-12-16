"use client";

import { useState, ChangeEvent } from 'react';

export default function HomePage() {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    if (inputValue.trim()) {
      console.log('Input taken:', inputValue);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Input Console Logger</h1>
      
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Type something and click outside..."
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          minWidth: '300px',
          display: 'block',
          marginBottom: '1rem'
        }}
      />

      <div style={{ marginTop: '1rem' }}>
        <p>Current input: {inputValue}</p>
        <p><small>Input will be logged to console when you click outside the input field</small></p>
      </div>
    </div>
  );
}


