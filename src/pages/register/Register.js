import React, { useState } from "react";
import {
  useGetProductsQuery,
  usePostRegisterMutation,
} from "../../services/app.api";
import "./register.css";

export default function Register() {
  let [onRegister, isLoading] = usePostRegisterMutation();

  const [uiClass, setUiClass] = useState("");
  return (
    <div className="register-body">
      <div id="wrapper" className={uiClass}>
        <div className="register-btn" onClick={() => setUiClass("active")}>
          Register
        </div>

        <div className="register-form">
          <div className="close-button" onClick={() => setUiClass("")}>
            &#10008;
          </div>
          <div className="form-title">Create an account</div>
          <div className="form-row">
            <input type="email" id="email" />
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="form-row">
            <input type="text" id="username" />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-row">
            <input type="password" id="password" />
            <label htmlFor="password">Password</label>
          </div>
          <div className="form-row">
            <input type="text" id="contact" />
            <label htmlFor="contact">Contact Number</label>
          </div>
          <div
            className="form-button"
            onClick={() => {
              onRegister({
                firstname: "string",
                lastname: "string",
                email: "syar@test.com",
                password: "12345",
              })
                .unwrap()
                .then((fulfilled) => console.log(fulfilled))
                .catch((rejected) => console.error(rejected));
            }}
          >
            Sign Me Up
          </div>
        </div>
      </div>
    </div>
  );
}
