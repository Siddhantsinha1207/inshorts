import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/logo.png";
import { styled } from "@mui/material";
import SideDrawer from "./SideDrawer";

export const Image = styled("img")(({ theme }) => ({
  height: "3.5rem",
  width: "8rem",
  margin: "0 auto",
  cursor: "pointer",
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  padding: 0,
}));

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SideDrawer toggleDrawer={toggleDrawer} open={open} setOpen={setOpen} />
      <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "black" }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Image src={Logo} alt="Inshorts Logo" />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
