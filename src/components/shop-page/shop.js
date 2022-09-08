import { useSelector } from "react-redux";
import ShopCategory from "./shop-category";

const MainShop = () => {
  const shopItems = useSelector((state) => state.shopItems);
  return (
    <div className="p-14 md:px-28 md:pt-8 my-16">
      <div className="flex flex-col gap-10">
        {shopItems.map((item) => (
          <ShopCategory key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainShop;
