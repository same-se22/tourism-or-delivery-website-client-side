import React from 'react';
import AboutUs from '../../Pages/About/AboutUs';
import FollowInsta from '../../Pages/FollowInsta/FollowInsta';
import LeranMore from '../../Pages/LeranMore/LeranMore';
import Services from '../../Pages/Services/Services';
import Testimonials from '../../Pages/Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Offers from '../Offering/Offers';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <AboutUs></AboutUs>
            <Offers></Offers>
            <LeranMore></LeranMore>
            <Services></Services>
            <Testimonials></Testimonials>
            <FollowInsta></FollowInsta>

        </div>
    );
};

export default Home;