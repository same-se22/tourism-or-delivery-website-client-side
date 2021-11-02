import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";

const FollowInsta = () => {
    const [pause, setPause] = useState(false)
  const timer = useRef()
  const [sliderRef, slider] = useKeenSlider({
    mode: "free",
    spacing: 15,
    slidesPerView: 6,
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
    <div className="About-section">
      <div className="container-service">
        <h4 className="my-color ">
          <i class="fas fa-grip-lines-vertical"></i> Vaction 
        </h4>
        <h2 className="text-white title mb-3">
          <span className="fw-bold">VactionPlanner</span>
        </h2>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide  number-slide1">
            <div className="service-box-2">
              <img
                src="https://www.contiki.com/six-two/wp-content/uploads/2018/02/Antigua-Guatemala.jpg"
                width="200px"
                height="210px"
                alt=""
                
              />
            </div>
          </div>

          <div className="keen-slider__slide number-slide2">
            <div className="service-box-2">
              <img
                src="https://www.contiki.com/six-two/wp-content/uploads/2021/08/best-beaches-in-spain.jpg"
                width="200px"
                height="210px"
                alt=""
              />
            </div>
          </div>

          <div className="keen-slider__slide number-slide3">
            <div className="service-box-2">
              <img
                src="https://grandcircle.scene7.com/is/image/GrandCircle/T247/21x9/850"
                width="200px"
                height="210px"
                alt=""
              />
              
            </div>
          </div>

          <div className="keen-slider__slide number-slide4">
            <div className="service-box-2">
              <img
                src="https://travel-made-simple.com/wp-content/uploads/2013/07/Rome-dogs-TMS.jpg"
                width="200px"
                height="210px"
                alt=""
              />
              
            </div>
          </div>
          <div className="keen-slider__slide number-slide5">
            <div className="service-box-2">
              <img
                src="https://www.smartertravel.com/wp-content/uploads/2017/11/shutterstock_90293950-1024x680.jpg"
                width="200px"
                height="210px"
                alt=""
              />
             
            </div>
          </div>

          <div className="keen-slider__slide number-slide6">
            <div className="service-box-2">
              <img
                src="https://www.smartertravel.com/wp-content/uploads/2017/11/shutterstock_500899873-1024x683.jpg"
                width="200px"
                height="210px"
                alt=""
              />
             
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FollowInsta;
