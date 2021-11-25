import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { login } from "../../features/userSlice";
import { useLoginMutation } from "../../services/app.api";
import "./login.css";

export default function Login() {
  let [loginF, { isLoading, data, error }] = useLoginMutation();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const token = localStorage.getItem("authToken");

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="col s12"
      >
        <div className="row">
          <div className="input-field col s12">
            <input
              value={email}
              id="email"
              type="email"
              className="validate"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label forhtml="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              value={password}
              id="password"
              type="password"
              className="validate"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label forhtml="password">Password</label>
          </div>
        </div>
        <button
          className="waves-effect waves-light btn"
          onClick={() => {
            loginF({
              email: email,
              password: password,
            })
              .unwrap()
              .then((data) => {
                console.log("login global state", data);
                dispatch(login(data.token));
                navigate("/");
              });
          }}
        >
          Login
        </button>
      </form>
      <pre>
        don't have account ? <Link to="/register">SIGNUP</Link>
      </pre>
      {isLoading && "loging in"}
      {token && token}
      {data && localStorage.setItem("authToken", data.token)}
      {error && error.message}
    </div>
  );
}
