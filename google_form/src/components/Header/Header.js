import React from "react";
import "./Header.css";

import { ReactComponent as Logo } from "../../assets/svg_icons/Logo.svg";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Sidebar />
        <Logo />
        <div className="info">Formify</div>
      </div>

      <div className="header_search">
        <IconButton>
          <SearchIcon />
        </IconButton>

        <input type="text" name="search" placeholder="Search" />
      </div>

      <div className="header_right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
