import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navBar/Navbar";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Products from "./pages/products/Products";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="products/:catName" element={<Products />} />

        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
