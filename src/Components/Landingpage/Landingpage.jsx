import React from "react";
import Logo from "../../Assets/Logo.svg";
import "./Landingpage.css";
import Africamap from "../../Assets/Africamap.svg";
import Image1 from "../../Assets/Image1.svg";
import Facebook from "../../Assets/Facebookicon.svg";
import Instagram from "../../Assets/Insticon.svg";
import Linkedin from "../../Assets/Linkedinicon.svg";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div>
      <Navigation/>
      <div className="Header-section">
        <div className="container-section ">
          <div className="row Desc">
            <h3>
              Experience the Magic of <br /> our Local Language
            </h3>
            <p>
              Learn local languages easily with our fun and interactive <br />{" "}
              platform. Connect with your roots, explore new cultures, and
              <br /> interact with others as you enjoy the magc of speaking a
              local <br /> dialet
            </p>
            <div className="buttons">
              <Link to="/login"><button className="log">Login</button></Link>
             <Link to="/signup"><button className="sign">Signup</button></Link> 
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Desc-text">
          <h3>
            Explore Over <span>100 </span>Languages
          </h3>
          <p>
            Discover and learn over from our over 200 languages with easy
            lessons and a <br />
            platform built for connection and interaction{" "}
          </p>
        </div>
        <div className="container">
          <div className="row CAT">
            <div className="col-sm-12 col-lg-6">
              <div className="text">
                <h4>Learn Speak Connect</h4>
                <p>
                  Learn your native language with Nativerse, a<br/> fun,
                  interactive, culturally immersive language <br/> learning
                  experience.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="map">
                <img src={Africamap} alt="Africa map" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Aboutus">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <h3>About us</h3>
            </div>
            <div className="col-sm-12 col-lg-6">
              <p>
                Nativerse was founded in 2020 with a mission to preserve and
                promote local languages, ensuring their survival for future
                generations. We believe that language is a vital part of
                cultural identity, and its loss can have a profound impact on
                communities. Our team is dedicated to creating innovative
                language learning solutions that make it easy and accessible for
                people to learn, speak, and appreciate their local languages.{" "}
                <span>....Read More</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row Inquiry">
          <div className="col-sm-12 col-lg-6">
            <div className="text">
              <h4>Have Questions</h4>
              <h4>
                <span>We’ve got answers</span>
              </h4>
              <p>
                Struggling with your language learning goals? We’re <br/>here to
                guide and support you every step of the way
              </p>
              <div className="Inq-buttons">
                <button className="contact-button">Contact us</button>
                <button className="FAQ-button">Read FAQs</button>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="map">
              <img src={Image1} alt="Image" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <div className="app-icon">
                <img src={Logo} alt="" className="footer-icon"/>
                <h4>Nativia</h4>
              </div>
              <p>
                Our platform helps you master native languages through
                interactive lessons, activities, and progress tracking. Whether
                reconnecting with your roots or learning something new, we’re
                here to support your journey.”
              </p>
            </div>
            <div className="col-sm-12 col-lg-4 Quicklink">
              <span>Quik Links</span>
              <ul>
                <li>Home</li>
                <li>Chat</li>
                <li>Learn</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-4">
              <h4>Subscribe For Notifications on Updates </h4>
              <p>
                Stay in the Know! Sign up for our newsletter for exclusive
                deals, travel inspiration, and insider tips – all delivered
                straight to your inbox!"
              </p>
              <div className="subscribe">
              <input type="text" placeholder="Enter your text"/><button className="sub-button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="socials">
          <h5>Follow Us:</h5>
          <div className="icons">
          <img src={Facebook} alt="" className="icon1"/>
          <img src={Instagram} alt="" className="icon1"/>
          <img src={Linkedin} alt="" className="icon1"/>
          </div>
          </div>

        </div>
        <p className="footer-txt"> &copy; 2024 Nativerse. All rights Reserved</p>
      </div>
    </div>
  );
}

export default Landingpage;
