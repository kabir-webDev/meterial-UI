import React from "react";
import "./App.css";
import Material from "./component/Material-UI-Compo/Material";
// import Header from './component/Header/Header';
import Navbar from "./component/Material-UI-Compo/Navbar";
import Huku from "./component/Huku/Huku";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header/> */}
      <div className="margin">{/* <Material /> */}</div>
      <Huku />
    </div>
  );
}

export default App;
