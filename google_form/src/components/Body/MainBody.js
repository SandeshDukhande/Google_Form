import React from "react";
import "./MainBody.css";

import StorageIcon from "@mui/icons-material/Storage";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { IconButton } from "@mui/material/";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
        <div className="mainbody_docs">
          <div className="docs_card">
            <img src="" alt="" />
            <div className="doc_card_content">
              <h5></h5>
              <div className="doc_content">
                <div className="content_left">
                  <StorageIcon
                    style={{
                      fontSize: "0.75rem",
                      color: "white",
                      backgroundColor: "#6e2594",
                      padding: "0.4rem",
                      marginRight: "0.25rem",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <MoreVertIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
