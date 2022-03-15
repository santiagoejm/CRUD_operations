import { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [food, setFood] = useState("");
  const [days, setDays] = useState(0);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      food: food,
      days: days,
    });
  };

  return (
    <div className="App">
      <h1>CRUD Operations</h1>

      <label>Food Name:</label>
      <input
        type="text"
        onChange={(e) => {
          setFood(e.target.value);
        }}
      />

      <label>Days since you ate it:</label>
      <input
        type="number"
        onChange={(e) => {
          setDays(e.target.value);
        }}
      />

      <button onClick={addToList}>Add to list</button>
    </div>
  );
}

export default App;
