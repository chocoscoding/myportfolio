import React from "react";
import "../styles/About.css"
import {FaGithub, FaLinkedin} from 'react-icons/fa'
const About = () => {
    return (
        <div className="about-body">
            <div className="container">

            <p className="headingM"> {'// About me '}</p>
            <p className="main-text">I am a software developer skilled in both frontend and backend who loves creating apps that are not only very functional but also offer a great user experience. I am very keen on learning new skills in order to become a better problem solving and creative developer. </p>
            <div className="links-cont">
                <a href="https://www.linkedin.com/in/oyetitimileyin/" target="_blank" rel="nopener noreferrer"><button className="links">Linkedin <FaLinkedin className="icons"/></button></a>
                <a href="https://github.com/chocoscoding" target="_blank" rel="nopener noreferrer"><button className="links">Github <FaGithub className="icons"/></button></a>
            </div>
            </div>

        </div>
    )
}

export default About
