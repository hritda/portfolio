import React from 'react';
import './WorkCardStyles.css';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <div className="project-title">
               {props.title}
            </div>
            
            <div className="pro-details">
            <div className="pro-text"> <p>{props.text}</p></div>
               
                <ul>
                    {props.ul.map((val, ind)=>{
                        return <li key={ind}>{val}</li>
                    })}
                </ul>
                
            </div>
            <div className="pro-btns">
                    <NavLink target = "_blank" to={props.href} className="btn" value="Source">Source</NavLink>
                </div>
        </div>
    )
}

export default WorkCard