import React from "react";
import Button from "react-bootstrap/Button";
import Cryokinesis_logo from "../Images/Cryokinesis_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    const form = event.target;
  
    // Validate the form and show messages if invalid
    if (!form.reportValidity()) {
      return; // Stop further processing if the form is invalid
    }
  
    // Form is valid, proceed with success logic
    console.log("Form is valid! Proceeding...");
  };

  const handleSignUp = () => {
    navigate("/signup"); // Navigate to the signup route
  };
  

  return (
    <div className="container-fluid m-0 p-0">
      <div className="container-fluid bg-primary">
        <div className="row">
          <div className="col-12 p-2">
            <span>
              <img
                src={Cryokinesis_logo}
                alt="Cryokinesis_logo"
                className="img-fluid bg-white border rounded-2 p-2"
                style={{ width: "5%" }}
              />
              <span className="mt-3">
                <span className="fs-2 text-white ms-3 ">
                  Employee Login Portal
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {/* Left Section */}
          <div
            className="col-6 pt-5 pb-5 animated-left-section"
            style={{
              borderRadius: "0px 0px 85% 0px",
              backgroundColor: "#0004ff91",
              height: "87vh",
            }}
          >
            <div className="mt-5 pt-3">
              <h1 className="text-white mt-5 text-center animated-text">New Here ?</h1>
              <p className="text-white mt-3 text-center fw-thin animated-text">
                Please register by clicking the sign-up button
              </p>
              <div className="text-center">
                <Button
                  className="border-2 border-white text-white rounded-5 ps-5 pe-5 pt-2 pb-2 mt-3 fs-6 animated-button"
                  style={{ backgroundColor: "#FFFFFF00" }}
                  onClick={handleSignUp} 
                >
                  SIGN UP
                </Button>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="col-5 mt-5 animated-sign-in">
            <div className="mt-5 text-center border border-white">
              <form onSubmit={handleSubmit}>
                <p className="fs-2 fw-bold border border-white mt-5 pt-4">Sign in</p>
                {/* Email Input with User Icon */}
                <p className="input-with-icon">
                  <span className="position-relative">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="position-absolute top-50 start-10 translate-middle-y ms-3 text-secondary"
                    />
                    <input
                      type="email"
                      className="border rounded-5 bg-light p-2 ps-5 w-75"
                      placeholder="Email"
                      required
                    />
                  </span>
                </p>
                {/* Password Input with Lock Icon */}
                <p className="input-with-icon">
                  <span className="position-relative">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="position-absolute top-50 start-10 translate-middle-y ms-3 text-secondary"
                    />
                    <input
                      type="password"
                      className="border rounded-5 bg-light p-2 ps-5 w-75"
                      placeholder="Password"
                      required
                    />
                  </span>
                </p>
                <Button
                  type="submit"
                  className="login-button border-2 border-white text-white rounded-5 bg-primary ps-5 pe-5 pt-2 pb-2 mt-3 fs-6"
                >
                  LOGIN
                </Button>
                <p className="text-primary mt-1">
                  <a href="" style={{ textDecoration: "none" }}>
                    Forget Password?
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
