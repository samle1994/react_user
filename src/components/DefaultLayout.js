import Header from "./layout/Header";
import Footer from "./layout/Footer";
import routes from "./../routes";
import { Routes, Route } from "react-router-dom";
import ActionTypes from "./../store/actions";
import { useDispatch } from "react-redux";
import api from "./../services/api";
const DefaultLayout = () => {
  const dispatch = useDispatch();

  const InfoAction = (data) => {
    dispatch({
      type: ActionTypes.SHOW_INFO,
      info: data,
    });
  };
  api.get("showinfo").then((res) => {
    if (res.data.errorCode === 0) {
      InfoAction(res.data.data);
    }
  });

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
