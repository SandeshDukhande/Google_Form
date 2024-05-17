import React, { useState } from "react";
import "./Sidebar.css";

import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { Drawer } from "@mui/material";
import { Divider } from "@mui/material";
import { ReactComponent as Docs } from "../../assets/svg_icons/Docs.svg";
import { ReactComponent as Excel } from "../../assets/svg_icons/Excel.svg";
import { ReactComponent as Slides } from "../../assets/svg_icons/Slides.svg";
import { ReactComponent as Form } from "../../assets/svg_icons/Form.svg";

import { FiSettings } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";

function Sidebar() {
  const [state, setState] = useState({
    left: false,
  });

  const toggleSidebar = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className="sidebarList" role="presentation">
      <List>
        <ListItem>
          <ListItemText
            style={{ fontSize: "3rem", marginLeft: "0.25rem", marginRight: "" }}
          >
            <span
              style={{
                color: "#5f6386",
                fontSize: "1.5rem",
                fontWeight: "100",
                fontFamily: "Product Sans, Arial, sans-serif",
              }}
            >
              Other Web Apps
            </span>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />

      <List
        style={{ marginLeft: "8px", marginRight: "8px", marginTop: "15px" }}
      >
        <ListItem className="list_item">
          <Docs style={{ height: "1.5rem", width: "1.5rem" }} />
          <div
            style={{
              marginLeft: "1.25rem",
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "grey",
            }}
          >
            Docs
          </div>
        </ListItem>
        <ListItem className="list_item">
          <Excel style={{ height: "1.5rem", width: "1.5rem" }} />
          <div
            style={{
              marginLeft: "1.25rem",
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "grey",
            }}
          >
            Excel
          </div>
        </ListItem>
        <ListItem className="list_item">
          <Slides style={{ height: "1.5rem", width: "1.5rem" }} />
          <div
            style={{
              marginLeft: "1.25rem",
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "grey",
            }}
          >
            Slides
          </div>
        </ListItem>
        <ListItem className="list_item">
          <Form style={{ height: "1.5rem", width: "1.5rem" }} />
          <div
            style={{
              marginLeft: "1.25rem",
              fontSize: "1.5rem",
              fontWeight: "400",
              color: "grey",
            }}
          >
            Forms
          </div>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem className="list_item">
          <FiSettings />
          <div>Settings</div>
        </ListItem>
        <ListItem className="list_item">
          <BsQuestionCircle />
          <div>Help & Feedback</div>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleSidebar("left", true)}>
        <MenuIcon />
        <Drawer
          open={state["left"]}
          onClose={toggleSidebar("left", false)}
          anchor={"left"}
        >
          {list("left")}
        </Drawer>
      </IconButton>
    </div>
  );
}

export default Sidebar;
