import React from 'react';
import image from '../../../images/25x04.jpg';
import './professional.css';
const Professional = () => {
    return (
        <div className="container">
            <div className=" my-5 row">
            <h2>Yoga Benefits</h2>
            <div className="col-md-6 flexible">
                <img src={image} alt="image"/> 
            </div>
            <div className="col-md-6 mt-5">
                   <div className="flexibility1 mb-3">
                       <span>Developed Flexibility</span>
                       <span>95%</span>
                   </div>
                   <div className="flexibility2 mb-3">
                       <span>Strengthened muscles</span>
                       <span>70%</span>
                   </div>
                   <div className="flexibility3 mb-3">
                       <span>Calmed nerves</span>
                       <span>80%</span>
                   </div>
                   <div className="flexibility4 mb-3">
                       <span>Became slim</span>
                       <span>50%</span>
                   </div>
            </div>
        </div>
        </div>
    );
};

export default Professional;