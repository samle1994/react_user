import React, { useEffect, useState } from "react";
import ItemsProduct from "../ItemsProduct";
import api from "./../../services/api";
import { Pagination } from "react-bootstrap";
import Left from "./../layout/Left";
import { useParams } from "react-router-dom";
const Product = () => {
  const [products, setproduct] = useState([]);
  const [bannerproduct, setbannerproduct] = useState("/slider.png");
  const [page, setpage] = useState(0);
  const [pagingItems, setpagingItems] = useState([]);
  const [list, setlist] = useState("");
  const [cat, setcat] = useState("");
  const params = useParams();
  const loadData = () => {
    const url = `product/paging?page=${page}&pageLength=8${
      params.list !== undefined ? `&id_list=${params.list}` : ""
    }${params.cat !== undefined ? `&id_cat=${params.cat}` : ""}`;
    api.get(url).then((res) => {
      if (res.data.errorCode === 0) {
        setproduct(res.data.data);
        setlist(res.data.List);
        setcat(res.data.Cat);
        let items = [];
        if (res.data.PageInfo.total > 1) {
          items.push(
            <Pagination.Item key="first" onClick={() => setpage(0)}>
              &laquo;
            </Pagination.Item>
          );

          for (let i = 0; i < res.data.PageInfo.total; i++) {
            items.push(
              <Pagination.Item
                key={i}
                active={i === page}
                onClick={() => setpage(i)}
              >
                {i + 1}
              </Pagination.Item>
            );
          }
          items.push(
            <Pagination.Item
              key="last"
              onClick={() => setpage(res.data.PageInfo.total - 1)}
            >
              &raquo;
            </Pagination.Item>
          );
        }
        setpagingItems(items);
      }
    });
    api.get("photo/bannerproduct").then((res) => {
      if (res.data.errorCode === 0) {
        setbannerproduct(res.data.data.photo);
      }
    });
  };
  useEffect(() => {
    loadData();
  }, [page, params.list, params.cat]);
  return (
    <>
      <main id="main">
        <div className="wrapper d-flex flex-wrap align-items-start">
          <Left />
          <div className="content_right">
            <div className="banner mb-3">
              <a
                target="blank"
                href={bannerproduct.link !== "null" ? bannerproduct.link : ""}
              >
                <img className="img-fluid" src={bannerproduct} alt="Banner" />
              </a>
            </div>
            <div className="title_product">
              <h2>{list !== "" ? (cat !== "" ? cat : list) : "Sản phẩm"}</h2>
            </div>
            <div className="row g-md-4 g-sm-3 g-2">
              {products.map((product, idx) => (
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
            <Pagination className="mt-1 mb-3 justify-content-center">
              {pagingItems}
            </Pagination>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
