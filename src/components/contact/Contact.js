import React from 'react';
import "./Contact.css"
const Contact = () => {
    return (
        <div className="contact justify-content-center align-items-center d-flex">
            <div className="login">
                <h3>Get In Tuch</h3>
                <form className=" ">
                    <input className="rounded-pill border border-danger px-4 py-2" type="text" name="" id="" placeholder="Fast Name : " /><br /><br />
                    <input className="rounded-pill border border-danger px-4 py-2" type="text" name="" id="" placeholder="Last Name : " /><br /><br />
                    <input className="rounded-pill border border-danger px-4 py-2" type="email" name="" id="" placeholder="Your Email : " /><br /><br />
                    <input className="rounded-pill border border-danger px-4 py-2" type="password" name="" id="" placeholder="Your Password : " /><br /><br />
                    <input className="rounded-pill border border-danger px-4 py-2" type="number" name="" id="" placeholder="Phone : " /><br /><br />
                    <textarea className="rounded border border-danger px-4 py-2" name="" id="" cols="30" rows="10" placeholder="Your Message : "></textarea>
                </form>
            </div>
        </div>
    );
};

export default Contact;