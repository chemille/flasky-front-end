import logo from "./logo.svg";
import "./App.css";
import DogList from "./components/DogList";

// This is a global variable and hard-coded for this example.
// Usually you would get this data from an API
const dogData = [
  {
    name: "Telfar",
    age: 1,
    cuteness: "1000000",
    breed: "French Bulldog",
  },
  {
    name: "Juicy",
    age: 3,
    cuteness: "500000",
    breed: "pug",
  },
  {
    name: "Couture",
    age: 4,
    cuteness: "70000",
    breed: "poodle",
  },
];

function App() {
  // const dogInfo = [ {name: "Frodo", age: "5", breed: "greyhound mutt"} ]
  const name = "Panthers";
  return (
    <div className="App">
      Hello! It's Tuesday in {name} Roundtable!
      <DogList dogData={dogData} />
    </div>
  );
}

export default App;
