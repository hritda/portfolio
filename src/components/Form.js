import "./FormStyles.css";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { IoIosWarning } from "react-icons/io";
import React from 'react';
import { MdEmail } from "react-icons/md";
import emailjs from 'emailjs-com';

const Form = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        criteriaMode: "all"
    });
    const onSubmit = (data, e) => {
        console.log(data);
        e.preventDefault();
        emailjs.sendForm('portfolio_service2000', 'contact_form', e.target, 'j57d8r_osKEALso-F')
      .then((result) => {
        Swal.fire({
            icon: "success",
            title: "Yay!",
            color:"white",
            background:"#1a1919",
            text:"Your info is submitted!",
            iconColor: "#42f563",
            showConfirmButton: false,
            timer: 1500
          });
          emailjs.sendForm('portfolio_service2000', 'contact_reply', e.target, 'j57d8r_osKEALso-F')
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
    }

    console.log(watch("example"));
    const emailAddress = "hrithikmistry2000@gmail.com"
    return (
        <div className="form">
            <h1>Contact</h1>
            <h2>Enter your information...</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Your name</label>
                <input placeholder="Enter your full name..." {...register("name", { required: "Name is required" })} aria-invalid={errors.name ? "true" : "false"} id="name" type="text"></input>
                {errors.name?.type === 'required' && <p><IoIosWarning size={20} color="e60073" />&nbsp;&nbsp;Name is required</p>}
                <label htmlFor="email">Email</label>
                <input placeholder="Enter your email..." {...register("email", { required: "Email address is required" })} aria-invalid={errors.email ? "true" : "false"} id="email" type="email"></input>
                {errors.email?.type === 'required' && <p><IoIosWarning size={20} color="e60073" />&nbsp;&nbsp; Email is required</p>}
                <label htmlFor="subject">Subject</label>
                <input placeholder="Enter the subject to contact for..." {...register("subject")} id="subject" type="text"></input>
                <label htmlFor="message">Message</label>
                <textarea placeholder="Enter some more information..." {...register("message", { required: "message is required" })} id="message" rows="6" placeholder="Type your message here..." />
                {errors.messsage?.type === 'required' && <p><IoIosWarning size={20} color="e60073" /> &nbsp;&nbsp; A message is required</p>}
                <input className="btn" type="submit" value="Submit" />

            </form>

            <h2>Or click on the icon below to mail me...</h2>

            <a className="mail-icon" href={`mailto:${emailAddress}`} >

                <MdEmail size={40} style={{ color: "#e60073", marginRight: "2rem" }} />
            </a>

        </div>
    )
}

export default Form