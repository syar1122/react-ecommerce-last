import React, { useState } from "react";
import { useLoginMutation } from "../../services/app.api";
import "./login.css";

export default function Login() {
  let [login, { isLoading, data, error }] = useLoginMutation();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const token = localStorage.getItem("authToken");

  return (
    <div className="container" style={{ height: "100vh" }}>
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
            <label forHtml="email">Email</label>
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
            <label forHtml="password">Password</label>
          </div>
        </div>
        <button
          className="waves-effect waves-light btn"
          onClick={() => {
            login({
              email: email,
              password: password,
            });
          }}
        >
          Login
        </button>
      </form>
      {isLoading && "loging in"}
      {token && token}
      {data && localStorage.setItem("authToken", data.token)}
      {error && error.message}
    </div>
  );
}
