import React, { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(0);

  function calculateSum() {
    let n = parseInt(userInput);

    if ( n <= 0) {
      alert("Please enter a  positive number!");
      setResult(0);
    } else {
      let total = 0;
      for (let i = 1; i <= n; i = i + 1) {
        total = total + i;
      }
      setResult(total);
    }
  }

  return (
    <div style={{ }}>
      <h2>Sum from 1 to N</h2>
      
      <input 
        type="number" 
        placeholder="Enter value of N" 
        value={userInput} 
        onChange={function(e) { setUserInput(e.target.value); }} 
      />

      <button onClick={calculateSum} style={{  }}>
        find Sum
      </button>

      <div >
        <h3>sum from 1 to n is: {result}</h3>
      </div>
    </div>
  );
}

export default App;
