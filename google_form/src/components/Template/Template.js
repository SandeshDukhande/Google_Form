import React from "react";
import "./Template.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { IconButton } from "@mui/material";

import New from "../../assets/images/New.png";
import Registration from "../../assets/images/Registration.png";
import Quiz from "../../assets/images/Quiz.png";
import Feedback from "../../assets/images/Feedback.png";

function Template() {
  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "1rem", color: "#202124" }}>
            Start new form
          </span>
        </div>
        <div className="template_body">
          <div className="card">
            <img src={New} alt="New" className="card_image" />
            <p className="card_title">New Form</p>
          </div>
          <div className="card">
            <img src={Registration} alt="Registration" className="card_image" />
            <p className="card_title">Registration</p>
          </div>
          <div className="card">
            <img src={Quiz} alt="Quiz" className="card_image" />
            <p className="card_title">Quiz</p>
          </div>
          <div className="card">
            <img src={Feedback} alt="Feedback" className="card_image" />
            <p className="card_title">Feedback</p>
          </div>
        </div>
        <div className="template_right">
          <div className="gallery_button">
            Template Gallery
            <UnfoldMoreIcon />
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Template;
