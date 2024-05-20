import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  IconButton,
  Typography,
  Select,
  MenuItem,
  Button,
  Switch,
} from "@mui/material";
import CropOriginalIcon from "@mui/icons-material/CropOriginal";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ShortTextIcon from "@mui/icons-material/ShortText";
import SubjectIcon from "@mui/icons-material/Subject";
import Radio from "@mui/icons-material/Radio";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { BsTrash } from "react-icons/bs";
import CloseIcon from "@mui/icons-material/Close";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import { FcRightUp } from "react-icons/fc";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import Option from "./Option";
import {
  addOption,
  changeOptionValue,
  removeOption,
  changeQuestion,
  addQuestionType,
  copyQuestion,
  deleteQuestion,
  requiredQuestion,
  setOptionPoints,
} from "./Utils";

const Question = ({
  ques,
  i,
  questions,
  setQuestions,
  addMoreQuestionField,
}) => {
  return (
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
          <div className="top_header">Choose correct answer</div>
          <div className="add_question_top">
            <input
              type="text"
              className="questions"
              placeholder="Questions"
              value={ques.questionText}
              onChange={(e) => {
                changeQuestion(e.target.value, i, questions, setQuestions);
              }}
            ></input>
            <input
              type="number"
              className="points"
              min="0"
              placeholder="0"
              onChange={(e) => {
                setOptionPoints(e.target.value, i, questions, setQuestions);
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
                  addQuestionType(i, "text", questions, setQuestions);
                }}
              >
                <SubjectIcon style={{ marginRight: "10px" }} /> Paragraph
              </MenuItem>
              <MenuItem
                id="checkbox"
                value="Checkbox"
                onClick={() => {
                  addQuestionType(i, "checkbox", questions, setQuestions);
                }}
              >
                <CheckBoxIcon
                  style={{ marginRight: "10px", color: "#70757a" }}
                />{" "}
                Checkboxes
              </MenuItem>
              <MenuItem
                id="radio"
                value="Radio"
                onClick={() => {
                  addQuestionType(i, "radio", questions, setQuestions);
                }}
              >
                <Radio style={{ marginRight: "10px", color: "#70757a" }} />
                Multiple Choice
              </MenuItem>
            </Select>
            {ques.options.map((op, j) => (
              <Option
                key={j}
                op={op}
                i={i}
                j={j}
                ques={ques}
                questions={questions}
                setQuestions={setQuestions}
              />
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
                onClick={() => copyQuestion(i, questions, setQuestions)}
              >
                <FilterNoneIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => deleteQuestion(i, questions, setQuestions)}
              >
                <BsTrash />
              </IconButton>
              <span style={{ color: "#5f6368", fontSize: "13px" }}>
                Required
              </span>
              <Switch
                name="checked"
                color="primary"
                onClick={() => requiredQuestion(i, questions, setQuestions)}
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
            onClick={(e) => {
              addMoreQuestionField();
            }}
            className="edit"
          />
          <OndemandVideoIcon className="edit" />
          <CropOriginalIcon className="edit" />
          <TextFieldsIcon className="edit" />
        </div>
      </div>
    </Accordion>
  );
};

export default Question;
