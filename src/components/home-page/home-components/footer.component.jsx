import { Link } from "react-router-dom";
import logo from "../../../logo/new-logo.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-12 rounded-bl-3xl w-full">
      <div className="flex gap-5 md:gap-96">
        <div className="flex flex-col">
          <Link to="/">
            <div className="w-32 h-32">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          <div className="flex gap-4">
            <a>
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a>
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
            <a>
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
          <address className="mt-2">
            <p className="mb-1">Address</p>
            <p className="text-xs">
              634 San Antonio Rd, Mountain View, California, 94040
            </p>
          </address>
        </div>
        <div>
          <h3 className="mb-4">Shop</h3>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <Link to="/shop/blenders">blenders</Link>
            <Link to="/shop/stoves">stoves</Link>
            <Link to="/shop/fridges">fridges</Link>
            <Link to="/shop/coffee%20makers">coffee makers</Link>
            <Link to="/shop/deep%20fryers">deep fryers</Link>
            <Link to="/shop/microwaves">microwaves</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
