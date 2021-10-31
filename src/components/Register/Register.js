import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>please register</h2>

      <form>
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <input type="submit" value="register" />
      </form>

      <Link to="/login">Go to Login</Link>
    </div>
  );
};

export default Register;
