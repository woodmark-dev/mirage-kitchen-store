import { useSelector } from "react-redux";
import FavoritesItem from "./favorites-item.component";

const Favorites = () => {
  const favItems = useSelector((state) => state.favItems);

  console.log(favItems);

  return (
    <div className="px-10 pb-10 md:px-28 md:pt-8 my-16">
      <div className="text-center text-2xl font-semibold mb-8 font-serif">
        Favorite Items
      </div>
      <ul className="p-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-3 gap-2">
        {favItems.map((item) => {
          return <FavoritesItem key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default Favorites;
