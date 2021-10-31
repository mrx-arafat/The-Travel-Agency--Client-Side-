import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>please login </h1>
      <button> Google Login</button>
      <Link to="/register">new user?</Link>
    </div>
  );
};

export default Login;
