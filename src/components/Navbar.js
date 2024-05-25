import "./NavbarStyles.css";
import Resume from '../assets/Resume.pdf';
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    const handleClick = () => { setClick(!click) }
    const downloadCV = () => {

    }
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
            <img src={require('../assets/whitehrithiklogo.svg').default} width="50" height="50" alt='mySvgImage' />
            </Link>
            <ul className={click ? ("nav-menu active") : ("nav-menu")}>
               
                <li className="item">
                    <Link onClick={handleClick} to="/#home">Home</Link>
                </li>
                <li  className="item">
                    <Link onClick={handleClick} to="/#skills">Skills</Link>
                </li>
                <li  className="item">
                    <Link onClick={handleClick} to="/#journey">Journey</Link>
                </li>
                <li  className="item">
                    <Link onClick={handleClick} to="/#certificates">Certificates</Link>
                </li>
                <li  className="item">
                    <Link onClick={handleClick} to="/#project">Projects</Link>
                </li>
                <li className="item">
                    <Link onClick={handleClick} to="/#contact">Contact</Link>
                </li>
                <li className="resume">
                    <a className = "btn " href ={Resume} target="_blank" download = "Resume(Hrithik Mistry)">Download CV</a>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: "#fff" }} />) :
                    (<FaBars size={30} style={{ color: "#fff" }} />)}
            </div>
        </div>
    )
}

export default Navbar
