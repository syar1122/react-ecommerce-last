import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CategoriesHeader from "./components/categoriesHeader/CategoriesHeader";
import M from "materialize-css";

import Navbar from "./components/navBar/Navbar";
import SideNav from "./components/sideNav/SideNav";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Products from "./pages/products/Products";
import Register from "./pages/register/Register";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    let elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  });
  return (
    <>
      <Navbar />
      <div className="hide-on-small-only">
        <CategoriesHeader></CategoriesHeader>
      </div>
      <SideNav></SideNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="products/:catName/:subCat" element={<Products />} />
        <Route path="products/:catName" element={<Products />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
