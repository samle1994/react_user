import React, { useEffect, useState } from "react";
import ItemsProduct from "../ItemsProduct";
import api from "./../../services/api";
import { Pagination } from "react-bootstrap";
const ProductNews = () => {
  const [productnew, setproductnew] = useState([]);
  const [page, setpage] = useState(0);
  const [pagingItems, setpagingItems] = useState([]);
  const loadData = () => {
    api.get(`productnews/paging?page=${page}&pageLength=8`).then((res) => {
      if (res.data.errorCode === 0) {
        setproductnew(res.data.data);

        let items = [
          <Pagination.Item key="first" onClick={() => setpage(0)}>
            &laquo;
          </Pagination.Item>,
        ];
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
        setpagingItems(items);
      }
    });
  };
  useEffect(() => {
    loadData();
  }, [page]);
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="title_product">
            <h2>Sản phẩm mới</h2>
          </div>
          <div className="row g-md-4 g-sm-3 g-2">
            {productnew.map((product, idx) => (
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
      </main>
    </>
  );
};

export default ProductNews;
