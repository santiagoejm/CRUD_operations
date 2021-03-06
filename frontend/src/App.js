import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [food, setFood] = useState("");
  const [days, setDays] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [newFood, setNewFood] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((res) => {
      setFoodList(res.data);
    });
  }, []);

  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      food: food,
      days: days,
    });
  };

  const updateFood = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newFood: newFood,
    });
  };

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`);
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

      <h1>Food List</h1>
      {foodList.map((val) => {
        return (
          <div key={val._id} className="card">
            <h3>{val.foodName}</h3>
            <h3>{val.daysSinceAte}</h3>
            <input
              type="text"
              placeholder="new food name..."
              onChange={(e) => {
                setNewFood(e.target.value);
              }}
            />
            <button onClick={() => updateFood(val._id)}>Update</button>
            <br />
            <button onClick={() => deleteFood(val._id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
