import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import SignIn_SignUp from "./components/signIn-signUp page/sinIn-signUp-page.component";
import HomePage from "./components/home-page/home-page.component";
import Navigation from "./routes/navigation/navigation.component";
import FooterRoute from "./routes/footer/footer-route.component";
import Shop from "./routes/shop/shop-categories.component";
import ContactPage from "./components/contact-page/contact-page";
import Checkout from "./components/checkout-page/checkout-page.component";
import Favorites from "./components/favorites-page/favorites-page.component";

function App() {
  const userState = useSelector((state) => state.userData.userState);
  return (
    <Routes>
      <Route path="/" element={<FooterRoute />}>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="shop/*" element={<Shop />} />
          <Route
            exact
            path="sign-in"
            element={
              userState === false ? (
                <SignIn_SignUp />
              ) : (
                <Navigate replace to={"/"} />
              )
            }
          />
          <Route path="contact" element={<ContactPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            exact
            path="favorites"
            element={
              userState === true ? (
                <Favorites />
              ) : (
                <Navigate replace to={"/sign-in"} />
              )
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
