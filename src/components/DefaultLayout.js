import Header from "./layout/Header";
import Footer from "./layout/Footer";
import routes from "./../routes";
import { Routes, Route } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <>
      <Header />

      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
