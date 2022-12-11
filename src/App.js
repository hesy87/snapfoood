import "./App.css";
import Navbar from "./components/Navbar/navbar";
import React from "react";
import Body from "./components/body/body";
import OrderContext from "./context/selectedFood-context";


function App() {
  return (
    <OrderContext.Provider>
      <div className="App">
        <Navbar/>
      </div>
      <Body />
    </OrderContext.Provider>
  );
}

export default App;
