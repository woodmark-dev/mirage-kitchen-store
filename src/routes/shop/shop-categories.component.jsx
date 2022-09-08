import { Route, Routes } from "react-router-dom";
import MainShop from "../../components/shop-page/shop";
import ShopCategoryRoute from "../shop-category/shop-category.component";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<MainShop />} />
      <Route path=":category" element={<ShopCategoryRoute />} />
    </Routes>
  );
};

export default Shop;
