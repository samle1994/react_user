import React, { useEffect, useState } from "react";
import ItemsProduct from "../ItemsProduct";
import api from "./../../services/api";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

const ProductDetail = () => {
  const [productdetail, setproductdetail] = useState([]);
  const [photos, setphotos] = useState([]);
  const [productrelate, setproductrelate] = useState([]);
  const params = useParams();
  const contentRef = React.useRef();
  const loadData = () => {
    api.get(`productdetail/${params.id}`).then((res) => {
      if (res.data.errorCode === 0) {
        setproductdetail(res.data.data);
      }
      if (res.data.data.files) {
        setphotos(res.data.data.files);
      }
      if (res.data.data.productRelate) {
        setproductrelate(res.data.data.productRelate);
      }
      if (contentRef.current) {
        contentRef.current.innerHTML = res.data.data.content;
      }
    });
  };
  useEffect(() => {
    loadData();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [params.id]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nav: false,
    autoplay: true,
    autoplaySpeed: 4000,
    vertical: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          vertical: false,
        },
      },
    ],
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nav: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  const settings2 = {
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
          nav: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          nav: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nav: false,
        },
      },
    ],
  };
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <main className="mt-2">
        <div className="wrapper">
          <div className="container_product">
            <div className="images_product">
              <div className="thumb_images">
                <Slider {...settings} asNavFor={nav2} ref={(c) => setNav1(c)}>
                  <div className="items_thumb">
                    <img
                      className="img-fluid"
                      src={productdetail.photo}
                      alt={productdetail.name}
                    />
                  </div>
                  {photos.map((file, idx) => (
                    <div className="items_thumb" key={file.id}>
                      <img
                        className="img-fluid"
                        src={file.photo}
                        alt={file.name}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="box_images">
                <Slider asNavFor={nav1} ref={(c) => setNav2(c)} {...settings1}>
                  <div>
                    <img
                      className="img-fluid"
                      src={productdetail.photo}
                      alt={productdetail.name}
                    />
                  </div>
                  {photos.map((file, idx) => (
                    <div key={file.id}>
                      <img
                        className="img-fluid"
                        src={file.photo}
                        alt={file.name}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="des_product">
              <div className="name-product">
                <h2>{productdetail.name}</h2>
              </div>
              <div className="price-product">
                <p>{productdetail.price} VNĐ</p>
              </div>
              <div className="info-product">{productdetail.description}</div>
              <div className="control">
                <div className="wrap_qty">
                  <p>Số lượng: </p>
                  <input
                    type="number"
                    className="qty-text"
                    defaultValue={1}
                    title="Số lượng"
                  />
                </div>
              </div>
              <div className="actions">
                <button className="btn">Thêm vào giỏ hàng</button>
                <button className="btn">Mua ngay</button>
              </div>
            </div>
          </div>
          <div className="content_product">
            <h2 className="h2_title">Thông tin sản phẩm</h2>
            <div className="content" ref={contentRef}></div>
          </div>
          <div className="title_product">
            <h2>Sản phẩm tương tự</h2>
          </div>
          <div className="margin-pr mb-3">
            <Slider {...settings2}>
              {productrelate.map((product, idx) => (
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
      </main>
    </>
  );
};

export default ProductDetail;
