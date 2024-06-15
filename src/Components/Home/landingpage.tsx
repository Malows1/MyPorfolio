/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import "../Styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin ,} from "@fortawesome/free-brands-svg-icons";

import Profile from "../Images/me.jpeg";
/* Certification*/
import jobstreet from "../Images/jobstreet.png";
import CLEP from "../Images/CLEP.png";
import dbfundation from "../Images/dbfundation.png";
import dbsystem from "../Images/dbsystem.png";
import DSDAP from "../Images/DSDAP.png";
import intern from "../Images/intern.png";
import netfund from "../Images/netfund.png";
/* Project*/
import login from "../Images/login.png"
function MyPortfolio() {

  const typedRef = useRef(null);
useEffect(()=>{
  document.title = "Lian's Porfolio";
})
  useEffect(() => {
  
    const options = {
      strings: ["Mark Lian Perez", "Front-End Developer", "Web Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    };


    const typed = new Typed(typedRef.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    // Enhanced scroll behavior for anchor links
    const handleAnchorClick = (event) => {
      const targetId = event.currentTarget.getAttribute("href").slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        event.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick)
      );
    };
  }, []);
 
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleShowPopUp = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsPopUpVisible(true);
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
    setCurrentImage(null);
  };
  return (
    
    <div className="Body">
     
      <section>
        <img src={Profile} alt="My portfolio" className="PortfolioImage" />
        <nav className="desktop-link">
          <div className="LianDev"> LIAN● </div>
          <ul className="navitem">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#Certi">Certifications</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="myintro">
          <span className="position">Hello</span>
          <h1>
            I'm <span className="multitext" ref={typedRef}></span>
          </h1>
          <p className="introduction">
            a passionate front-end developer
            <br />
            with a Bachelor's in Information Technology.
          </p>
          <div className="SocialLinks">
            <a
              href="https://www.linkedin.com/in/mark-lian-perez-2278032ab/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="Logo" />
            </a>
            <a
              href="https://github.com/Malows1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="Logo" />
            </a>
            <a
              href="https://www.jobstreet.com.ph/profile/marklian-perez-DCkrxM6MB4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={jobstreet}
                alt="Jobstreet Profile"
                className="Logo jobstreet"
              />
            </a>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="section">
        <div className="container">
          <div className="row">
            <div className="col1">
              <img
                src={Profile}
                alt="My portfolio"
                className="aboutmeprofile"
              />
            </div>
            <div className="col2">
              <h1 className="title">About Me</h1>
              <p>
                During my 4-month internship at Zhiyuan Enterprise Group, I
                developed a strong background in React Native, HTML,
                <br />
                CSS, ReactJS, and TypeScript through my academic projects. I was
                responsible for designing and implementing web
                <br />
                and Android interfaces, optimizing designs, and collaborating
                with UX/UI teams. One of my proudest achievements
                <br />
                was our capstone project, which was successfully completed and
                earned a passing grade. I’m excited about this
                <br />
                opportunity because I believe my skills and experience align
                well with the team's needs. I look forward to <br />
                learning more about the company and how I can contribute to its
                success.
              </p>
              <div className="tabs">
                <p className="links active">Skills</p>
               
              </div>

              <section className="skillsection">
              <div className="container-skill"  id= 'skills'>
                
                <h1 className="heading"> Technical Skills</h1>
                <div className="hard-bar">
                  <div className="bar">
                    <i style={{ color: '#c95d2e' }} className='bx bxl-html5' ></i>
                    <div className="info">
                      <span >HTML</span>
                    </div>
                    <div className="progressline html">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                    <i style={{ color: '#147bbc' }} className='bx bxl-css3' ></i>
                    <div className="info">
                      <span >CSS</span>
                    </div>
                    <div className="progressline css">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                  <i style={{ color: '#b0bc1e' }} className='bx bxl-javascript' ></i>
                    <div className="info">
                      <span>Javascript</span>
                    </div>
                    <div className="progressline js">
                      <span></span>
                    </div>
                  </div>
                  <div className="bar">
                  <i style={{ color: '#69bcbc' }} className='bx bxl-react' ></i>
                    <div className="info">
                      <span>React</span>
                    </div>
                    <div className="progressline react">
                      <span></span>
                    </div>
                    <div className="bar">
                    <i style={{ color: '#37A8F6' }} className='bx bxl-typescript'></i>
                    <div className="info">
                      <span>TypeScript</span>
                    </div>
                    <div className="progressline ts">
                      <span></span>
                    </div>
                  </div>
               
                  <div className="bar">
                  <i style={{ color: '#00000' }} className='bx bxl-java'></i>
                    <div className="info">
                      <span>Java</span>
                    </div>
                    <div className="progressline jav">
                      <span></span>
                    </div>
                  </div>
                  </div>
                </div>
              
              </div>
              <div className="container-soft">
                  <h1 className="heading">Professional Skill</h1>
                  <div className="radials">
                  <div className="radial">
                    <svg x = "0px" y = "0px" viewBox="0 0 200 200" className="svgradial">
                      <circle className="progress-bar"cx = "100" cy = "100" r ="80"></circle>
                      <circle className="path path-create"cx = "100" cy = "100" r ="80"></circle>
                    </svg>
                    <div className="percentage">90%</div>
                    <div className="text">Creativity</div>
                  </div>
                  <div className="radial">
                    <svg x = "0px" y = "0px" viewBox="0 0 200 200" className="svgradial">
                      <circle className="progress-bar"cx = "100" cy = "100" r ="80"></circle>
                      <circle className="path path-commu"cx = "100" cy = "100" r ="80"></circle>
                    </svg>
                    <div className="percentage">70%</div>
                    <div className="text">Communication</div>
                  </div>
                  <div className="radial">
                    <svg x = "0px" y = "0px" viewBox="0 0 200 200" className="svgradial">
                      <circle className="progress-bar"cx = "100" cy = "100" r ="80"></circle>
                      <circle className="path  path-team"cx = "100" cy = "100" r ="80"></circle>
                    </svg>
                    <div className="percentage">80%</div>
                    <div className="text">TeamWork</div>
                  </div>
                  <div className="radial">
                    <svg x = "0px" y = "0px" viewBox="0 0 200 200" className="svgradial">
                      <circle className="progress-bar"cx = "100" cy = "100" r ="80"></circle>
                      <circle className="path path-probsolve"cx = "100" cy = "100" r ="80"></circle>
                    </svg>
                    <div className="percentage">80%</div>
                    <div className="text">Problem Solving</div>
                  </div>
                  </div>
                </div>
              </section>
       
            </div>
          </div>
        </div>
      </section>

      <section id="Certi" className="section">
        <div className="certi">Certifications</div>
       <div id = "card-area">
     
        <div className="wrapper">
          
          <div className="box-area">
            <div className="box">
            <img src={CLEP} alt="My portfolio" className="" />
            <div className="overlay">
             
              <h3 className="card-title">CLEP Certification</h3>
             
           
              <a href = "#CLEP"  onClick={(e) => { handleShowPopUp(CLEP); }}className="card-btn">View Certification</a>
              
            </div>
       
            </div>
      
            <div className="box">
            <img src={dbfundation} alt="My portfolio" className="" />
            <div className="overlay">
                <h3 className="card-title">Database Fundation</h3>
              
              <a href = "#Database Fundation"    onClick={(e) => { handleShowPopUp(dbfundation); }} className="card-btn"> View Certification</a>
            </div>
            </div>
            <div className="box">
            <img src={dbsystem} alt="My portfolio" className="" />
            <div className="overlay">
                <h3 className="card-title">Database System</h3>
              <a href = "#Database System" onClick={(e) => {  handleShowPopUp(dbsystem); }}   className="card-btn"> View Certification</a>
            </div>
            </div>
            <div className="box">
            <img src={DSDAP} alt="My portfolio" className="" />
            <div className="overlay">
                <h3 className="card-title">DSDAP Certification</h3>
              <a href = "#DSDAP" onClick={(e) => {  handleShowPopUp(DSDAP); }}  className="card-btn"> View Certification</a>
            </div>
            </div>
            <div className="box">
            <img src={intern} alt="My portfolio" className="" />
            <div className="overlay">
                <h3 className="card-title">Internship Completion</h3>
              <a href = "#Intern" onClick={(e) => {  handleShowPopUp(intern); }}  className="card-btn"> View Certification</a>
            </div>
            </div>
            <div className="box">
            <img src={netfund} alt="My portfolio" className="netfund" />
            <div className="overlay">
                <h3 className="card-title">Networking Fundation</h3>
              <a href = "#Network" onClick={(e) => {  handleShowPopUp(netfund); }} className="card-btn NETFUND"> View Certification</a>
            </div>
            </div>
    
   
          </div>
          {isPopUpVisible && currentImage && (
        <div className="popup" onClick={handleClosePopUp}>
          <img src={currentImage} alt="Full View" className="popup-image" />
        </div>
      )}
        </div>
    
       </div>
       
      </section>

      <section id="Projects" className="section">
      <div className="Proj">My Projects</div>
       <div id = "card-area">
     
        <div className="wrapper">
          
          <div className="box-area-project">
            <div className="box-project">
            <img src={login} alt="My portfolio" className="" />
            <div className="overlay-Project">
             
              <h3 className="card-title">Capstone Project HRIS</h3>
             <p className="subtitle">This project aims to provide the grocery store with an employee management system that enables employees to track their contributions, 
              view their salaries, manage their attendance, and access many additional features. Click below to learn more. </p>
           
              <a href = "#Login"  onClick={(e) => { handleShowPopUp(login);  }}className="card-btn">View Project</a>
              
            </div>
       
            </div>
      
            <div className="box-project">
            <img src={dbfundation} alt="My portfolio" className="" />
            <div className="overlay-Project">
                <h3 className="card-title">Database Fundation</h3>
              
              <a href = "#Database Fundation"    onClick={(e) => { handleShowPopUp(dbfundation); }} className="card-btn"> View Certification</a>
            </div>
            </div>
            <div className="box-project">
            <img src={dbsystem} alt="My portfolio" className="" />
            <div className="overlay-Project">
                <h3 className="card-title">Database System</h3>
              <a href = "#Database System" onClick={(e) => {  handleShowPopUp(dbsystem); }}   className="card-btn"> View Certification</a>
            </div>
            </div>
         
    
   
          </div>
          {isPopUpVisible && currentImage && (
        <div className="popup" onClick={handleClosePopUp}>
          <img src={currentImage} alt="Full View" className="popup-image" />
        </div>
      )}
        </div>
    
       </div>
       
      </section>

      <section id="contact" className="section">
        <p>Contact Content Here</p>
      </section>
    </div>
  );
}

export default MyPortfolio;
