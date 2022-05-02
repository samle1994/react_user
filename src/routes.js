import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Saleoff from "./components/pages/Saleoff";
import ProductNews from "./components/ProductNews";
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
    path: "*",
    component: <NotFound />,
  },
];
export default routes;
