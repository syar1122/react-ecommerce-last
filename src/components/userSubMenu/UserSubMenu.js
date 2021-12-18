import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../features/userSlice";
import "./userSubMenu.css";

export default function UserSubMenu() {
  const dispatch = useDispatch();
  return (
    <ul className="auth-sub-menu">
      <li>
        <Link to="/#">My order</Link>
      </li>
      <li>
        <Link to="/#">Admin Panel</Link>
      </li>
      <li>
        <Link
          to="/#"
          onClick={() => {
            dispatch(logout());
          }}
        >
          <i className="material-icons left">logout</i>Logout
        </Link>
      </li>
    </ul>
  );
}
