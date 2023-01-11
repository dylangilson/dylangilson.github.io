/*
 * Dylan Gilson
 * dylan.gilson@outlook.com
 * February 10, 2022
 */

// TODO: style the form

import React, { useRef } from 'react';
import emailjs from "emailjs-com"
import { EmailFormWrapper } from './EmailFormComponents';

const EmailForm = () => {
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
        <EmailFormWrapper>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" className="form-control" placeholder="Name" name="name" style={{ justifyContent: "center", alignItems: "center" }} />
                <br />
                <input type="email" className="form-control" placeholder="Email Address" name="email" />
                <br />
                <input type="text" className="form-control" placeholder="Subject" name="subject" />
                <br />
                <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" />
                <br />
                <input type="submit" className="btn" value="Send Email" />
            </form>
        </EmailFormWrapper>
    );
}

export default EmailForm;
