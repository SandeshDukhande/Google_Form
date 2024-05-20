import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";

const LandingHeader = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#7b1fa2", borderBottom: "1px solid #6a1b9a" }}
    >
      {" "}
      {/* Purple background color */}
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <DescriptionIcon sx={{ color: "#fff" }} />{" "}
          {/* White color for icon */}
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}
        >
          {" "}
          {/* White color for text */}
          Formify
        </Typography>
        <Button color="inherit" href="#sign-in">
          {" "}
          {/* Updated href to sign-in */}
          Sign In
        </Button>
        <Button color="inherit" href="#contact-us">
          {" "}
          {/* Added Button for Contact Us */}
          Contact Us
        </Button>
        <Button
          variant="contained"
          color="inherit"
          href="#try-for-free"
          sx={{ ml: 2 }}
        >
          Try for Free
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default LandingHeader;
