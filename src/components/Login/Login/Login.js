import React from "react";
import { Link } from "react-router-dom";

import useFirebase from "../../../hooks/useFirebase";
import "./Login.css";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();
  return (
    <div className="p-5 login-form">
      <div className="">
        <h2 className="py-4">Login Here</h2>

        <form>
          <div className="form-group row">
            <label for="inputEmail3" className="me-4 col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="inputEmail3"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group row">
            <label
              for="inputPassword3"
              className="me-4 col-sm-2 col-form-label"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input mt-2"
                  type="checkbox"
                  id="gridCheck1"
                  required
                />
                <label className="form-check-label mt-1" for="gridCheck1">
                  Agree Terms and Conditions
                </label>
              </div>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </form>
        <p>
          Don't have account ? <Link to="/register">Create Account</Link>
        </p>

        <small>
          NB: Having some issue with email-password login but google sign-in is
          working{" "}
        </small>
        <div>-------or----------</div>
        <button className="btn btn-danger" onClick={signInUsingGoogle}>
          Google Sign In{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
