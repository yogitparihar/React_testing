import React from "react";
import DemoImage from "./Assets/demo.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Yogit Parihar</p>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          id="email_id"
        />
      </div>
      <div>
        <img title="demo-img" src={DemoImage} />
      </div>
    </div>
  );
}

export default App;
