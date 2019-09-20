import React from 'react';
import './App.css';

const App = () => {
  const buttonText = "Click Me!";

  return (
    <div style={{textAlign:"center"}}>
      <h1>
        Happy World!
      </h1>
      <button>
        {buttonText}
      </button>
    </div>
  );
};

export default App;
