import React, { useEffect, useState } from 'react';
import { FaGolang } from 'react-icons/fa6';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { RiReactjsLine } from 'react-icons/ri';

import { FaNodeJs, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import '../components/SkillStyles.css';

const Skill = (props) => {
  
   

   useEffect(() => {
    let currentIndex = 0 ;
    const skillIcons = document.querySelectorAll('.skill-icon');
    const h4Elements = document.querySelectorAll('.icon h4');
    const icons = document.querySelectorAll('icon');
    const handleAnimationEnd = (event)=>{
        const icon = event.target; 
        // Remove from the skill icon itself
        console.log("handleAnimation called");
        [...icon.classList].forEach((className) => {
          if (className.startsWith('auto-')) {
            icon.classList.remove(className);
          }
        });
    
        // Remove from child elements of the skill icon
        icon.querySelectorAll('.skill-icon > *').forEach((child) => {
          [...child.classList].forEach((className) => {
            if (className.startsWith('auto-')) {
              child.classList.remove(className);
            }
          });
        });
        console.log(icon.nextSiblingElement);
        const h4Element = icon.parentElement.getElementsByTagName('h4')[0];
        if(h4Element){
         Array.from(h4Element.classList).forEach((className)=>{
            if (className.startsWith('auto-')) {
                // Remove the class from the element
                h4Element.classList.remove(className);
              }
         })
        }
    }
    
  
   
    skillIcons.forEach((icon) => {
        icon.addEventListener('animationend', handleAnimationEnd);
      });
    console.log(skillIcons);
   
      
        const numIcons = skillIcons.length;
        let className = "";
        let childClassName = "";
        let headingClass = "";
         
        
        const intervalId = setInterval(() => {
            // Remove animation classes from the previous icon
           
            
            switch (currentIndex) {
                case 0: className = "auto-golang";
                    childClassName = "auto-golang-color";
                    break;
                case 1: className = "auto-react";
                    childClassName = "auto-react-color";
                    break;
                case 2: className = "auto-express";
                    childClassName = "auto-express-color";
                    break;
                case 3: className = "auto-mongodb";
                    childClassName = "auto-mongodb-color";
                    break;
                case 4: className = "auto-node";
                    childClassName = "auto-node-color";
                    break;
                case 5: className = "auto-bootstrap";
                    childClassName = "auto-bootstrap-color";
                    break;
                case 6: className = "auto-git";
                    childClassName = "auto-git-color";
                    break;
                default:
                    break;
            }
            // Add animation class to the current icon
            skillIcons[currentIndex].classList.add(className);
            console.log(skillIcons[currentIndex]);
            skillIcons[currentIndex].children[0].classList.add(childClassName);
            skillIcons[currentIndex].parentElement.getElementsByTagName('h4')[0].classList.add(childClassName);

            // Move to the next icon index
            currentIndex = (currentIndex + 1 ) % numIcons;
        }, 200); //
   }, [])
   
    
        
    return (
        <div className="skill-container">
            <h1>Skills/Technologies</h1>
            <div className={`icon-container ${props.isSkillClicked ? 'slide-in-skill' : ''}`}>
                <div className="icon">
                    <div className="skill-icon">
                        <FaGolang id="skillgolang" size={60} className="icons" />
                    </div>
                    <h4 >Go</h4>
                </div>
                <div className="icon">
                    <div className="skill-icon">
                        <RiReactjsLine id="skillreact" size={60} className="icons" />

                    </div>
                    <h4 >ReactJS</h4>
                </div>
                <div className="icon">
                    <div className="skill-icon">
                        <SiExpress id="skillexpress" size={60} className="icons" />

                    </div>
                    <h4 >Express</h4>
                </div>
                <div className="icon">
                    <div className="skill-icon">
                        <SiMongodb id="skillmongodb" size={60} className="icons" />

                    </div>
                    <h4 id="gomongodb">MongoDB</h4>
                </div>
                <div className="icon">
                    <div className="skill-icon">
                        <FaNodeJs id="skillnodejs" size={60} className="icons" />

                    </div>
                    <h4>NodeJS</h4>

                </div>
                <div className="icon">
                    <div className="skill-icon">
                        <FaBootstrap id="skillbootstrap" size={60} className="icons" />

                    </div>
                    <h4 >Bootstrap</h4>


                </div>
                <div className="icon">
                    <div className="skill-icon">
                        <FaGitAlt id="skillgit" size={60} className="icons" />

                    </div>
                    <h4 >Git</h4>


                </div>
            </div>
        </div>
    );
}



export default Skill;