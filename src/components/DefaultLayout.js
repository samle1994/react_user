import Header from "./layout/Header";
import Slider from "./layout/Slider";
import Footer from "./layout/Footer";
import routes from "./../routes";
import { Routes, Route } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Slider />
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
