import HeroSection from "./home-components/hero-section.component";
import { useSelector } from "react-redux";
import CategoryItem from "./home-components/category-item.component";

const HomePage = () => {
  const categoriesItems = useSelector((state) => state.categoriesItem);

  return (
    <div className="m-auto bg-zinc-50 w-full">
      <HeroSection />
      <div className="p-6 md:px-16 md:pt-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
          {categoriesItems.map((item) => {
            return <CategoryItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
