import React, { useEffect, useState } from "react";
import api from "./../../services/api";
import { Link } from "react-router-dom";

const Footer = () => {
  const [info, setinfo] = useState("");
  const [social, setsocial] = useState([]);
  const [news, setnews] = useState([]);
  const [backtop, setbacktop] = useState(false);
  const loadData = () => {
    api.get("/Frontend/photos/social_bottom").then((res) => {
      //console.log(res);
      if (res.data.errorCode === 0) {
        setsocial(res.data.data);
      }
    });
    api.get("/Frontend/showinfo").then((res) => {
      if (res.data.errorCode === 0) {
        setinfo(res.data.data);
      }
    });
    api.get("/Frontend/newshot/paging?page=0&pageLength=3").then((res) => {
      if (res.data.errorCode === 0) {
        setnews(res.data.data);
      }
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const setscrollTop = () => {
    let offsettop = document.documentElement.scrollTop;
    if (offsettop >= 100) {
      setbacktop(true);
    } else {
      setbacktop(false);
    }
  };
  window.addEventListener("scroll", setscrollTop);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer id="footer">
        <div className="footer">
          <div className="wrapper">
            <div className="items_footer">
              <h3>FOLLOW US</h3>
              <div className="social_footer">
                {social.map((social, idx) => (
                  <a
                    key={social.id}
                    target="blank"
                    href={social.link !== null ? social.link : ""}
                  >
                    <img
                      className="transition"
                      src={social.photo}
                      alt={social.name}
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="items_footer">
              <h3>Chính sách</h3>
              <ul>
                {news.map((news, idx) => (
                  <li key={news.id}>
                    <Link to={`tin-tuc/${news.slug}/${news.id}`}>
                      {news.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="items_footer">
              <h3>STORE & CONTACT</h3>
              <div className="content_footer">
                <p>
                  <i className="bi bi-geo-alt-fill"></i>
                  Địa chỉ: {info.diachi}
                </p>
                <p>
                  <i className="bi bi-telephone-forward-fill"></i> Hotline:{" "}
                  {info.hotline}
                </p>
                <p>
                  <i className="bi bi-globe"></i>Website: {info.website}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="wrapper">
            <p className="mb-0">{info.copyright}</p>
          </div>
        </div>
      </footer>
      <div
        onClick={scrollToTop}
        className={`scrollToTop ${backtop ? "show" : ""} `}
      >
        <img src="./top.png" alt="Go Top" />
      </div>
    </>
  );
};

export default Footer;
