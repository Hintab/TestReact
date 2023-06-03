import React, { useState } from 'react';
import Select from 'react-select';

const Counter = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const incrementCounter = () => {
    setCurrentCount(currentCount + 1);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const options = [
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
    { value: 'orange', label: 'Orange' },
    { value: 'purple', label: 'Purple' },
  ];

  return (
    <div>
      <h1>Counter</h1>

      <p>This is a simple example of a React component.</p>

      <p aria-live="polite">
        Current count: <strong>{currentCount}</strong>
      </p>

      <Select value={selectedOption} onChange={handleChange} options={options} />

      <button className="btn btn-primary" onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
