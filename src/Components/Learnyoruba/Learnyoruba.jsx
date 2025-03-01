import React from 'react'
import Navigation from '../Navigation/Navigation'
import { MdArrowBackIosNew } from "react-icons/md";
import Learnimg from '../../Assets/learnimg.svg';
import './learnyoruba.css'
import { Link } from "react-router-dom";

function Learnyoruba() {
  return (
    <div>
    <Navigation/>
    <div className='yoruba-container'>
    <div className='yoruba-content'>
   <Link to="/app/yoruba"><MdArrowBackIosNew className='back-icon'/></Link> 
    <h2> Lesson 1 </h2>
    </div>
    </div>
    <h4 className='learn-h4'>Ifihan (Introduction)</h4>
    <div className='main-body'>
    <img src={Learnimg} alt=''/>
    </div>
    <div className='main-text'><p>Oruko mi ni John.<br/>
    Mo n gbe ni ilu Canada.<br/>
    Mo n so ede Geesi.<br/>
    Oluko ni mi.<br/>
    Mo feran ikoni.<br/>
    </p></div>
    <div className='btn-box'>
    <Link to="/app/englishyoruba"><button className='R-btn'>Read in English</button></Link>
    <button className='T-btn'>Take a Test</button>
    </div>
    <p className="footer-txt"> &copy; 2024 Mativerse. All rights Reserved</p>
    </div>
  )
}

export default Learnyoruba