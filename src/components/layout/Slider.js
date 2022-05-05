import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import api from "./../../services/api";
const Sliders = () => {
  const [slider, setslider] = useState([]);
  const [show, setshow] = useState(false);
  const loadData = () => {
    api.get("photos/slider").then((res) => {
      //console.log(res);
      if (res.data.errorCode === 0) {
        setslider(res.data.data);
        setshow(true);
      }
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div id="slidershow">
        {show === false ? (
          <div className="loadding">
            <img src="/loading.gif" alt="loadding" />
          </div>
        ) : (
          ""
        )}
        <Slider {...settings}>
          {slider.map((slider, idx) => (
            <div className="items_slider" key={slider.id}>
              <a target="blank" href={slider.link !== null ? slider.link : ""}>
                <img src={slider.photo} alt={slider.name} />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Sliders;
