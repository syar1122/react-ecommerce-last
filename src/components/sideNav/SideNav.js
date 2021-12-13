import React from "react";
import { Link } from "react-router-dom";
import CategoriesHeader from "../categoriesHeader/CategoriesHeader";
import SearchBar from "../searchBar/SearchBar";
import "./sideNav.css";

export default function SideNav() {
  return (
    <div className="sidenav" id="mob-demo">
      <Link to="/" className="logo">
        Syar<span>D</span>ev
      </Link>
      <li class="divider"></li>
      <div className="nav-section">
        <SearchBar></SearchBar>

        <CategoriesHeader></CategoriesHeader>

        <div className="register-section">
          <a href="#" className="waves-effect waves-teal btn-flat">
            Login
          </a>
          <a href="#" className="waves-effect waves-light btn">
            Signup
          </a>
        </div>
      </div>
    </div>
  );
}
