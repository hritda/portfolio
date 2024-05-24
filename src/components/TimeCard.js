import React from 'react'
import './TimeCardStyles.css';
const TimeCard = (props) => {
  return (
    <div className="card">
       
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">{props.description}</p>

    </div>
  )
}

export default TimeCard