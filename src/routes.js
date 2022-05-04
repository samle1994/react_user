import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Saleoff from "./components/pages/Saleoff";
import ProductNews from "./components/pages/ProductNews";
import Product from "./components/pages/Product";
import ProductDetail from "./components/pages/ProductDetail";
import Search from "./components/pages/Search";
const routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/sale-off",
    component: <Saleoff />,
  },
  {
    path: "/san-pham-moi",
    component: <ProductNews />,
  },
  {
    path: "/san-pham",
    component: <Product />,
  },
  {
    path: "/san-pham/:list",
    component: <Product />,
  },
  {
    path: "/san-pham/:list/:cat",
    component: <Product />,
  },
  {
    path: "/san-pham-detail/:slug/:id/",
    component: <ProductDetail />,
  },
  {
    path: "/search/:keyword",
    component: <Search />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];
export default routes;
