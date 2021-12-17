import logo from './logo.svg';
import './App.css';
import audit from './auditreports/audit.json';

function App() {
  console.log({audit})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn some React
        </a>
        <p> Sample React Application hellow world </p>
      </header>
    </div>
  );
}

export default App;
