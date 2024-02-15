import "../src/Assets/styles/App.css";
import "./Assets/styles/style.scss";

import Category from "../src/components/Category";
import Cash from "./components/Cash";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Category />} />
        <Route path="/cash" element={<Cash />} />
      </Routes>
    </div>
  );
}

export default App;
