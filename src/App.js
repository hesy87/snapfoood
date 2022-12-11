import "./App.css";
import Navbar from "./components/Navbar/navbar";
import React from "react";
import Body from "./components/body/body";
import Cartprovider from "./context/cartProvider";

function App() {
  return (
    <Cartprovider>
      <div className="App">
        <Navbar/>
      </div>
      <Body />
    </Cartprovider>
  );
}

export default App;
