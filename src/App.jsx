import React from "react";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoggedInPages from "./LoginChecker/LoggedInPages";
import Login from "./Pages/Login";

function App() {
  return (
    <HashRouter>
      {/* wrapper component for routing. this helps with reading ULs, to store history, and also with navigation */}
      <div className="page">
        <Routes>
          <Route
            path="/login"
            element={ <Login />}
          />
          <Route path="/*" element={<LoggedInPages />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
