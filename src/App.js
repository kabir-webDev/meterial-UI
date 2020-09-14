import React from "react";
import "./App.css";
import Material from "./component/Material-UI-Compo/Material";
// import Header from './component/Header/Header';
import Navbar from "./component/Material-UI-Compo/Navbar";
import Huku from "./component/Huku/Huku";
import Condition from "./component/Condition";
import Fetch from "./component/DataFetching/Fetch";

function App() {
  return (
    <div className="App">
      {/* <Condition /> */}
      <Fetch />
    </div>
  );
}

export default App;
