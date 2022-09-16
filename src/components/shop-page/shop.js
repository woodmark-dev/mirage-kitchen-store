import { useSelector } from "react-redux";
import ShopCategory from "./shop-category";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";

const MainShop = () => {
  const shopItems = useSelector((state) => state.shopItems.items);
  const loadingState = useSelector((state) => state.shopItems.isLoading);
  const loadingError = useSelector((state) => state.shopItems.loadingError);

  return (
    <div className="md:p-14 md:px-28 px-4">
      {loadingError && (
        <div className="text-center h-48">
          Could not load Items. Please try again
        </div>
      )}
      {loadingState === true ? (
        <LoadingSpinner />
      ) : (
        <div className="flex flex-col gap-10">
          {shopItems.map((item) => (
            <ShopCategory key={item.title} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainShop;
