import React, { useEffect, useState } from 'react';
import './Services.css'
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Service from './Service/Service';

const Services = () => {
    
    const {isLoading} = useAuth();
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('https://tour-dibo-production.up.railway.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])

    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
     }

    return (
        <div className="my-4 services">
            <h1 className="text-center">Explore Bangladesh</h1>
            <div className="row container-fluid container mx-auto">
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;