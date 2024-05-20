import React from "react";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { changeOptionValue, addOption, removeOption } from "./Utils";

const Option = ({ op, i, j, ques, questions, setQuestions }) => {
  return (
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
            changeOptionValue(e.target.value, i, j, questions, setQuestions);
          }}
        />
        <button
          size="small"
          onClick={() => addOption(i, questions, setQuestions)}
          style={{
            textTransform: "none",
            color: "#4285f4",
            fontSize: "13px",
            fontWeight: "600",
          }}
        >
          Add Option
        </button>
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => removeOption(i, j, questions, setQuestions)}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default Option;
