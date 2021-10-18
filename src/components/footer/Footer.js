import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className="container-fluid pt-5  footer ">
            <div className="row">
                <div className="col-md-4">
                    <img className="w-25 rounded" src="https://www.localvet.com.au/SouthernAnimalHospital/Images/after%20hours%20service.png" alt="" />
                </div>
                <div className="col-md-4">
                    <a className="text-decoration-none text-danger" href=""><i className="far fa-envelope"></i> <span>mehedi@gmail.com</span></a>   <br /><br />
                    <a className="text-decoration-none text-danger" href=""><i class="fas fa-phone-alt"></i> <span>+310415130654</span></a> <br /><br />
                    <a className="text-decoration-none text-danger" href=""><i class="fas fa-map-marker-alt"></i> <span>Dhaka Bangladesh</span></a>
                </div>
                <div className="col-md-4">
                    <a className="text-danger fs-2 m-2" href=""><i className="fab fa-youtube"></i></a>
                    <a className="text-danger fs-2 m-2" href=""><i className="fab fa-facebook"></i></a>
                    <a className="text-danger fs-2 m-2" href=""><i className="fab fa-twitter"></i></a>
                    <a className="text-danger fs-2 m-2" href=""><i className="fab fa-instagram"></i></a>
                    <a className="text-danger fs-2 m-2" href=""><i className="fab fa-facebook-messenger"></i></a>
                </div>
            </div>

            <h5 className="py-2 mt-5">&copy; Copy  Right By Mehedi Hasan 2021</h5>
        </div>
    );
};

export default Footer;