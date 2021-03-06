import React, { useEffect, useState } from "react";
import ItemsNews from "../ItemsNews";
import api from "./../../services/api";
import { Pagination } from "react-bootstrap";
import Left from "./../layout/Left";
const News = () => {
  const [news, setnews] = useState([]);
  const [page, setpage] = useState(0);
  const [pagingItems, setpagingItems] = useState([]);

  const loadData = () => {
    const url = `news/paging?page=${page}&pageLength=8`;
    api.get(url).then((res) => {
      if (res.data.errorCode === 0) {
        setnews(res.data.data);
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
  };
  useEffect(() => {
    loadData();
  }, [page]);
  return (
    <>
      <main id="main">
        <div className="wrapper d-flex flex-wrap align-items-start">
          <Left />
          <div className="content_right">
            <div className="title_product">
              <h2>Tin tức</h2>
            </div>
            <div className="row g-md-4 g-sm-3 g-2">
              {news.map((news, idx) => (
                <div
                  key={`news-${idx}`}
                  className="col-lg-4 col-md-4 col-sm-6 col-6"
                >
                  <ItemsNews
                    name={news.name}
                    des={news.description}
                    photo={news.photo}
                    id={news.id}
                    slug={news.slug}
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

export default News;
