import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState('');
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = (n) => {
    const numbers = Array.from({ length: n }, () =>
      Math.floor(Math.random() * 1000) // generates numbers between 0 and 999
    );
    setRandomNumbers(numbers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const n = parseInt(count);
    if (!isNaN(n) && n > 0) {
      generateRandomNumbers(n);
    } else {
      setRandomNumbers([]);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto text-center mt-5">
      <h1 className="text-2xl  mb-4 text-primary">Random Number Generator</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="">How many Random numbers You want?</label>
        <br />
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="Enter how many numbers"
          className="form-input border p-2 rounded m-2"
        />
        <br />
        <button type="submit" className="btn btn-outline-success  px-4 py-2 rounded">
          Generate
        </button>
      </form>
      {randomNumbers.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Generated Numbers:</h2>
          <p>{randomNumbers.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
