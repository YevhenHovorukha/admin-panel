import { Outlet } from "react-router-dom";

import Header from "../../components/Header";
import Menu from "../../components/Menu";

import { MainBox, LayoutBox } from "./styled";

const MainLayout = () => {
  return (
    <LayoutBox>
      <Menu />
      <MainBox>
        <Header />
        <Outlet />
      </MainBox>
    </LayoutBox>
  );
};

export default MainLayout;
