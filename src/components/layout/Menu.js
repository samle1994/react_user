import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import $ from "jquery";
import { useSelector } from "react-redux";
const Menu = () => {
  const [menumobile, setmenumobile] = useState(false);

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
  const productlist = useSelector((state) => state.infoReducer.product_list);
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
                    <Link to={`/san-pham/${list.slug}`} title={list.name}>
                      {list.name}
                    </Link>
                    {list.product_cat ? (
                      <>
                        <ul>
                          {list.product_cat.map((cat, idx) => (
                            <li key={cat.id}>
                              <Link
                                to={`/san-pham/${list.slug}/${cat.slug}`}
                                title={cat.name}
                              >
                                {cat.name}
                              </Link>
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
