import React from "react";
import "./CreateNewForm.css";
import { FiStar, FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { IoMdFolderOpen } from "react-icons/io";

import ColorLensIcon from "@mui/icons-material/ColorLens";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ReactComponent as Logo } from "../../assets/svg_icons/Logo.svg";

import { colors, makeStyles } from "@mui/material";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Question_Form from "../Question_Form/Question_Form";

function CreateNewForm() {
  return (
    <>
      <div className="form_header">
        <div className="form_header_left">
          <Logo style={{ height: "2.75rem", width: "2.5rem" }} />
          <input
            type="text"
            placeholder="Untitled Form"
            className="form_name"
            value=""
          />
          <IoMdFolderOpen
            className="form_header_icon"
            style={{ marginRight: "10px" }}
          />
          <FiStar
            className="form_header_icon"
            style={{ marginRight: "10px" }}
          />
          <span style={{ fontSize: "12px", fontWeight: "600" }}>
            All changes are saved
          </span>
        </div>
        <div className="form_header_right">
          <IconButton>
            <ColorLensIcon />
          </IconButton>
          <IconButton>
            <AiOutlineEye />
          </IconButton>
          <IconButton>
            <FiSettings />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
      <div>
        <Paper className="root">
          <Tabs
            className="tabs"
            textColor="primary"
            indicateColor="Primary"
            centered
          >
            <Tab label="Questions" className="tab"></Tab>
            <Tab label="Responses" className="tab"></Tab>
          </Tabs>
        </Paper>
      </div>
      <Question_Form />
    </>
  );
}

export default CreateNewForm;
