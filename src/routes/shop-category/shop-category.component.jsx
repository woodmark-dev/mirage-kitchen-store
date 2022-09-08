import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ShopItem from "../../components/shop-page/shop-item";

const findItem = (products, category) => {
  const data = products.find((item) => item.title === category);
  return data?.items;
};

const ShopCategoryRoute = () => {
  const shopItems = useSelector((state) => state.shopItems);
  const [shopItem, setShopItem] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const products = async (category) => {
      const data = await shopItems;
      setShopItem(findItem(data, category));
    };
    products(category);
  }, [shopItems, category]);

  return (
    <div className="relative pr-10">
      <p className="uppercase text-xl font-semibold mb-4">{category}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 group">
        {shopItem &&
          shopItem.map((item) => <ShopItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default ShopCategoryRoute;
