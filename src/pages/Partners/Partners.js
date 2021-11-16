import React from 'react';
import './Partners.css'
import image1 from '../../images/travel/travel (1).jpg'
import image2 from '../../images/travel/travel (1).png'
import image3 from '../../images/travel/travel (2).jpg'
import image4 from '../../images/travel/travel (2).png'
import image5 from '../../images/travel/travel (3).jpg'
import image6 from '../../images/travel/travel (4).jpg'
import image7 from '../../images/travel/travel (5).jpg'
import image8 from '../../images/travel/travel (6).jpg'
const Partners = () => {
    return (
        <div>
            <h1 className='mt-5 text-primary'><span className='border-bottom border-warning'>Our Partners</span></h1>
            <div className='all-partners'>
            <img className='img-fluid' src={image1} alt="" />
            <img className='img-fluid' src={image2} alt="" />
            <img className='img-fluid' src={image3} alt="" />
            <img className='img-fluid' src={image4} alt="" />
            <img className='img-fluid' src={image5} alt="" />
            <img className='img-fluid' src={image6} alt="" />
            <img className='img-fluid' src={image7} alt="" />
            <img className='img-fluid' src={image8} alt="" />
        </div>
        </div>
    );
};

export default Partners;