import { Box, Typography } from "@mui/material";
import React from "react";
import { logout, shopping_cart, logo } from "../../utils/images";

const Navbar = () => {
  return (
    <Box
      // position="fixed"
      // top={0}
      // left={0}
      // right={0}
      display="flex"
      justifyContent="space-between"
      padding="20px 48px"
      bgcolor="white"
      zIndex={1000}
      boxShadow={" rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;"}
    >
      <Box>
        <img src={logo} />
      </Box>
      <Box display={"flex"} gap={"40px"}>
        <Typography>Home</Typography>
        <Typography>FAQ</Typography>
        <Typography>Events</Typography>
      </Box>
      <Box
        height={""}
        display={"flex"}
        justifyContent={"space-between"}
        gap={"16px"}
      >
        <img src={shopping_cart} />
        <img src={logout} />
      </Box>
    </Box>
  );
};

export default Navbar;
