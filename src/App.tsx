import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeCompo from "./pages/home";
import ProductDetails from "./pages/details";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomeCompo />} />
          <Route path={`/details/:id`} element={<ProductDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
