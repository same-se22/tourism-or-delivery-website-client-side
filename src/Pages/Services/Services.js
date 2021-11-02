import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";

const Services = () => {
    const [pause, setPause] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    mode: "free",
    spacing: 15,
    slidesPerView: 3,
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

 useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 2000)
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div className="slider-section">
      <div className="container-service">
        <h4 className="my-color mb-3">
          <i class="fas fa-grip-lines-vertical"></i> Tour Destination
        </h4>
        <h2 className="text-white title my-4">
          Choose The <span className="fw-bold">Destination</span> Just <br />{" "}
          Right For <span className="fw-bold">Your Vacation</span>
        </h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide  number-slide1">
            <div className="service-box">
              <img
                src="https://cdn.thecrazytourist.com/wp-content/uploads/2016/04/Mud-Volcano-768x432.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Garasu Volcano, Azerbaijan</h4>
                <h3 className="d-inline price ms-4">894</h3>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide2">
            <div className="service-box">
              <img
                src="https://www.planetware.com/photos-large/B/belgium-bruges-belfry-2.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Bruges, Belgium</h4>
                <h3 className="d-inline price ms-4">690</h3>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide3">
            <div className="service-box">
              <img
                src="https://www.planetware.com/photos-large/BRA/brazil-rio-de-janeiro-sugar-loaf.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Rio de Janeiro, Brazil</h4>
                <h3 className="d-inline price ms-4">650</h3>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide4">
            <div className="service-box">
              <img
                src="https://www.planetware.com/photos-large/NEP/nepal-bhaktapur-durbar-square.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Bhaktapur, Nepal</h4>
                <h3 className="d-inline price ms-4">780</h3>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="service-box">
              <img
                src="https://www.planetware.com/photos-large/NL/netherlands-amsterdam-anne-frank-statue.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Anne Frank House, Netherlands</h4>
                <h3 className="d-inline price ms-4">235</h3>
              </div>
            </div>
          </div>

          <div className="keen-slider__slide number-slide6">
            <div className="service-box">
              <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F12%2F12%2Fbear-lake-kenai-fjords-alaska-FIFTYBEST1220.jpg"
                width="320px"
                height="400px"
                alt=""
              />
              <div className="slider-title">
                <h4 className="d-inline me-5">Alaska’s Coast, Mexico</h4>
                <h3 className="d-inline price ms-4">758</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;
