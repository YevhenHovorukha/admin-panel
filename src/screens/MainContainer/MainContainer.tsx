import { Container } from "@mui/material";
import Menu from "../../components/Menu";

const MainContainer = () => {
  return (
    <Container
      sx={{
        display: "flex",
        backgroundColor: "grey",
        minHeight: "100vh",
      }}
    >
      <Menu />
    </Container>
  );
};

export default MainContainer;
