import React from 'react';
import { useState } from 'react';
import '../styles/navbar.css';
import {AiOutlineClose} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import { ReactComponent as Logo} from '../Assests/logo.svg' 
const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    // function addlight(){
    //     const elements = document.querySelectorAll('li');
    //     const url = 'home';
    //     elements.forEach((element) =>{
    //         const final = element.textContent.toLowerCase().replace(/\s/g, "");
    //         console.log(final);
    //     })
    //     console.log(elements);

    // }
    return (
        <div className="navcont">

        <nav>
            <p className="logo"> <Logo/> </p>
            <ul className={`${hamburger? 'navs' : 'navs navclose'}`}>
                <li>Home <div className="line lineActive"></div> </li>
                <li>About <div className="line"></div> </li>
                <li>Projects <div className="line"></div> </li>
                <li>Contact Me <div className="line"></div> </li>
            </ul>
            <div className="iconcont" onClick={()=>{setHamburger(!hamburger)}}>
                {hamburger ? <AiOutlineClose id="icon"/> : <GiHamburgerMenu id="icon"/>} 
            </div>
        </nav>
        </div>
    )
}

export default Navbar
 