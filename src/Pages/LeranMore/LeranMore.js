import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
const LeranMore = () => {
  return (
    <div className="About-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h4 className="my-color ">
              <i class="fas fa-grip-lines-vertical"></i> Learn More
            </h4>
            <h2 className="text-white title my-2">
              Learn More About <span className="fw-bold">Vacation Planner</span>
            </h2>
            <p className="text-white">
            The monuments and big attractions are great. They’re often the reasons why people want to travel somewhere.The Eiffel Tower attracts visitors to Paris, and the Colosseum draws tourists to Rome. The East Side Gallery is a bucket list attraction in Berlin.But those sights aren’t the essence of the city.Vacations are a break from work, a chance to relax and recharge, right?Vacation can be a great time to ditch the schedule you normally keep at home, which allows time and space to loosen up and recharge your batteries.
            </p>
          </div>
          <div className="col-lg-6 mb-3">
            <div className="my-5">
              <div className="my-3">
                <h5 className="text-white m-0 fw-bold">Itineraries and tours</h5>
                <Progress
                  percent={80}
                  theme={{
                    active: {
                      trailColor: "#fff",
                      color: "#FEB800",
                    },
                  }}
                />
              </div>
              <div className="my-3">
                <h5 className="text-white m-0 fw-bold">PLanningtour destination </h5>
                <Progress
                  percent={95}
                  theme={{
                    active: {
                      trailColor: "#fff",
                      color: "#FEB800",
                    },
                  }}
                />
              </div>
              <div className="my-3">
                <h5 className="text-white m-0 fw-bold">Meals</h5>
                <Progress
                  percent={67}
                  theme={{
                    active: {
                      trailColor: "#fff",
                      color: "#FEB800",
                    },
                  }}
                />
              </div>
              <div className="my-3">
                <h5 className="text-white m-0 fw-bold">Layover trip</h5>
                <Progress
                  percent={87}
                  theme={{
                    active: {
                      trailColor: "#fff",
                      color: "#FEB800",
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeranMore;
