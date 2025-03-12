import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard'; // Import Dashboard component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-4">
      <div className="text-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1 className="text-center">Vite + React</h1>
      
      <div className="card text-center">
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
        <p>Edit <code>App.jsx</code> and save to test HMR</p>
      </div>

      <p className="read-the-docs text-center">
        Click on the Vite and React logos to learn more
      </p>

      {/* Include Dashboard Component Below */}
      <Dashboard />
    </div>
  );
}

export default App;
