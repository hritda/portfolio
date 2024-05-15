import React from 'react'
import './TimeCardStyles.css';
const TimeCard = (props) => {
  return (
    <div className="card time-card">
        <div className="card-body time-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.description}</p>
        </div>
    </div>
  )
}

export default TimeCard