import React from "react";
import "./MainBody.css";

import StorageIcon from "@mui/icons-material/Storage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IconButton } from "@mui/material/";

const MainBody = () => {
  return (
    <div className="mainbody">
      <div className="mainbody_top">
        <div className="mainbody_top_left">Recent Forms</div>

        <div className="mainbody_top_right">
          <div className="mainbody_top_center">
            Owned By Anyone <ArrowDropDownIcon />
          </div>
          <IconButton>
            <StorageIcon style={{ fontSize: "1rem", color: "black" }} />
          </IconButton>
          <IconButton>
            <FolderOpenIcon style={{ fontSize: "1rem", color: "black" }} />
          </IconButton>
        </div>
        <div className="mainbody_docs"></div>
      </div>
    </div>
  );
};

export default MainBody;
