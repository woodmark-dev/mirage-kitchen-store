import { useSelector } from "react-redux";
import FavoritesItem from "./favorites-item.component";

const Favorites = () => {
  const favItems = useSelector((state) => state.favItems);

  return (
    <div className="pb-10 md:px-28 md:pt-8 mb-32 flex flex-col justify-center items-center">
      <div className="text-center text-2xl font-semibold mb-8 font-serif">
        Favorite Items
      </div>
      {favItems.length === 0 ? (
        <p className="text-center uppercase my-12">
          You have no favorite items yet
        </p>
      ) : (
        <ul className="p-6 grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-2">
          {favItems.map((item) => {
            return <FavoritesItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
