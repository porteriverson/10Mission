import "./App.css";
import BowlerList from "./BowlerList";

function Welcome() {
  return (
    <>
      <h3>Welcome, Bowlers</h3>
      <p>
        This site will display the information about bowlers on the Marlins and
        Sharks
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BowlerList />
    </>
  );
}

export default App;
