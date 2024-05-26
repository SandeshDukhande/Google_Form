import React from "react";
import "./Template.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { IconButton } from "@mui/material";

import New from "../../assets/images/New.png";
import Registration from "../../assets/images/Registration.png";
import Quiz from "../../assets/images/Quiz.png";
import Feedback from "../../assets/images/Feedback.png";
import Contact_Information from "../../assets/images/Contact_Information.png";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";

function Template() {
  let navigate = useNavigate();

  const createForm = () => {
    // console.log("Create new form clicked");

    const id_ = uuid();

    console.log(id_);

    navigate(`/form/${id_}`);
  };

  return (
    <div className="template_section">
      <div className="template_top">
        <div className="template_left">
          <span style={{ fontSize: "1rem", color: "#202124" }}>
            Start new form
          </span>
        </div>
        <div className="template_body">
          <div className="card" onClick={createForm}>
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
          <div className="card">
            <img
              src={Contact_Information}
              alt="Contact"
              className="card_image"
            />
            <p className="card_title">Contact Information</p>
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
