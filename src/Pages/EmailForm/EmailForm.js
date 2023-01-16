/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com"
import { EmailFormContainer } from './EmailFormComponents';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';
import Footer from '../../Components/Footer/Footer';
import SideBar from '../../Components/SideBar/SideBar';
import "./EmailForm.css"

const EmailForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_4nksptj", "template_zo5y5ze", form.current, "ZovflCav9CsmWp8AV").then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset()
    }

    return (
        <>
            <SideBar isOpen={ isOpen } toggle={ toggle } />
            <NavigationBar toggle={ toggle } />
            <EmailFormContainer>
                <form ref={ form } onSubmit={ sendEmail }>
                    <label for="name">Your Name</label>
                    <input type="text" className="form-control" placeholder="Your Name" name="name" style={{ justifyContent: "center", alignItems: "center" }} />
                    <label for="email">Your Email</label>
                    <input type="text" className="form-control" placeholder="Email Address" name="email" />
                    <label for="subject">Subject</label>
                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" />
                    <input type="submit" className="btn" value="Send Email" />
                </form>
            </EmailFormContainer>
            <Footer anchor={ "true" } />
        </>
    );
}

export default EmailForm;
