import './App.css';
import Issues from "./Issues";

function App() {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
      <div className="container">
        <h1>React Github Reported Issues</h1>
        <Issues />
      </div>
  );
}

export default App;
