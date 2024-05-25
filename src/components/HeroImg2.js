import './HeroImg2Styles.css';
import React, { useState } from 'react'
import ConfettiExplosion from 'react-confetti-explosion';
import { TypeAnimation } from 'react-type-animation';
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
const HeroImg2 = (props) => {

  const [isExploding, setIsExploding] = useState(true);
  return (
    <div className="hero-img">
      <div className="heading">
        <div className="confetti">
          {isExploding && <ConfettiExplosion force={1} particleCount={400} duration={3000}  height="120vh" width="1800" />}
          {isExploding && <ConfettiExplosion force={1} particleCount={400} duration={3000}  height="120vh" width="1800" />}
        </div>
        <TypeAnimation

          sequence={[
            'Hello 👋', 1000,
            'I am Hrithik Mistry', 1000,
            'Code Crafter', 1000,
            'Tech Geek', 1000,
            'Enthusiast', 1000,
          ]}
          preRenderFirstString={true}
          wrapper="span"
          style={{ fontSize: '6rem', color: 'white', display: 'inline-block', backgroundColor: "#f2f2f233", paddingRight: '2%', paddingLeft: "2%" }}
          speed={40}
          repeat={Infinity}

        />
        

        <p>{props.text}</p>

        <div className="iconcontact">
          <a href="https://leetcode.com/u/HrithikMistry/" target="_blank" > <SiLeetcode className="leetcode" size={25} /></a>
          <a href="https://www.naukri.com/code360/profile/31cceb17-9fe2-45b1-aed4-8028088311e6" target="_blank"> <SiCodingninjas className="codingNinjas" size={25} /></a>
          <a href="https://github.com/hritda/" target="_blank"> <FaGithub className="github" size={25} /></a>
        </div>
      </div>
    </div>
  )
}

export default HeroImg2