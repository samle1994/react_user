import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Saleoff from "./components/pages/Saleoff";
import ProductNews from "./components/pages/ProductNews";
import Product from "./components/pages/Product";
import ProductDetail from "./components/pages/ProductDetail";
import Search from "./components/pages/Search";
import News from "./components/pages/News";
import NewsDetail from "./components/pages/NewsDetail";
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
    path: "/san-pham/detail/:slug/:id/",
    component: <ProductDetail />,
  },
  {
    path: "/tin-tuc",
    component: <News />,
  },
  {
    path: "/tin-tuc/:slug/:id/",
    component: <NewsDetail />,
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
