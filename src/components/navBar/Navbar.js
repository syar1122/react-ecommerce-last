import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/userSlice";
import CartCount from "../cartCount/CartCount";
import SearchBar from "../searchBar/SearchBar";
import UserDropdown from "../userDropdown/UserDropdown";
import UserSubMenu from "../userSubMenu/UserSubMenu";
import "./navBar.css";

export default function Navbar() {
  const { isAuth } = useSelector((state) => state.user);
  const [subMenu, setSubMenu] = useState(false);

  const dispatch = useDispatch();

  console.log("navbar isAuth", isAuth);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          syar<span>D</span>ev
        </Link>
        <Link to="#" data-target="mob-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </Link>
        <div
          className="hide-on-med-and-down"
          style={{
            display: "flex",
            position: "relative",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <SearchBar />
        </div>

        <ul id="nav-mobile" className="">
          <li className="hide-on-small-only">
            {!isAuth ? (
              <Link to="login">Login</Link>
            ) : (
              <Link
                to="#"
                onClick={() => {
                  setSubMenu(!subMenu);
                }}
                onMouseLeave={() => setSubMenu(false)}
                style={{ textTransform: "capitalize" }}
                className="auth-drop-down"
              >
                <i className="material-icons left">account_circle</i>
                <UserDropdown></UserDropdown>
                <i className="material-icons right">arrow_drop_down</i>
                {subMenu && <UserSubMenu></UserSubMenu>}
              </Link>
            )}
          </li>
          <li>
            <Link to="cart" className="cart-link">
              <CartCount />
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
