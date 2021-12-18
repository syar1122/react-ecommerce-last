import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { usePostRegisterMutation } from "../../services/app.api";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import PreLoade from "../../components/preLoader/PreLoade";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let [register] = usePostRegisterMutation();
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let userObj = {
      username: username,
      email: email,
      password: password,
    };
    register(userObj)
      .unwrap()
      .then((data) => {
        setIsLoading(true);
        if (data) {
          setIsLoading(true);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error(err?.data?.message, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      });
  };
  return (
    <div className="container">
      <ToastContainer />
      <div className="wrapper">
        <Link to="/" className="brand-logo">
          Syar<span>D</span>ev
        </Link>
        <div className="signup-wrapper">
          <div className="signup-header">
            <h4>signup</h4>
          </div>
          <div className="signup-form">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              className="col s12"
            >
              <div className="row">
                <div className="input-field col s12">
                  <input
                    value={username}
                    id="username"
                    name="username"
                    type="text"
                    className="validate"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <label htmlFor="username">Username</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    value={email}
                    id="email"
                    name="email"
                    type="email"
                    className="validate"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    value={password}
                    id="password"
                    name="password"
                    type="password"
                    className="validate"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>
              <button
                className={isLoading ? "btn disabled" : "btn"}
                onClick={() => {}}
              >
                {isLoading ? <PreLoade /> : "Signup"}
              </button>
            </form>
          </div>
        </div>
        <p>
          Already have account? <Link to="/login">LOGIN</Link>
        </p>
      </div>
    </div>
  );
}
