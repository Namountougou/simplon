import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import AddComponent from "./pages/AddComponent";
import Home from "./pages/Home";
import TechnoList from "./pages/TecnoList";
import handleAddTechno from "./Function/HANDLE";

function App() {
  <option value="Dertz">DEUXTZ</option>;
  const [technos, setTechnos] = useState([]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<AddComponent handleAddTechno={handleAddTechno} a={10} />}
        />
        <Route path="/list" element={<TechnoList />} />
      </Routes>
    </div>
  );
}

export default App;
