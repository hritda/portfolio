import './HeroImg2Styles.css';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCodingninjas } from "react-icons/si";
const HeroImg2 = (props) => {


  return (
    <div className="hero-img">
      <div className="heading">
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
          <SiLeetcode className="leetcode" size={25} />
          <SiCodingninjas className = "codingNinjas" size={25} />
          <FaGithub className="github" size={25} />
        </div>
      </div>
    </div>
  )
}

export default HeroImg2