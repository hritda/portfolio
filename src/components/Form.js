import "./FormStyles.css";

import React from 'react';
import { MdEmail } from "react-icons/md";

const Form = () => {
    const emailAddress = "hrithikmistry2000@gmail.com"
    return (
        <div className="form">
            <h1>Contact</h1>
            <h2>Enter your information...</h2>
            <form>
                <label htmlFor="name">Your name</label>
                <input id="name" type="text"></input>
                <label htmlFor="email">Email</label>
                <input id="email" type="email"></input>
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text"></input>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="6" placeholder="Type your message here..." />
                <button className="btn">Submit</button>
            </form>
           
            <h2>Or click on the icon below to mail me...</h2>
            
            <a  className= "mail-icon" href={`mailto:${emailAddress}`} >
               
                <MdEmail size={40} style = {{color:"#e60073",marginRight:"2rem"}} />
            </a>
        
        </div>
    )
}

export default Form