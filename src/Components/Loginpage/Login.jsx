import React, { useState } from "react";
import Loginimg from "../../Assets/loginimg.svg";
import "./Login.css";
import Navigation from "../Navigation/Navigation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import { baseURL } from "../api";
import useAuth from "../Hook/useAuth";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { setAuth } = useAuth();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  async function onSubmitUser(e) {
    e.preventDefault();
    const userDetails = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post(
        `${baseURL}/login`,
        JSON.stringify(userDetails),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );
      const accessToken = response;
      const user = response?.data;
      setAuth({ accessToken, user });
      if (user) {
        navigate("/app/welcome");
      } else {
        console.log("incorrect credentials");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast.error("Login failed. Please check your credentials.");
    }
  }
  return (
    <form onSubmit={onSubmitUser}>
      <Navigation />
      <div className="loginpage">
        <div>
          <img src={Loginimg} alt="" />
        </div>
        <div className="form">
          <input
            type="Email"
            placeholder="Enter your email address"
            className="details"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="details"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <div className="actions">
            <div>
              <input type="checkbox" />
              Remember me{" "}
            </div>{" "}
            <a href="#">Forgot Password?</a>
          </div>
        </div>

        <button type="submit" className="loginpage-button">
          Login
        </button>

        <Link to="/signup" className="signuppage-button">
            Sign up
        </Link>
      </div>
      <p className="footer-txt"> &copy; 2024 Mativerse. All rights Reserved</p>
    </form>
  );
}

export default Login;
