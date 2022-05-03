import api from "./../../services/api";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
const Menu = () => {
  const [productlist, setproductlist] = useState([]);
  const [menumobile, setmenumobile] = useState(false);
  const loadData = () => {
    api.get("/Frontend/productlist").then((res) => {
      //console.log(res);
      if (res.data.errorCode === 0) {
        setproductlist(res.data.data);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  const showMenu = (e) => {
    e.preventDefault();
    if (menumobile === true) {
      setmenumobile(false);
    } else {
      setmenumobile(true);
    }
  };
  const showMenuList = () => {
    if ($(".icon_down").hasClass("active")) {
      $(".icon_down").next().slideUp();
      $(".icon_down").removeClass("active");
    } else {
      $(".icon_down").next().slideDown();
      $(".icon_down").addClass("active");
    }
  };

  return (
    <>
      <div id="main_menu" className={menumobile ? "active" : ""}>
        <nav id="menu" className="menu">
          <ul>
            <li>
              <NavLink to="/san-pham">Sản phẩm</NavLink>
              <span onClick={showMenuList} className="icon_down">
                <i className="bi bi-chevron-down"></i>
              </span>
              <ul>
                {productlist.map((list, idx) => (
                  <li key={list.id}>
                    <a href={`san-pham/${list.slug}`} title={list.name}>
                      {list.name}
                    </a>
                    {list.product_cat ? (
                      <>
                        <ul>
                          {list.product_cat.map((cat, idx) => (
                            <li key={cat.id}>
                              <a
                                href={`san-pham/${list.slug}/${cat.slug}`}
                                title={cat.name}
                              >
                                {cat.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      ""
                    )}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <NavLink to="/tin-tuc">Tin tức</NavLink>
            </li>
            <li>
              <NavLink to="/sale-off">Sale off</NavLink>
            </li>
            <li>
              <NavLink to="/san-pham-moi">Sản phẩm mới</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`menu_mobile ${menumobile ? "active" : ""}`}>
        <a onClick={showMenu} href="/#">
          <i className="bi bi-list"></i>
        </a>
      </div>
    </>
  );
};

export default Menu;
