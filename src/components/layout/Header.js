import Menu from "./Menu";
import React, { useEffect, useState } from "react";
import api from "./../../services/api";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [logo, setlogo] = useState("/nologo.png");
  const [social, setsocial] = useState([]);
  const [menu, setmenu] = useState(false);
  const navigate = useNavigate();
  const params = useLocation();
  let com = params.pathname.split("/")[1];
  const InputRef = React.useRef();
  const loadData = () => {
    api.get("photo/logo").then((res) => {
      if (res.data.errorCode === 0) {
        setlogo(res.data.data.photo);
      }
    });
    api.get("photos/social_top").then((res) => {
      if (res.data.errorCode === 0) {
        setsocial(res.data.data);
      }
    });
  };
  const scrollTop = () => {
    let height_header = document.querySelector("#header").offsetHeight;
    document.querySelector("#header").style.minHeight = height_header + "px";
    let offsettop = document.documentElement.scrollTop;
    if (offsettop >= height_header) {
      setmenu(true);
    } else {
      setmenu(false);
    }
  };
  window.addEventListener("scroll", scrollTop);
  useEffect(() => {
    loadData();
  }, []);

  const info = useSelector((state) => state.infoReducer.info);
  //console.log(info);
  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = InputRef.current.value;
    navigate("/search/" + keyword);
  };
  useEffect(() => {
    if (com !== "search") {
      InputRef.current.value = "";
    }
  }, [params]);
  return (
    <>
      <header id="header">
        <div className="header_top">
          <div className="wrapper">
            <p className="mb-0">Hotline: {info.hotline}</p>
            <div className="social d-flex align-items-center">
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
        </div>
        <div className={`header ${menu ? "fix_head animated fadeInDown" : ""}`}>
          <div className="wrapper">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <Menu />
            <div className="search-menu">
              <form
                onSubmit={handleSearch}
                className="form_search"
                name="form_search"
              >
                <input
                  type="text"
                  name="keywords"
                  placeholder="Bạn đang tìm kiếm sản phẩm gì?"
                  autoComplete="off"
                  ref={InputRef}
                />
                <button type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
            <div className="right_header">
              <div className="icon_cart">
                <a href="/#">
                  <i className="bi bi-cart-check-fill"></i>
                  <span className="count-cart">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
