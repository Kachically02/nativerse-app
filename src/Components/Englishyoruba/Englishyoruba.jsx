import React from 'react'
import Navigation from '../Navigation/Navigation'
import { MdArrowBackIosNew } from "react-icons/md";
import Learnimg from '../../Assets/learnimg.svg';
import { Link } from "react-router-dom";

function Englishyoruba() {
  return (
    <div>
    <Navigation/>
    <div className='yoruba-container'>
    <div className='yoruba-content'>
    <Link to="/app/learnyoruba"><MdArrowBackIosNew className='back-icon'/></Link>
    <h2> Lesson 1 </h2>
    </div>
    </div>
    <h4 className='learn-h4'>Introduction (Ifihan)</h4>
    <div className='main-body'>
    <img src={Learnimg} alt=''/>
    </div>
    <div className='main-text'><p>My name is John.<br/>
    I live in Canada.<br/>
    I speak English.<br/>
    I am a teacher.<br/>
    I love teaching.<br/>
    </p></div>
    <div className='btn-box'>
    <Link to="/app/learnyoruba"><button className='R-btn'>Go Back</button></Link>
    <button className='T-btn'>Take a Test</button>
    </div>
    <p className="footer-txt"> &copy; 2024 Mativerse. All rights Reserved</p>
    
    </div>
  )
}

export default Englishyoruba