import React from 'react'
import Welcomeim from '../../Assets/welcome.svg';
import Navigation from '../Navigation/Navigation';
import './welcome.css'
import Profile from '../../Assets/profile.jpg';
import Logo from "../../Assets/Logo.svg";
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div>
    <Navigation/>
    <div>
    <div className='welcome-section'>
    <h2>WELCOME TO NATIVERSE PRECIOUS</h2>
    <img src={Profile} alt=''/>
    </div>
    <div className='nativerse-logo'>
    <img src={Logo} alt='image'/>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-6 col-lg-3'>
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Learn Hausa</h5>
      <a href="#" class="btn btn-success">Click To Start</a>
    </div>
  </div>
    </div>
    <Link to="/yoruba">
    <div className='col-sm-6 col-lg-3'>
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Learn Yoruba</h5>
      <a href="#" class="btn btn-success">Click To Start</a>
    </div>
  </div>
    </div>
    </Link>
    <div className='col-sm-6 col-lg-3'>
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Learn Igbo</h5>
      <a href="#" class="btn btn-success">Click To Start</a>
    </div>
  </div>
    </div>
    <div className='col-sm-6 col-lg-3'>
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Learn Tiv</h5>
      <a href="#" class="btn btn-success">Click To Start</a>
    </div>
  </div>
    </div>

    </div>
    </div>
    <div className='btn-box'>
    <button className='learn-btn'> Start</button>
    </div>
    <p className="footer-txt"> &copy; 2024 Nativerse. All rights Reserved</p>
    </div>
  )
}

export default Welcome