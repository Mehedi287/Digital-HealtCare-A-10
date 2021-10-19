import React from 'react';
import { Link } from 'react-router-dom';
import "./Services.css"
const Services = (props) => {

    const { name, id, img, details, price } = props.service;

    return (
        <>
            <div className="service">
                <h4>Name : {name}</h4>
                <img className="rounded" src={img} alt="" />
                <p>{details}</p>
                <p>Price : {price}</p>
                <Link className="custom-btn" to={`/details/${id}`}><button class="button-82-pushable" role="button">
                    <span class="button-82-shadow"></span>
                    <span class="button-82-edge"></span>
                    <span class="button-82-front text">
                        Details
                    </span>
                </button></Link>
            </div>

        </>
    );
};

export default Services;