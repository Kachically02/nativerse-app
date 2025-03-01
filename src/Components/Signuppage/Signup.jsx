import React, { useState } from "react";
import Signupimg from "../../Assets/signupimg.svg";
import "./Signup.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

import { baseURL } from "../api";
import axios from "axios";
import useAuth from "../Hook/useAuth";
import { toast } from 'react-toastify';

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { setAuth } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  async function onSubmitUser(e) {
    e.preventDefault();
    const userDetails = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      const { data } = await axios.post(`${baseURL}/register`, userDetails);
      setAuth(data);

    } catch (error) {
      console.log(error);
      toast.error(error.response.data?.message ?? 'Error occured during signup');
    }
  }
  return (
    <div>
      <Navigation />
      <div className="Signup">
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

        <Link to="/signup">
          <button className="acc-button" onClick={onSubmitUser}>
            Create Account
          </button>
        </Link>
      </div>
      <p className="footer-txt"> &copy; 2024 Nativerse. All rights Reserved</p>
    </div>
  );
}

export default Signup;
