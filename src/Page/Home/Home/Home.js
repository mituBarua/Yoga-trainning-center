import React from 'react';
import Banner from '../Banner/Banner';
import Count from '../Count/Count';
import Professional from '../Professional/Professional';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services></Services>
            <Count></Count>
            <Professional></Professional>
           
        </div>
    );
};

export default Home;