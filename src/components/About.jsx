import React from "react";
import "../styles/About.css"
import {FaGithub, FaLinkedin} from 'react-icons/fa'
const About = () => {
    return (
        <div className="about-body">
            <div className="container">

            <p className="headingM"> {'// About me '}</p>
            <p className="main-text">Hello, I'm Oluwatimileyin, Frontend Engineer from Lagos, Nigeria. I have experience developing scalable, high-performance web applications. I am highly qualified in UI engineering and performance optimization. I love creating apps that are not only functional but also offer a great user experience.</p>
            <div className="links-cont">
                <button className="links">Linkedin <FaLinkedin className="icons"/></button>
                <button className="links">Github <FaGithub className="icons"/></button>
            </div>
            </div>

        </div>
    )
}

export default About
