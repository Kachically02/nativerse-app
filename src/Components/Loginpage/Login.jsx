import React, { useState } from "react";
import Loginimg from "../../Assets/loginimg.svg";
import "./Login.css";
import Navigation from "../Navigation/Navigation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../api";
import useAuth from "../Hook/useAuth";

function Login() {

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // });
  // const navigate = useNavigate()
  // const [error, setError] = useState("");

  // const { setAuth } = useAuth();
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // };
  // async function onSubmitUser(e) {
  //   e.preventDefault();
  //   const userDetails = {
  //     email: values.email,
  //     password: values.password,
  //   };

  //   try {
  //     const response = await axios.post(
  //       `${baseURL}/login`,
  //       JSON.stringify(userDetails),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: false,
  //       }
  //     );
  //     const accessToken = response;
  //     const user = response?.data;
  //     setAuth( {accessToken, user} );
  //     navigate("/welcome");
  //     // setError(response);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Login failed:", error.response?.data || error.message);
  //     setError("Login failed. Please check your credentials.");
  //   }
  // }
  return (
    <div>
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
          
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="details"
            name="password"
          />
          <div className="actions">
            <div>
              <input type="checkbox" />
              Remember me{" "}
            </div>{" "}
            <a href="#">Forgot Password?</a>
          </div>
        </div>
    
      <Link to="/welcome"><button className="loginpage-button" >Login</button></Link>
      
        <Link to="/signup">
          <button className="signuppage-button" type="submit">
            SignUp
          </button>
        </Link>
      </div>
      <p className="footer-txt"> &copy; 2024 Mativerse. All rights Reserved</p>
    </div>
  );
}

export default Login;
