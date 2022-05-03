import React from "react";
import Feed from "./components/common/Feed";

import "./App.css";

function App() {
  return (
    // BEM
    <div className="app">
      <div style={{ flex: 0.15, backgroundColor: "orange" }}>SideBar</div>
      <Feed />
      {/*Profile*/}
      <div style={{ flex: 0.25, backgroundColor: "red" }}>Widget</div>
    </div>
  );
}

export default App;
