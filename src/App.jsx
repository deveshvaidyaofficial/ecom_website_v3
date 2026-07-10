import { Routes, Route, Navigate } from "react-router-dom";

import About from "./pages/About";
import Product from "./pages/Product";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/home" />}
      />

      <Route
        path="/home"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/product/:product_id"
        element={<Product />}
      />

    </Routes>
  );
}

export default App;

//try to import everything eith control space formula