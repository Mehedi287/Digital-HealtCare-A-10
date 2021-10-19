import React from 'react';
import "./Contact.css"
const Contact = () => {
    return (
        <div className="container contact justify-content-center align-items-center d-flex row  ">
            <h2 className="mt-5">Contact Us</h2>

            <div className="login col-md-5 mb-5">
                <h3>Get In Tuch</h3>
                <form className="">
                    <input className="rounded-pill border border-danger px-4 py-2 m-2" type="text" name="" id="" placeholder="Fast Name : " />
                    <input className="rounded-pill border border-danger px-4 py-2" type="text" name="" id="" placeholder="Last Name : " /><br /><br />
                    <input className="rounded-pill border border-danger px-4 py-2 m-2" type="email" name="" id="" placeholder="Your Email : " />
                    <input className="rounded-pill border border-danger px-4 py-2" type="password" name="" id="" placeholder="Your Password : " /><br /><br />
                    <input className="rounded-pill border border-danger px-4 py-2 m-2" type="number" name="" id="" placeholder="Phone : " />
                    <textarea className="rounded border border-danger px-4 py-2" name="" id="" cols="30" rows="10" placeholder="Your Message : "></textarea><br />
                    <button type="submit" class="button-82-pushable m-4">
                        <span class="button-82-shadow"></span>
                        <span class="button-82-edge"></span>
                        <span class="button-82-front text">
                            Send
                        </span>
                    </button>
                </form>
            </div>
            <div className="col-md-6 ms-5">
                <img className="img-fluid rounded" src="https://www.softballeurope.com/wp-content/uploads/2018/12/essl-locatio-map-2019.jpg" alt="" />
            </div>
        </div>
    );
};

export default Contact;