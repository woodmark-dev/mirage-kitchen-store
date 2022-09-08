import Footer from "../../components/home-page/home-components/footer.component";
import { Outlet } from "react-router-dom";

const FooterRoute = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default FooterRoute;
