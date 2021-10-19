import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Doctores from '../doctors/Doctores';
import Services from '../services/Services';
import "./Home.css"
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <Carousel id="home" className="container mt-5">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src="https://image.freepik.com/free-photo/closeup-shot-covid19-vaccine-bottles-with-needle-blue-surface_181624-51204.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Covid-19 Vaccine</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src="https://image.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Preshure Machine</h3>
                        <p>Provide By Doctors Mk Jhon</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50 img-fluid"
                        src="https://image.freepik.com/free-photo/interior-view-operating-room_1170-2254.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Operation Therater </h3>
                        <p>Our Operation Room.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <hr className="mt-5 mb-5" />
            <div id="service" className="">
                <h2 className="text-center mb-4">Service</h2>
                <div className="container services">
                    {
                        services.map(service => <Services service={service} key={service.id} ></Services>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;