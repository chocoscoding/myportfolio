import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import "../styles/navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { ReactComponent as Logo } from "../Assests/logo.svg";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Navbar = ({ scrollto }) => {
  let location = useLocation();
  const [hamburger, setHamburger] = useState(false);
  const addlight = useCallback(() => {
    const n1 = document.querySelector("#home"),
      n2 = document.querySelector("#about"),
      n3 = document.querySelector("#allprojects"),
      n4 = document.querySelector("#contactme");
    function clearall() {
      let arr = [n1, n2, n3, n4];
      arr.forEach((element) => {
        element.className = "line";
      });
    }

    switch (location.pathname) {
      case "/":
        clearall();
        n1.className = "line lineActive";
        break;
      case "/allprojects":
        clearall();
        n3.className = "line lineActive";
        break;
      // case '/about':
      //     console.log(location.pathname);
      //     break;
      // case '/contactme':
      //     console.log(location.pathname);
      //     break;

      default:
        clearall();
        break;
    }
  }, [location]);

  const intersect = useCallback(() => {
    const ftr = document.querySelector(".ftrmain");
    const abt = document.querySelector(".about-body");

    const sectionOneOptions = {};
    const sectionOneObserver = new IntersectionObserver(function (
      entries,
      sectionOneObserver
    ) {
      entries.forEach((entry) => {
          const currentTarget = entry.target.className;
          if (currentTarget === 'ftrmain') {
              let isInterSectiing = entry.isIntersecting;
              if (isInterSectiing) {
            document.querySelectorAll(".line").forEach((element) => {
              element.className = "line";
            });

            document.querySelector("#contactme").className = "line lineActive";
          } else {
            addlight();
          }
        } else{
            let isInterSectiing = entry.isIntersecting;
            if (isInterSectiing) {
                document.querySelectorAll(".line").forEach((element) => {
                  element.className = "line";
                });
      
                document.querySelector("#about").className = "line lineActive";
              } else {
                addlight();
              }
        }
      });
    },
    sectionOneOptions);
     if(location.pathname === '/'){
        sectionOneObserver.observe(abt);
        sectionOneObserver.observe(ftr);
    }
  }, [addlight, location.pathname]);

  useEffect(() => {
    addlight();
    intersect();
  }, [addlight, intersect]);

  return (
    <div className="navcont">
      <nav>
        <p className="logo">
          
          <Logo />
        </p>
        <ul className={`${hamburger ? "navs" : "navs navclose"}`}>
          <li>
            <Link to={`/`}>
              Home <div id="home" className="line lineActive"></div>
            </Link>
          </li>

          <li onClick={() => {
              scrollto("about");
            }}>
            About <div id="about" className="line"></div>
          </li>
          <li>
            
            <Link to={`/allprojects`}>
              
              Projects <div id="allprojects" className="line"></div>
            </Link>
          </li>
          <li
            onClick={() => {
              scrollto("contactme");
            }}
          >
            
            Contact Me <div id="contactme" className="line"></div>
          </li>
        </ul>
        <div
          className="iconcont"
          onClick={() => {
            setHamburger(!hamburger);
          }}
        >
          {hamburger ? (
            <AiOutlineClose id="icon" />
          ) : (
            <GiHamburgerMenu id="icon" />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
