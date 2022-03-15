import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD Operations</h1>

      <label>Food Name:</label>
      <input type="text" />

      <label>Days since you ate it:</label>
      <input type="number" />

      <button>Add to list</button>
    </div>
  );
}

export default App;
