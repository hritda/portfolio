import React from 'react';
import './WorkCardStyles.css';
import { NavLink } from 'react-router-dom';

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <h2 className="project-title">
                {props.title}
            </h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <ul>
                    {props.ul.map((val, ind)=>{
                        return <li key={ind}>{val}</li>
                    })}
                </ul>
                
            </div>
            <div className="pro-btns">
                    <NavLink to="" className="btn">View</NavLink>
                    <NavLink to="" className="btn">Source</NavLink>
                </div>
        </div>
    )
}

export default WorkCard