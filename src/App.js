import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [word1, setWord1] = useState('');
  const [word2, setWord2] = useState('');
  const [currentWords, setCurrentWords] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!word1) {
      // Set the first word
      setWord1(inputValue);
      setCurrentWords(inputValue);
    } else if (!word2) {
      // Set the second word
      setWord2(inputValue);
      setCurrentWords(inputValue);
    } else {
      // Toggle between words
      setCurrentWords(currentWords === word1 ? word2 : word1);
    }

    // Clear the input field
    setInputValue('');
  };

  return (
    <div className="App">
      <h1>{currentWords}</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your input"
        />
        <button type="submit">Toggle Words</button>
      </form>
    </div>
  );
}

export default App;

