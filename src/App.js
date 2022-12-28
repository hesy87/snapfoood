import "./App.css";
import Navbar from "./components/Navbar/navbar";
import React from "react";
import Body from "./components/body/body";
import BreadCrumb from "./components/body/breadcrumb/breadcrumb";
import {Route, Routes } from "react-router-dom";
import TehranResturants from './components/tehranResturants';
import MainPage from './components/mainPageSnappFood';


function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <BreadCrumb />
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="/Tehran" element={<TehranResturants />} />
        <Route path="/pizzaro" element={<Body/>} />
      </Routes>
      </>
  );
}

export default App;
