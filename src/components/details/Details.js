import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Details.css"
const Details = () => {
    const [detailse, setDetailse] = useState([]);
    const { serviceId } = useParams();
    const serviceIdNum = parseInt(serviceId);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => {
                const d = data.filter(detail => detail.id === serviceIdNum);
                setDetailse(d[0])
            })

    }, []);

    const { name, details, price, id, img } = detailse;

    return (
        <div className="details">
            <img className="rounded" src={img} alt="" />
            <h4>{name}</h4>
            <p>{details}</p>
            <p>price : {price}</p>
        </div>
    );
};

export default Details;