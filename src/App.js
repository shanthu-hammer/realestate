//download these
//npm i sass
//npm install react-router-dom@latest

import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
