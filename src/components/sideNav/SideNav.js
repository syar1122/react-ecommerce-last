import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoriesHeader from "../categoriesHeader/CategoriesHeader";
import SearchBar from "../searchBar/SearchBar";
import UserDropdown from "../userDropdown/UserDropdown";
import "./sideNav.css";
import { useSelector } from "react-redux";
import UserSubMenu from "../userSubMenu/UserSubMenu";

export default function SideNav() {
  const [subMenu, setSubMenu] = useState(false);
  const { isAuth, authToken } = useSelector((state) => state.user);
  if (authToken) {
  }
  return (
    <div className="sidenav" id="mob-demo">
      <Link to="/" className="brand-logo">
        Syar<span>D</span>ev
      </Link>
      <li class="divider"></li>
      <div className="nav-section">
        <SearchBar></SearchBar>

        <CategoriesHeader></CategoriesHeader>

        {!isAuth ? (
          <div className="register-section">
            <Link to="/login" className="btn-flat">
              Login
            </Link>
            <Link to="/register" className="btn">
              Signup
            </Link>
          </div>
        ) : (
          <Link
            to="#"
            onClick={() => {
              setSubMenu(!subMenu);
            }}
            style={{ textTransform: "capitalize" }}
            className="auth-drop-down"
          >
            <i className="material-icons left">account_circle</i>
            <UserDropdown></UserDropdown>
            <i className="material-icons right">arrow_drop_down</i>
            {subMenu && <UserSubMenu></UserSubMenu>}
          </Link>
        )}
      </div>
    </div>
  );
}
