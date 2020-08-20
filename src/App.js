import React from "react";
import "./App.css";
import Material from "./component/Material-UI-Compo/Material";
// import Header from './component/Header/Header';
import Navbar from "./component/Material-UI-Compo/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header/> */}
      <div className="margin">
        <Material />
      </div>
    </div>
  );
}

export default App;
