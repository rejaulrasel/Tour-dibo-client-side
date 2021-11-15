import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import Partners from '../../Partners/Partners';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
  const {isLoading} = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
     }
    return (
        <div>
          <Banner></Banner>
          <Services></Services>
        <Partners>  </Partners>
        </div>
    );
};

export default Home;