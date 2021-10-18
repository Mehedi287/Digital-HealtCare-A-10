import React from 'react';
import { Link } from 'react-router-dom';

const Services = (props) => {

    const { name, id, img, details, price } = props.service;
    console.log(props);
    return (
        <>
            <div>
                <h2>name {name}</h2>
                <img src={img} alt="" />
                <p>{details}</p>
                <p>{price}</p>
                <Link to={`/details/${id}`}><button>Details</button></Link>
            </div>

        </>
    );
};

export default Services;