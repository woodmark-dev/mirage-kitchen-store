import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-12 rounded-bl-3xl">
      <div className="grid grid-cols-3 md:grid-cols-5 gap-y-8">
        <div className="flex flex-col gap-4 row-start-2 col-span-3 md:col-span-2 md:row-auto justify-self-center md:justify-self-start">
          <Link to="/">LOGO</Link>
          <div className="w-6 h-6 flex gap-4">
            <a href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-4">Shop</h3>
          <div className="flex flex-col gap-3 text-sm">
            <div>
              <a href="#">Lorem</a>
            </div>
            <div>
              <a href="#">Lorem</a>
            </div>
            <div>
              <a href="#">Lorem</a>
            </div>
            <div>
              <a href="#">Lorem</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4">Links</h3>
          <div className="flex flex-col gap-3 text-sm">
            <div>
              <a href="#">Lorem</a>
            </div>
            <div>
              <a href="#">Lorem</a>
            </div>
            <div>
              <a href="#">Lorem</a>
            </div>
            <div>
              <a href="#">Lorem</a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-4">Contact</h3>
          <div className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            fugiat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
