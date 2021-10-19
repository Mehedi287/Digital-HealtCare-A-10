import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="container-fluid pt-5  footer ">
            <div className="row">
                <div className="col-md-4">
                    <img className="w-25 rounded" src="https://www.localvet.com.au/SouthernAnimalHospital/Images/after%20hours%20service.png" alt="" />
                </div>
                <div className="col-md-4">
                    <Link className="text-decoration-none text-danger"><i className="far fa-envelope"></i> <span>mehedi@gmail.com</span></Link>   <br /><br />
                    <Link className="text-decoration-none text-danger"  ><i className="fas fa-phone-alt"></i> <span>+310415130654</span></Link> <br /><br />
                    <Link className="text-decoration-none text-danger"  ><i className="fas fa-map-marker-alt"></i> <span>Dhaka Bangladesh</span></Link>
                </div>
                <div className="col-md-4">
                    <Link className="text-danger fs-2 m-2" href=""><i className="fab fa-youtube"></i></Link>
                    <Link className="text-danger fs-2 m-2" href=""><i className="fab fa-facebook"></i></Link>
                    <Link className="text-danger fs-2 m-2" href=""><i className="fab fa-twitter"></i></Link>
                    <Link className="text-danger fs-2 m-2" href=""><i className="fab fa-instagram"></i></Link>
                    <Link className="text-danger fs-2 m-2" href=""><i className="fab fa-facebook-messenger"></i></Link>
                </div>
            </div>

            <h5 className="py-2 mt-5">&copy; Copy  Right By Mehedi Hasan 2021</h5>
        </div>
    );
};

export default Footer;