import React from 'react';
import './WorkCardStyles.css';
//import {NavLink} from 'react-router-dom';
import WorkCard from './WorkCard';
import './WorkCardStyles.css';
import projectData from './WorkCardData';

const Work = (props) => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div  className={`project-container ${props.isProjectClicked ? 'slide-in-project':''}`}>
               {projectData.map((val,ind)=>{
                return (
                    <WorkCard
                    key={ind}
                     title = {val.title}
                     text = {val.text}
                     ul = {val.ul}
                     />
                )
               })}
            </div>
        </div>
    )
}

export default Work;