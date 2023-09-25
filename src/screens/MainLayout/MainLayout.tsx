import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu";

import { MainBox } from "./styled";

const MainLayout = () => {
  return (
    <MainBox>
      <Menu />
      <Outlet />
    </MainBox>
  );
};

export default MainLayout;
