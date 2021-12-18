import React from "react";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";

export default function UserDropdown() {
  const { isAuth, authToken } = useSelector((state) => state.user);
  console.log(isAuth, authToken);
  let userObj;
  if (authToken) {
    userObj = jwt_decode(authToken);
  }
  console.log(userObj);

  return <>{userObj?.username}</>;
}
