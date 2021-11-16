import React from 'react';
import './TourGallery.css';
import image1 from '../../images/tours/tour (1).jpg'
import image2 from '../../images/tours/tour (2).jpg'
import image3 from '../../images/tours/tour (3).jpg'
import image4 from '../../images/tours/tour (4).jpg'
import image5 from '../../images/tours/tour (5).jpg'
import image6 from '../../images/tours/tour (6).jpg'
const TourGallery = () => {
    return (
        
       <div>
           <h1 className='text-primary mb-5'><span className='border-bottom border-warning'>Tour Gallery</span></h1>
            <div className='row g-0'>
            <div className="col-12 col-lg-4 col ">
                <img src={image1} className='img-fluid pic h-100' alt="" />
            </div>
            <div className="col-12 col-lg-4 col ">
                <img src={image2} className='img-fluid pic h-100' alt="" />
            </div>
            <div className="col-12 col-lg-4 col ">
                <img src={image3} className='img-fluid pic h-100' alt="" />
            </div>
            <div className="col-12 col-lg-4 col ">
                <img src={image4} className='img-fluid pic h-100' alt="" />
            </div>
            <div className="col-12 col-lg-4 col ">
                <img src={image5} className='img-fluid pic h-100' alt="" />
            </div>
            <div className="col-12 col-lg-4 col ">
                <img src={image6} className='img-fluid pic h-100' alt="" />
            </div>
            
        </div>
       </div>
    );
};

export default TourGallery;