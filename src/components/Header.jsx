import React from "react";
import "../styles/Header.css";
import { ReactComponent as Asset1 } from "../Assests/Asset1.svg";
import { ReactComponent as Asset2 } from "../Assests/Asset2.svg";

const Header = () => {
  const movedown = ()=>{
    document.querySelector(".ftrmain").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});  }
  return (
    <>
      <header>
        <Asset1 id="asset1"/>
        <Asset2 id="asset2" />

        <div className="container">
          <p className="firstline">Hi, I'm Oluwatimileyin</p>
          <p className="skill">SOFTWARE <br /> DEVELOPER</p>
          <p className="lasttext">I like to craft solid and scalable frontend products with great user experiences.</p>
          <button className="contactme" onClick={movedown}>Contact Me</button>
        </div>
      </header>
    </>
  );
};

export default Header;
