import React, { useState } from "react";
import "./Sidebar.css";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, List, ListItem } from "@mui/material";
import { Drawer } from "@mui/material";

function Sidebar() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleSidebar = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    <div>
      <List>
        <ListItem>Sidebar</ListItem>
      </List>
    </div>;
  };

  return (
    <div>
      <>
        <IconButton onClick={toggleSidebar("left", true)}>
          <MenuIcon />
          <Drawer
            open={state["left"]}
            onClose={toggleSidebar("left", false)}
            anchor={"left"}
          >
            <List>
              <ListItem>Sidebar</ListItem>
            </List>
          </Drawer>
        </IconButton>
      </>
    </div>
  );
}

export default Sidebar;
