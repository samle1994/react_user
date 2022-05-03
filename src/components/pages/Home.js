import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ItemsProduct from "../ItemsProduct";
import api from "./../../services/api";
import Sliders from "./../layout/Slider";

const Home = () => {
  const [bannerqc, setbannerqc] = useState([]);
  const [productnew, setproductnew] = useState([]);
  const [bannerseller, setbannerseller] = useState({});
  const [producthot, setproducthot] = useState([]);
  const [bannersaleoff, setbannersaleoff] = useState({});
  const [productsale, setproductsale] = useState([]);
  const [bannerbottom, setbannerbottom] = useState({});
  const loadData = () => {
    api.get("photos/banner").then((res) => {
      //console.log(res);
      if (res.data.errorCode === 0) {
        setbannerqc(res.data.data);
      }
    });
    api.get("productnews/paging?page=0&pageLength=20").then((res) => {
      if (res.data.errorCode === 0) {
        setproductnew(res.data.data);
      }
    });
    api.get("photo/bannerseller").then((res) => {
      //console.log(res);
      if (res.data.errorCode === 0) {
        setbannerseller(res.data.data);
      }
    });
    api.get("producthot/paging?page=0&pageLength=8").then((res) => {
      if (res.data.errorCode === 0) {
        setproducthot(res.data.data);
      }
    });
    api.get("photo/bannersaleoff").then((res) => {
      //console.log(res);
      if (res.data.errorCode === 0) {
        setbannersaleoff(res.data.data);
      }
    });
    api.get("productsale/paging?page=0&pageLength=8").then((res) => {
      if (res.data.errorCode === 0) {
        setproductsale(res.data.data);
      }
    });
    api.get("photo/bannerqc").then((res) => {
      //console.log(res);
      if (res.data.errorCode === 0) {
        setbannerbottom(res.data.data);
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nav: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <main>
        <Sliders />
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
        <section id="prodcut_news">
          <div className="wrapper">
            <div className="title_main">
              <h2>new arrival</h2>
            </div>
            <div className="margin-pr">
              <Slider {...settings1}>
                {productnew.map((product, idx) => (
                  <div key={`pr-news-${idx}`} className="item_pr_l">
                    <ItemsProduct
                      name={product.name}
                      price={product.price}
                      photo={product.photo}
                      id={product.id}
                      slug={product.slug}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        <section className="bannerseller">
          <a
            target="blank"
            href={bannerseller.link !== "null" ? bannerseller.link : ""}
          >
            {bannerseller.photo ? (
              <img
                className="img-fluid"
                src={bannerseller.photo}
                alt="Banner seller"
              />
            ) : (
              ""
            )}
          </a>
        </section>
        <section id="product_hot">
          <div className="wrapper">
            <div className="title_main">
              <h2>best seller</h2>
            </div>
            <div className="row g-md-4 g-sm-3 g-2">
              {producthot.map((product, idx) => (
                <div
                  key={`pr-hot-${idx}`}
                  className="col-lg-3 col-md-4 col-sm-6 col-6"
                >
                  <ItemsProduct
                    name={product.name}
                    price={product.price}
                    photo={product.photo}
                    id={product.id}
                    slug={product.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bannersaleof">
          <a
            target="blank"
            href={bannersaleoff.link !== "null" ? bannersaleoff.link : ""}
          >
            {bannersaleoff.photo ? (
              <img
                className="img-fluid"
                src={bannersaleoff.photo}
                alt="Banner sale off"
              />
            ) : (
              ""
            )}
          </a>
        </section>
        <section id="product_hot">
          <div className="wrapper">
            <div className="title_main">
              <h2>sale off</h2>
            </div>
            <div className="row g-md-4 g-sm-3 g-2">
              {productsale.map((product, idx) => (
                <div
                  key={`pr-sale-${idx}`}
                  className="col-lg-3 col-md-4 col-sm-6 col-6"
                >
                  <ItemsProduct
                    name={product.name}
                    price={product.price}
                    photo={product.photo}
                    id={product.id}
                    slug={product.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bannerbottom">
          <a
            target="blank"
            href={bannerbottom.link !== "null" ? bannerbottom.link : ""}
          >
            {bannerbottom.photo ? (
              <img
                className="img-fluid"
                src={bannerbottom.photo}
                alt="Banner bottom"
              />
            ) : (
              ""
            )}
          </a>
        </section>
      </main>
    </>
  );
};

export default Home;
