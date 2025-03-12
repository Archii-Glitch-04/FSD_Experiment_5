import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import MultiStepForm from "./MultiStepForm"; // Import MultiStepForm component

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      <p className="read-the-docs text-center">
        Click on the Vite and React logos to learn more.
      </p>

      {/* Multi-Step Form Component */}
      <div className="container mt-5">
        <h2 className="text-center">Multi-Step Form</h2>
        <MultiStepForm />
      </div>
    </div>
  );
}

export default App;
