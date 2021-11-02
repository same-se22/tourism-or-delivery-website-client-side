import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import RegistarForm from './RegistarForm';

const OfferDetails = () => {
    const {id} = useParams();
    const [offer, setOffer] = useState({});
    useEffect(() => {
        fetch(`https://peaceful-forest-00600.herokuapp.com/offers/${id}`)
        .then(res => res.json())
        .then(data => setOffer(data))
        
    }, [id])

    const styles = {    
        backgroundImage: `url(${offer.img})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '50vh'
};
    return (
        <div className="offer-section">
             <div style={styles} className="place-img">
             <div className="place-text ">
             <h1 className="banner-title text-center">{offer.name}</h1>       
             </div>
             </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className="card details-card my-3 my-bg" >
                    <div className="">
                        <h5 className="card-title-1 my-color">{offer.title}</h5>
                        <div className="d-flex box justify-content-between align-items-center">
                        <h6 className="card-subtitle-1 mb-2 text-white">I always find that travelling inspires my future travels. I can’t go up a mountain without thinking about the next hike, or visit a remote island beach without yearning for the next adventure.</h6>
                        <div className="rounded-circle text-center  text-white offer-details-1">
                            <p className="m-2 mb-0"><strong>${offer.price}</strong></p>
                            <small className="">per person</small>
                        </div>
                        </div>
                       
                        <div className="offer-details text-center d-flex justify-content-around">
                        <div>
                        <i className="fas fa-clock"></i>
                        <p><strong>weekly</strong></p>
                        </div>
                        <div>
                        <i className="fas fa-users"></i>
                        <p><strong>8 People</strong></p>
                        </div>
                       <div>
                       <i className="fas fa-user-plus"></i>
                        <p><strong>35</strong></p>
                       </div>
                        <div>
                        <i className="fas fa-map-marker-alt"></i>
                        <p><strong>{offer.name}</strong></p>
                        </div>
                        <div>
                        <i className="fas fa-sun"></i>
                        <p><strong>Discovery</strong></p>
                        </div>
                        </div>
                        <p className="card-text p-3 text-white">{offer.dec}</p>
                        <p  className="card-text p-3 text-white">Travelling inspires travel, it feeds a yearning to explore and discover. And what easier way to feed that hunger than by exploring locally?</p>
                        <p  className="card-text p-3 text-white">“The whole object of travel is not to set foot on foreign land; it is at last to set foot on one’s own country as a foreign land” G.K. Chesterton.“Awareness is like the sun. When it shines on things they’re transformed” Thich Nhat Nanh How often do you take the time to look around on your commute to the office? If it's not often you should do it more. Things can look quite amazing when you take the time to look at them with a fresh mind and inquisitive eyes.I often wander within the city I work in for a break from ‘business as usual’. It gives me a boost and helps push me through the day.</p>
                    </div>
                    </div>
                    </div>
                    <div className="col-lg-4">
                    <RegistarForm offer={offer}></RegistarForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferDetails;