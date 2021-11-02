import React, { useEffect, useState } from 'react';
import './Offers.css'
import SingleOffer from './SingleOffer';

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch("https://peaceful-forest-00600.herokuapp.com/offers")
        .then(res => res.json())
        .then(data => setOffers(data))
    }, []);
    
    return (
        <div className="offer-section pt-5">
        <div className="container">
             <p className="my-color">Offers</p>
            <h2 className="text-black title">Special any one <br />
             Offers</h2>
            {!offers.length ? (
                <div className="text-center">
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
              </div>
            ):
             (<div className="row">
                 {
                     offers.map((offer, index)=> <SingleOffer key={offer._id}
                     offer={offer}
                     index={index}
                     ></SingleOffer>)
                 }
             </div>)}
        </div>
        </div>
    );
};

export default Offers;