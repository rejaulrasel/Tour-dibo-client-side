import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
  const {isLoading} = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
     }
    return (
        <div>
          <Services></Services>
        </div>
    );
};

export default Home;