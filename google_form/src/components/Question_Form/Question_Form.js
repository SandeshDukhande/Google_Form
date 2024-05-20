import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  IconButton,
  Typography,
  Radio,
  RadioGroup,
  Select,
  Switch,
  MenuItem,
  Button,
} from "@mui/material";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BsTrash } from "react-icons/bs";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import { BsFileText } from "react-icons/bs";
import { FcRightUp } from "react-icons/fc";
import CloseIcon from "@mui/icons-material/Close";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LabelIcon from "@mui/icons-material/Label";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import "./Question_Form.css";

function Question_Form() {
  const [questions, setQuestions] = useState([
    {
      questionText: "Which city is called the capital of Uttar Pradesh?",
      questionType: "radio",
      options: [
        { optionText: "Gurgaon" },
        { optionText: "Belgavi" },
        { optionText: "Lucknow" },
        { optionText: "Mandya" },
      ],
      open: true,
      required: false,
    },
  ]);

  function changeQuestion(text, i) {
    let newQuestion = [...questions];
    newQuestion[i].questionText = text;
    setQuestions(newQuestion);
    console.log(newQuestion);
  }

  function changeOptionValue(text, i, j) {
    var optionsQuestion = [...questions];
    optionsQuestion[i].options[j].optionText = text;
    setQuestions(optionsQuestion);
    console.log(optionsQuestion);
  }

  function addQuestionType(i, type) {
    let qs = [...questions];
    console.log(type);
    qs[i].questionType = type;
    setQuestions(qs);
  }

  function removeOption(i, j) {
    var RemoveOptionQuestion = [...questions];
    if (RemoveOptionQuestion[i].options.length > 1) {
      RemoveOptionQuestion[i].options.splice(j, 1);
      setQuestions(RemoveOptionQuestion);
      console.log(i + "__" + j);
    }
  }

  function addOption(i) {
    var optionsofQuestion = [...questions];
    if (optionsofQuestion[i].options.length < 5) {
      optionsofQuestion[i].options.push({
        optionText: "Option" + (optionsofQuestion[i].options.length + 1),
      });
    } else {
      console.log("Max 5 Options");
    }
    setQuestions(optionsofQuestion);
  }

  function copyQuestion(i) {
    let qs = [...questions];
    var newQuestion = { ...qs[i] };
    setQuestions([...questions, newQuestion]);
  }

  function deleteQuestion(i) {
    let qs = [...questions];
    if (questions.length > 1) {
      qs.splice(i, 1);
    }
    setQuestions(qs);
  }

  function requiredQuestion(i) {
    var reqQuestion = [...questions];
    reqQuestion[i].required = !reqQuestion[i].required;
    console.log(reqQuestion[i].required + " " + i);
    setQuestions(reqQuestion);
  }

  function addMoreQuestionFeild() {
    setQuestions([
      ...questions,
      {
        questionText: "Question",
        questionType: "radio",
        options: [{ optionText: "Option 1" }],
        open: true,
        required: false,
      },
    ]);
  }

  const questionsUI = () => {
    return questions.map((ques, i) => (
      <div>
        <Accordion
          key={i}
          expanded={ques.open}
          className={ques.open ? "add_border" : ""}
        >
          <AccordionSummary
            aria-controls={`panel${i}-content`}
            id={`panel${i}-header`}
            elevation={1}
            style={{ width: "100%" }}
          >
            {ques.open ? (
              <div className="saved_questions">
                <Typography
                  style={{
                    fontSize: "15px",
                    fontWeight: "400",
                    letterSpacing: "0.5px",
                    paddingBottom: "8px",
                  }}
                >
                  {i + 1}. {ques.questionText}
                </Typography>
                {ques.options.map((op, j) => (
                  <div key={j}>
                    <div style={{ display: "flex" }}>
                      <FormControlLabel
                        style={{ marginLeft: "5px", marginBottom: "5px" }}
                        disabled
                        control={
                          <input
                            type={ques.questionType}
                            color="primary"
                            style={{ marginRight: "3px" }}
                            required={ques.required}
                          />
                        }
                        label={
                          <Typography
                            style={{
                              fontFamily: "Roboto, Arial, sans-serif",
                              fontSize: "13px",
                              fontWeight: "400",
                              letterSpacing: "0.5px",
                              lineHeight: "20px",
                              color: "#202124",
                            }}
                          >
                            {op.optionText}
                          </Typography>
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              ""
            )}
          </AccordionSummary>
          <div className="question_boxes">
            <AccordionDetails className="add_question">
              <div className="add_question_top">
                <input
                  type="text"
                  className="questions"
                  placeholder="Questions"
                  value={ques.questionText}
                  onChange={(e) => {
                    changeQuestion(e.target.value, i);
                  }}
                ></input>
                <CropOriginalIcon style={{ color: "#5f6368" }} />
                <Select
                  className="select"
                  style={{ color: "#5f6368", fontSize: "1rem" }}
                >
                  <MenuItem
                    id="text"
                    value="text"
                    onClick={() => {
                      addQuestionType(i, "text");
                    }}
                  >
                    <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
                  </MenuItem>
                  <MenuItem
                    id="checkbox"
                    value="Checkbox"
                    onClick={() => {
                      addQuestionType(i, "checkbox");
                    }}
                  >
                    <CheckBoxIcon
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />{" "}
                    Checkboxes
                  </MenuItem>
                  <MenuItem
                    id="radio"
                    value="Radio"
                    onClick={() => {
                      addQuestionType(i, "radio");
                    }}
                  >
                    <Radio
                      style={{ marginRight: "10px", color: "#70757a" }}
                      checked
                    />
                    Multiple Choice
                  </MenuItem>
                </Select>
                {ques.options.map((op, j) => (
                  <div className="add_question_body" key={j}>
                    {ques.questionType !== "text" ? (
                      <input
                        type={ques.questionType}
                        color="primary"
                        inputProps={{ "aria-label": "secondary checkbox" }}
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                        disabled
                      />
                    ) : (
                      <ShortTextIcon style={{ marginRight: "10px" }} />
                    )}
                    <div>
                      <input
                        type="text"
                        className="text_input"
                        style={{ fontSize: "13px", width: "60px" }}
                        placeholder="Add other option"
                        value={op.optionText}
                        onChange={(e) => {
                          changeOptionValue(e.target.value, i, j);
                        }}
                      />
                      <Button
                        size="small"
                        onClick={() => {
                          addOption(i);
                        }}
                        style={{
                          textTransform: "none",
                          color: "#4285f4",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Add Option
                      </Button>{" "}
                    </div>
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeOption(i, j)}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                ))}
              </div>

              <div className="add_footer">
                <div className="add_question_bottom_left">
                  <Button
                    size="small"
                    style={{
                      textTransform: "none",
                      color: "#4285f4",
                      fontSize: "13px",
                      fontWeight: "600",
                    }}
                  >
                    <FcRightUp
                      style={{
                        border: "2px solid #4285f4",
                        padding: "2px",
                        marginRight: "8px",
                      }}
                    />
                    Answer key
                  </Button>
                </div>
                <div className="add_question_bottom">
                  <IconButton
                    aria-label="Copy"
                    onClick={() => {
                      copyQuestion(i);
                    }}
                  >
                    <FilterNoneIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteQuestion(i);
                    }}
                  >
                    <BsTrash />
                  </IconButton>
                  <span style={{ color: "#5f6368", fontSize: "13px" }}>
                    Required{" "}
                  </span>{" "}
                  <Switch
                    name="checked"
                    color="primary"
                    onClick={() => {
                      requiredQuestion(i);
                    }}
                    checked={ques.required}
                  />
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </div>
              </div>
            </AccordionDetails>
            <div className="question_edit">
              <AddCircleOutlineIcon
                onClick={addMoreQuestionFeild}
                className="edit"
              />
              <OndemandVideoIcon className="edit" />
              <CropOriginalIcon className="edit" />
              <TextFieldsIcon className="edit" />
            </div>
          </div>
        </Accordion>
      </div>
    ));
  };

  return (
    <div>
      <div className="question_form">
        <br />
        <div className="section">
          <div className="question_title_section">
            <div className="question_form_top">
              <input
                type="text"
                className="question_form_top_name"
                style={{ color: "black" }}
                placeholder="Untitled document"
              />
              <br />
              <input
                type="text"
                className="question_form_top_desc"
                style={{ color: "black" }}
                placeholder="Form Description"
              />
            </div>
          </div>
          {questionsUI()}
        </div>
      </div>
    </div>
  );
}

export default Question_Form;
