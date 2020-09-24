import React from "react";
import "./App.css";
import StyleCompo from "./component/StyleCom/StyleCompo";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="sidebar__nav">Sidebar</div>
        <div className="body__content">
          <div className="content__item">
            <StyleCompo />
          </div>
          <div className="content__item">
            <StyleCompo />
          </div>
          <div className="content__item">
            <StyleCompo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
