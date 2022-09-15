import ShopItem from "./shop-item";
import { Link } from "react-router-dom";

const ShopCategory = ({ item }) => {
  const { title } = item;
  return (
    <div className="relative my-4 md:my-0">
      <div className="flex justify-between">
        <p className="uppercase text-xl font-semibold mb-4">{title}</p>
        <Link
          to={title}
          className="rounded-lg bg-zinc-100 hover:bg-zinc-200 h-8 w-28 flex justify-center items-center"
        >
          <span className="w-20">show more</span>
          <span>&rarr;</span>
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-5">
        {item.items
          .map((item) => <ShopItem key={item.id} item={item} />)
          .slice(0, 3)}
      </div>
    </div>
  );
};

export default ShopCategory;
