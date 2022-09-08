import Header from "../../components/home-page/home-components/header.component";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Navigation;
