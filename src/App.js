import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHighlighter } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App() {
  const [count, setCount ] = useState(0)

  function startClock () {
    setInterval(function() { setCount(count + 1)}, 1000)
  }
  return (
    <div className="App">
      <main>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          <FontAwesomeIcon icon={faHighlighter} size="6x" />
          Annotate
        </button>
      </main>
      
    </div>
  );
}

export default App;
