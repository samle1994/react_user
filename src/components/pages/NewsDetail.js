import React, { useEffect, useState } from "react";
import api from "./../../services/api";
import { useParams, Link } from "react-router-dom";
import Left from "./../layout/Left";

const ProductDetail = () => {
  const [newsdetail, setnewsdetail] = useState([]);
  const [newsrelate, setnewsrelate] = useState([]);
  const params = useParams();
  const contentRef = React.useRef();
  const loadData = () => {
    api.get(`newsdetail/${params.id}`).then((res) => {
      if (res.data.errorCode === 0) {
        setnewsdetail(res.data.data);
      }

      if (res.data.data.newsRelate) {
        setnewsrelate(res.data.data.newsRelate);
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

  return (
    <>
      <main className="mt-2 mb-3">
        <div className="wrapper d-flex flex-wrap align-items-start">
          <Left />
          <div className="content_right">
            <h2 className="h2_detail">{newsdetail.name}</h2>
            <div className="content" ref={contentRef}></div>
            <span className="span_orther">Bài viết liên quan</span>
            {newsrelate.map((news, idx) => (
              <div key={idx} className="order_news transition">
                <Link to={`/tin-tuc/${news.slug}/${news.id}`}>
                  &raquo; {news.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductDetail;
