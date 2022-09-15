import { useNavigate } from "react-router-dom";

const CategoryItem = ({ item }) => {
  let navigate = useNavigate();

  const navigationHandler = () => {
    navigate(`/shop/${item.name}`);
  };

  const { name, imgUrl } = item;
  return (
    <div
      onClick={navigationHandler}
      className="flex flex-col gap-3 items-center transition-all duration-1000 hover:scale-105"
    >
      <div className="bg-zinc-100 p-6 mb-1 md:w-80 md:h-90 h-48 flex items-center">
        <img src={imgUrl} alt={item.name} />
      </div>
      <p className="text-center uppercase">{name}</p>
    </div>
  );
};

export default CategoryItem;
