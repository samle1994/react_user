import api from "./../../services/api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import $ from "jquery";
const Left = () => {
  const [bannerleft, setbannerleft] = useState({});

  const loadData = () => {
    api.get("photo/bannerproductleft").then((res) => {
      if (res.data.errorCode === 0) {
        setbannerleft(res.data.data);
      }
    });
  };
  useEffect(() => {
    loadData();
  }, []);
  const productlist = useSelector((state) => state.infoReducer.product_list);

  $("#left ul li").hover(
    function () {
      $(this).find(">ul").stop().slideDown(500);
    },
    function () {
      $(this).find(">ul").stop().slideUp(500);
    }
  );
  return (
    <>
      <aside id="left">
        <h2>Danh mục sản phẩm</h2>
        <ul>
          {productlist.map((list, idx) => (
            <li key={list.id}>
              <Link
                className={list.product_cat.length > 0 ? "icon_down" : ""}
                to={`/san-pham/${list.slug}`}
                title={list.name}
              >
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
        <div className="bannerleft">
          <a
            target="blank"
            href={bannerleft.link !== "null" ? bannerleft.link : ""}
          >
            {bannerleft.photo ? (
              <img
                className="img-fluid"
                src={bannerleft.photo}
                alt="Banner seller"
              />
            ) : (
              ""
            )}
          </a>
        </div>
      </aside>
    </>
  );
};

export default Left;
