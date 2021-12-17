import logo from './logo.svg';
import './App.css';
import audit from './auditreports/audit.json';

function App() {
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
          learn React
        </a>
        <p> Sample React Application </p>
        <pre> {JSON.stringify(audit, 2, null)} </pre>
      </header>
    </div>
  );
}

export default App;
