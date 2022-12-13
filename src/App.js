import "./App.css";
import Navbar from "./components/Navbar/navbar";
import React from "react";
import Body from "./components/body/body";


function App() {
  return (
    <>
      <div className="App">
        <Navbar/>
      </div>
      <Body />
    </>
  );
}

export default App;
