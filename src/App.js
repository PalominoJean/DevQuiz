import logo from "./logo.svg";
import "./App.css";

function App() {
  const gasStations = [1, 2, 3, 4, 5];
  const costs = [3, 4, 5, 1, 2];
  const initialIndex = 2;

  let currentTank = 0;
  let response = initialIndex;

  const stationsCosts = gasStations.map((el, index) => [el, costs[index]]);
  const stationsCostsOrdered = [
    ...stationsCosts.slice(initialIndex),
    ...stationsCosts.slice(0, initialIndex),
  ];

  stationsCostsOrdered.forEach((el) => {
    currentTank = currentTank + el[0];
    if (currentTank >= el[1]) {
      currentTank = currentTank - el[1];
    } else {
      response = -1;
      return;
    }
  });

  console.log(response);
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
