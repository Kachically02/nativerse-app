import React from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import "./yoruba.css"
import Navigation from '../Navigation/Navigation';
import { Link } from "react-router-dom";



function Yoruba() {
  return (
    <div>
    <Navigation/>
    <div className='yoruba-container'>
    <div className='yoruba-content'>
    <Link to="/app/welcome"><MdArrowBackIosNew className='back-icon'/></Link>
    <h2> Yoruba Language </h2>
    </div>
    </div>
    <Link to="/app/learnyoruba">
    <div class="card" >
    <div class="card-header">
    Lesson 1
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p >Introduction</p>
      </blockquote>
    </div>
  </div>
  </Link>
 <Link>
  <div class="card" >
  <div class="card-header">
  Lesson 1
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p >Introduction</p>
    </blockquote>
  </div>
</div>
</Link>
<Link>
<div class="card" >
<div class="card-header">
Lesson 1
</div>
<div class="card-body">
  <blockquote class="blockquote mb-0">
    <p >Introduction</p>
  </blockquote>
</div>
</div>
</Link>
<Link>
<div class="card" >
<div class="card-header">
Lesson 1
</div>
<div class="card-body">
  <blockquote class="blockquote mb-0">
    <p >Introduction</p>
  </blockquote>
</div>
</div>
</Link>
<Link>
<div class="card" >
<div class="card-header">
Lesson 1
</div>
<div class="card-body">
  <blockquote class="blockquote mb-0">
    <p >Introduction</p>
  </blockquote>
</div>
</div>
</Link>
<Link>
<div class="card" >
<div class="card-header">
Lesson 1
</div>
<div class="card-body">
  <blockquote class="blockquote mb-0">
    <p >Introduction</p>
  </blockquote>
</div>
</div>
</Link>
<Link>
<div class="card" >
<div class="card-header">
Lesson 1
</div>
<div class="card-body">
  <blockquote class="blockquote mb-0">
    <p >Introduction</p>
  </blockquote>
</div>
</div>
</Link>
<Link>
<div class="card" >
<div class="card-header">
Lesson 1
</div>
<div class="card-body">
  <blockquote class="blockquote mb-0">
    <p >Introduction</p>
  </blockquote>
</div>
</div>
</Link>
<Link>
<div class="card" >
<div class="card-header">
Lesson 1
</div>
<div class="card-body">
  <blockquote class="blockquote mb-0">
    <p >Introduction</p>
  </blockquote>
</div>
</div>
</Link>
<Link>
<div class="card" >
<div class="card-header">
Lesson 1
</div>
<div class="card-body">
  <blockquote class="blockquote mb-0">
    <p >Introduction</p>
  </blockquote>
</div>
</div>
</Link>
    <p className="footer-txt"> &copy; 2024 Mativerse. All rights Reserved</p>
    </div>
    
  )
}

export default Yoruba