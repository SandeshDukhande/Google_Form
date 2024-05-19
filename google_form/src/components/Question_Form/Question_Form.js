import { useEffect, useState } from "react";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import { Select } from "@mui/material";

import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BsTrash } from "react-icons/bs";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { BsFileText } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import { FcRightup } from "react-icons/fc";
import CloseIcon from "@mui/icons-material/Close";

import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

import LabelIcon from "@mui/icons-material/Label";
import "./Question_Form.css";

function Question_Form() {
  const [question, setQuestions] = useState([
    {
      questionText: "Which city is called the capital of Uttar Pradesh?",
      questionType: "radio",
      option: [
        { optionText: "Gurgaon" },
        { optionText: "Belgavi" },
        { optionText: "Lucknow" },
        { optionText: "Mandya" },
      ],
      open: true,
      required: false,
    },
  ]);
  return (
    <div>
      <div className="question_form">
        <br></br>
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
              ></input>
              <input
                type="text"
                className="question_form_top_desc"
                style={{ color: "black" }}
                placeholder="Form Description"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Question_Form;
