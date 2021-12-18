import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import PreLoade from "../../components/preLoader/PreLoade";
import { login } from "../../features/userSlice";
import { useLoginMutation } from "../../services/app.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./login.css";

export default function Login() {
  let [loginF, { data, error }] = useLoginMutation();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const token = localStorage.getItem("authToken");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="container">
      <ToastContainer></ToastContainer>
      <div className="wrapper">
        <Link to="/" className="brand-logo">
          Syar<span>D</span>ev
        </Link>
        <div className="login-wrapper">
          <div className="login-header">
            <h4>Login</h4>
          </div>
          <div className="login-form">
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
                onClick={() => {
                  loginF({
                    email: email,
                    password: password,
                  })
                    .unwrap()
                    .then((data) => {
                      setIsLoading(true);
                      console.log("login global state", data);
                      if (data) {
                        setIsLoading(false);
                      }
                      dispatch(login(data.token));
                      navigate("/");
                    })
                    .catch((err) => {
                      if (err) {
                        console.log(err);
                        toast.error(err?.data?.message, {
                          position: toast.POSITION.BOTTOM_LEFT,
                        });
                      }
                    });
                }}
              >
                {isLoading ? <PreLoade /> : "Login"}
              </button>
            </form>
          </div>
        </div>
        <p>
          Don't have account ? <Link to="/register">SIGNUP</Link>
        </p>
        {isLoading && "loging in"}
        {token && token}
        {data && localStorage.setItem("authToken", data.token)}
        {error && error.message}
      </div>
    </div>
  );
}
