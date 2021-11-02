import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="slider-section">
      <div className="container">
        <h4 className="my-color mb-2 text-center">Our Testimonials</h4>
        <h2 className="text-white title mb-5 text-center">
          What Client Say About Us
        </h2>
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="client-box">
              <p className="text-white">
              A walking food tour is one of the very best investments of time wherever you are and this was one of the best.The tour with Leo was fantastic. I won't tell you what we did because that would spoil the surprise of how this tour opens out to make you appreciate Singapore on so many levels. He also introduced us to food that some Singaporean foodie friends had never even heard of. Top marks Leo. When I return I will do it all over again!
              </p>
              <div className="row">
                <div className="col-lg-1 me-3">
                  <img
                    src="http://templatekit.puriwp.com/coachee/wp-content/uploads/sites/4/2021/01/successful-businesswoman-8TGVDMB-scaled.jpg"
                    alt=""
                    width="60px"
                    height="60px"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-lg-10 ms-3">
                  <p className="text-white m-0 mt-2">
                    Savia
                  </p>
                  <br />
                  <p className="my-color m-0 client-name">Sonja P. Radke bietet</p>
                </div>
              </div>
              <p className="text-white mt-4 ">
              Highly recommend this tour! I've been to a Singapore a few times after this trip and still very much remember everything I learned during my time with Leo (sorry for late review). Not only do you get the taste, but you get to learn about the culture and future of Singapore. A must do for all and great for all ages! 
              </p>
              <div className="row">
                <div className="col-lg-1 me-3">
                  <img
                    src="https://www.smart-interactive.de/img/sonja-p-radkeportraitfoto-sidebar-blog.jpg"
                    alt=""
                    width="60px"
                    height="60px"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-lg-10 ms-3">
                  <p className="text-white m-0 mt-2">Frank De Boor</p>
                  <br />
                  <p className="my-color m-0 client-name">Samantha Estate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="client-box">
              <p className="text-white">
              Leo who led our tour fulfilled many of our needs. He gave a comprehensive account of the development of Singapore, provided us with a range of foodstuffs typical of the country and answered all our questions thoughtfully and thoroughly. By enabling us to spend time (4hrs +) with a citizen of this amazing country we felt we were more than just mere visitors looking around, 
              </p>
              <div className="row">
                <div className="col-lg-1 me-3">
                  <img
                    src="https://www.gravatar.com/avatar/48bead2a300403a96417013e9344ac54?s=200&d=https%3A%2F%2Fassets.tutsplus.com%2Fimages%2Fhub%2Favatar_default.png&r=PG"
                    alt=""
                    width="60px"
                    height="60px"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-lg-10 ms-3">
                  <p className="text-white m-0 mt-2">Remi Corson</p>
                  <br />
                  <p className="my-color m-0 client-name">Lamela Tech</p>
                </div>
              </div>
              <p className="text-white mt-4 ">
              We met Leo on a group guided tour of Little India. We were impressed with his knowledge and the diversity of places that we visited in this part of Singapore. He managed to interest and amuse a wide range of ages and nationalities without any problem at all.
              </p>
              <div className="row">
                <div className="col-lg-1 me-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Jens_Lehmann_%28Berlin_Film_Festival_2011%29.jpg"
                    alt=""
                    width="60px"
                    height="60px"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-lg-10 ms-3">
                  <p className="text-white m-0 mt-2">Jens Lehman</p>
                  <br />
                  <p className="my-color m-0 client-name">Lehman Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
