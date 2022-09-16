import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import ShopItem from "../../components/shop-page/shop-item";

const findItem = (products, category) => {
  const data = products.find((item) => item.title === category);
  return data?.items;
};

const ShopCategoryRoute = () => {
  const shopItems = useSelector((state) => state.shopItems.items);
  const loadingError = useSelector((state) => state.shopItems.loadingError);
  const loadingState = useSelector((state) => state.categoriesItem.isLoading);
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
    <div className="relative px-4 md:py-14 pb-4">
      <p className="uppercase text-xl text-center font-semibold mb-6">
        {category}
      </p>
      {loadingError && (
        <div className="text-center h-64">
          Could not load {category}. Please try again
        </div>
      )}
      {loadingState === true ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {shopItem &&
            shopItem.map((item) => <ShopItem key={item.id} item={item} />)}
        </div>
      )}
    </div>
  );
};

export default ShopCategoryRoute;
