import { Routes, Route } from "react-router-dom";

import SignIn_SignUp from "./components/signIn-signUp page/sinIn-signUp-page.component";
import HomePage from "./components/home-page/home-page.component";
import Navigation from "./routes/navigation/navigation.component";
import FooterRoute from "./routes/footer/footer-route.component";
import Shop from "./routes/shop/shop-categories.component";
import ContactPage from "./components/contact-page/contact-page";
import Checkout from "./components/checkout-page/checkout-page.component";
import Favorites from "./components/favorites-page/favorites-page.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FooterRoute />}>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="shop/*" element={<Shop />} />
          <Route path="sign-in" element={<SignIn_SignUp />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
