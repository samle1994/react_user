import Header from "./layout/Header";
import Footer from "./layout/Footer";
import routes from "./../routes";
import { Routes, Route } from "react-router-dom";
import ActionTypes from "./../store/actions";
import { useDispatch } from "react-redux";
import api from "./../services/api";
const DefaultLayout = () => {
  const dispatch = useDispatch();

  const InfoAction = (data, productlist) => {
    dispatch({
      type: ActionTypes.SHOW_INFO,
      info: data,
      product_list: productlist,
    });
    dispatch({
      type: ActionTypes.PRODUCT_LIST,
      product_list: productlist,
    });
  };
  const request1 = api.get("showinfo");
  const request2 = api.get("productlist");
  api.promise([request1, request2]).then(
    api.spread((...res) => {
      if (res[0].data.errorCode === 0 && res[0].data.errorCode === 0) {
        InfoAction(res[0].data.data, res[1].data.data);
      }
    })
  );

  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default DefaultLayout;
