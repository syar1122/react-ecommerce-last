import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { usePostRegisterMutation } from "../../services/app.api";
import "./register.css";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswor] = useState("");

  let [register] = usePostRegisterMutation();
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };
    register(userObj)
      .unwrap()
      .then((data) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <form
        className="col s12"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="row">
          <div className="input-field col s6">
            <input
              id="first_name"
              type="text"
              className="validate"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label forhtml="first_name">First Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="last_name"
              type="text"
              className="validate"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <label forhtml="last_name">Last Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              value={email}
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
              id="password"
              type="password"
              className="validate"
              value={password}
              onChange={(e) => {
                setPasswor(e.target.value);
              }}
            />
            <label forhtml="password">Password</label>
          </div>
        </div>
        <button type="submit" className="waves-effect waves-light btn">
          SIGNUP
        </button>
        <pre>
          Already have account? <Link to="/login">LOGIN</Link>
        </pre>
      </form>
    </div>
  );
}
