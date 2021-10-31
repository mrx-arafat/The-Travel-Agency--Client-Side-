import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { registerWithEmailAndPassword } = useAuth();
  return (
    <div className="login-form">
      <div className="py-5">
        <h2>Create Account</h2>
        <form onSubmit="">
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Your Password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div>----------or-------------</div>
        <button className="btn-danger">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
