import React, { useState } from 'react';

const MobileNumberInput = () => {
  const [operator, setOperator] = useState('');
  const [number, setNumber] = useState('');

  const updatePrefix = (e) => {
    const selectedOperator = e.target.value;
    setOperator(selectedOperator);
    setNumber(selectedOperator ? `+${selectedOperator}` : '');
  };

  const validateInput = (e) => {
    const inputValue = e.target.value;
    const prefix = `+${operator}`;
    if (!inputValue.startsWith(prefix)) {
      setNumber(prefix);
    } else {
      const regex = new RegExp(`^\\+${operator}[0-9]*$`);
      if (regex.test(inputValue)) {
        setNumber(inputValue);
      }
    }
  };

  const submitNumber = () => {
    if (operator && number.length === 14) {
      alert(`Full Number: ${number}`);
    } else {
      alert('Please select an operator and enter a valid number.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-xl font-bold mb-4">Enter Mobile Number</h1>
        <select
          id="operator"
          className="mb-4 p-2 border rounded"
          value={operator}
          onChange={updatePrefix}
        >
          <option value="">Select Operator</option>
          <option value="88017">GP</option>
          <option value="88019">BL</option>
          <option value="88018">Robi</option>
        </select>
        <br />
        <input
          type="text"
          id="number"
          placeholder="Enter the rest of the number"
          maxLength="14"
          className="mb-4 p-2 border rounded w-full"
          value={number}
          onChange={validateInput}
        />
        <br />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={submitNumber}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MobileNumberInput;
