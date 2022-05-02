import api from "./../../services/api";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  const [productlist, setproductlist] = useState([]);
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
  return (
    <>
      <div id="main_menu">
        <nav id="menu" className="menu">
          <ul>
            <li>
              <NavLink to="/san-pham">Sản phẩm</NavLink>
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
              <NavLink to="/sale-of">Sale of</NavLink>
            </li>
            <li>
              <NavLink to="/sale-of">Sản phẩm mới</NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu_mobile">
          <a href="/#">
            <i className="bi bi-list"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Menu;
