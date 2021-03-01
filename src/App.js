import React from "react";
import Sidebar from "./components/UI/Sidebar";
import Feed from "./components/UI/Feed";
import "./App.css";
import Widgets from "./components/UI/Widgets";
import { Button } from '@material-ui/core'

function App() {
  return (
    // BEM
    <div className="app">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />

    </div>
  );
}

export default App;
