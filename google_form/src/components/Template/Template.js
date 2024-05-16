import React from "react";
import "./Template.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { IconButton } from "@mui/material";
import UnfoldMore from "@mui/icons-material/UnfoldMore";

function Template() {
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "1rem", color: "#202124" }}>
            Start new form
          </span>
        </div>
        <div className="template_right">
          <div className="gallery_button">
            Template Gallery
            <UnfoldMore />
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="template_body"></div>
      </div>
    </div>
  );
}

export default Template;
