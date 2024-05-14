import './HeroImgStyles.css';
import React from 'react'
import IntroImg from '../assets/heroback.jpg';
import {Link} from 'react-router-dom';
const Heroimg = () => {
  return (
    <div className="hero">
     <div className="mask">
      <img  className="into-img" src={IntroImg} alt=""></img>
     </div>   
     <div className="content">
        <p>Welcome to my website!</p>
        <h1>Im a software developer</h1>
        <div>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
     </div>
     </div>
     
    </div>
  )
}

export default Heroimg
