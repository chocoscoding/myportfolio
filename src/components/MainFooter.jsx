import React from "react";
import "../styles/MainFooter.css";
import { FaLinkedinIn} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { BsGithub} from 'react-icons/bs';

const MainFooter = () => {
  return (
    <div className="ftrmain">
      <div className="firstftr">
        <h3>Contact me</h3>
        <p>
          Do you have a project in mind, or you have a role that I best fit, you
          can reach out to me via the following channels:
        </p>

        <div className="linktoCont">
          <button className="linkto"> <a href="https://www.linkedin.com/in/oyetitimileyin/"><FaLinkedinIn className="icon"/>LinkedIn </a></button>
          <button className="linkto"> <a href="mailto:chocoscoding@gmail.com"><MdEmail className="icon"/>chocoscoding@gmail.com </a></button>
          <button className="linkto"> <a href="https://github.com/chocoscoding"><BsGithub className="icon"/>Github </a></button>
        </div>
      </div>

      <div className="secondftr">
          <p>Designed with ❤ by Oluwafemi.</p>
          <div className="subinfo">
              <p><span>tw</span></p>
              <p><span>gh</span></p>
              <p><span>ln</span></p>
              <p className="me">© Oluwatimileyin 2022</p>
          </div>
      </div>
    </div>
  );
};

export default MainFooter;
