import ShopItem from "./shop-item";
import { Link } from "react-router-dom";

const ShopCategory = ({ item }) => {
  const { title } = item;
  return (
    <div className="relative pr-10">
      <p className="uppercase text-xl font-semibold mb-4">{title}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 group">
        {item.items
          .map((item) => <ShopItem key={item.id} item={item} />)
          .slice(-3)}

        <div className="absolute top-[40%] -right-10 flex items-center rounded-lg group-hover:bg-zinc-200">
          <Link
            to={title}
            className="font-serif text-sm font-light pl-1 opacity-0 group-hover:opacity-100 flex items-center gap-2"
          >
            show more
            <ion-icon
              className="text-xl p-2 bg-zinc-200 rounded-full"
              name="arrow-forward-outline"
            ></ion-icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
