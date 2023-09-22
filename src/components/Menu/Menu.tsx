import { Box } from "@mui/system";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";

import { ReactComponent as MySvgFile } from "../../assets/logos/menuLogo.svg";

const Menu = () => {
  return (
    <Box sx={{ backgroundColor: "#363740", width: "255px", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          margin: "41px 0 0 32px",
        }}
      >
        <Icon sx={{ width: "32px", height: "32px" }}>
          <MySvgFile />
        </Icon>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "19px",
            fontWeight: 700,
            color: "#A4A6B3",
            letterSpacing: "0.4px",
          }}
        >
          Dashboard Kit
        </Typography>
      </Box>
    </Box>
  );
};

export default Menu;
