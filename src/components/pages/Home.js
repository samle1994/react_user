import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import api from "./../../services/api";
const Home = () => {
  const [bannerqc, setbannerqc] = useState([]);
  const loadData = () => {
    api.get("/Frontend/photos/banner").then((res) => {
      //console.log(res);
      if (res.data.errorCode === 0) {
        setbannerqc(res.data.data);
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
    slidesToShow: 3,
    slidesToScroll: 1,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <section id="index">
        <div className="banner_top">
          <div className="wrapper">
            <div className="margin-bn">
              <Slider {...settings}>
                {bannerqc.map((bannerqc, idx) => (
                  <div key={bannerqc.id} className="items-bn">
                    <a
                      target="blank"
                      href={bannerqc.link !== "null" ? bannerqc.link : ""}
                    >
                      <img
                        className="img-fluid"
                        src={bannerqc.photo}
                        alt={bannerqc.name}
                      />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
