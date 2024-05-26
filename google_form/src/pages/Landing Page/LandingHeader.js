import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DescriptionIcon from "@mui/icons-material/Description";
import AboutUs from "../About/About";

const LandingHeader = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#7b1fa2", borderBottom: "1px solid #6a1b9a" }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="logo">
          <DescriptionIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: "bold", color: "#fff" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            Formify
          </Link>
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          component={Link}
          to="/signup"
          sx={{ ml: 2 }}
        >
          Try for Free
        </Button>
        <Button color="inherit" component={Link} to="/login">
          Sign In
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About Us
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact Us
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default LandingHeader;
