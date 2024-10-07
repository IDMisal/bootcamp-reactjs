import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section className="App-section">
        <div className="section-title">
          My First Section!
        </div>
        <a href="https://reactjs.org">Learn React</a>
      </section>
    </div>
  );
}

export default App;
