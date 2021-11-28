import React from 'react';
import './scss/style.scss';
import Home from "./components/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Personal from "./components/Personal";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/personal" element={<Personal />} />
                <Route path="/" element={<Home />} />

            </Routes>

        </div>
      </BrowserRouter>
  );
}


export default App;
