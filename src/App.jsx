import { useState } from "react";
// import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      {/* <h2>Movie App</h2> */}
      <div className="card-container">
        <Card title="Avatar" />
        <Card title="Dhurandhar" />
        <Card title="Chaava" />
        
      </div>
    </>
  );
}

export default App;
