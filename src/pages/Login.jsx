import React from "react";
import { Nav } from "../components/Nav/Nav";
import { Login as LoginComponent } from "../components/login/Login";

export const Login = () => {
  return (
    <div>
      <Nav />
      <LoginComponent />
    </div>
  );
};
