import { Box, Typography } from "@mui/material";
import { StyledLogo } from "./SidebarHeader";
import AccountSettings from "./Account";

import { useContext } from "react";
import { LayoutContext } from "../context";
import logo from "../assets/logo.png";

export const NavBar = () => {
  const { broken, switchToggled, theme } = useContext(LayoutContext);

  return (
    <Box
      px={2}
      py={0.8}
      style={{
        backgroundColor: `${theme === "light" ? "#2ea3f2" : "#0b2948"}`,
        // padding: "1em",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {broken ? (
        <div>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            // align="right"
            padding={1}
            marginRight={1}
            fontSize={"0.9em"}
          >
            Municipalidad de San Martín de los Andes
          </Typography>
        </div>
      ) : (
        <StyledLogo
          onClick={switchToggled}
          style={{
            boxShadow: "3px 3px 4px 0px rgba(0,0,0, 0.5)",
            height: "1.5em",
            width: "1.5em",
          }}
        >
          <span style={{ marginTop: "-0.2em" }}>
            <img src={logo} alt="logo" width={"30px"} />
          </span>
        </StyledLogo>
      )}

      <AccountSettings />
    </Box>
  );
};
