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
        <main>
          <Outlet />
        </main>
      </MainBox>
    </LayoutBox>
  );
};

export default MainLayout;
