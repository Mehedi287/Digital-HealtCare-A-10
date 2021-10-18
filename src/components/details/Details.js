import React from 'react';
import { useParams } from 'react-router';
import "./Details.css"
const Details = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>details {serviceId} </h1>
            <h1>details {serviceId}</h1>
            <h1>details {serviceId}</h1>
            <h1>details {serviceId}</h1>
            <h1>details {serviceId}</h1>

        </div>
    );
};

export default Details;