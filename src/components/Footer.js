import React from 'react'
import './FooterStyles.css';
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            < FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>1503, Shree Krishna Apartments, Tulsiwadi</p>
              <p>Tardeo, Mumbai-400034</p>
            </div>
          </div>
          <div className="phone">
            <h4>< FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />+91-7021725996</h4>
          </div>
          <div className="email">
            <h4>< FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />hrithikmistry2000@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>This is me, Hrithik Mistry. I am a backend developer who
            enjoys building projects and solving major challenges
            in software development.
          </p>
          <div className="social">
           <div > <a id="github"> < FaGithub size={25}  /></a></div>
            <div ><a id="linkedin">< FaLinkedin size={25} /></a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer