import React, { useState } from "react";
import Signupimg from "../../Assets/signupimg.svg";
import "./Signup.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

import { baseURL } from "../api";
import axios from "axios"

 function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError]= useState("")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  async function onSubmitUser (e)  {
    e.preventDefault();
    const userDetails = {
      name: values.name,
      email: values.email,
      password: values.password
    }
  
  try {
    const response = await axios.post(`${baseURL}/register`, userDetails)
    setError(response.data.message)
    console.log(response)
  } catch (error) {
    console.log(error)
    setError(error.response.data.message)
  }}
  return (
    <div>
      <Navigation />
      <div className="Signup">
      <p>{error}</p>
        <div>
          <img src={Signupimg} alt="" />
        </div>
        <div className="form">
          <input
            type="Name"
            placeholder="Enter Name"
            className="details"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
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
        </div>

        <Link to="/signup"><button className="acc-button" onClick={ onSubmitUser}>Create Account</button></Link>
      </div>
      <p className="footer-txt"> &copy; 2024 Nativerse. All rights Reserved</p>
    </div>
  );
}

export default Signup;
