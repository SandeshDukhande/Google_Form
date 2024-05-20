export const changeQuestion = (text, i, questions, setQuestions) => {
  let newQuestion = [...questions];
  newQuestion[i].questionText = text;
  setQuestions(newQuestion);
  console.log(newQuestion);
};

export const changeOptionValue = (text, i, j, questions, setQuestions) => {
  var optionsQuestion = [...questions];
  optionsQuestion[i].options[j].optionText = text;
  setQuestions(optionsQuestion);
  console.log(optionsQuestion);
};

export const addQuestionType = (i, type, questions, setQuestions) => {
  let qs = [...questions];
  qs[i].questionType = type;
  setQuestions(qs);
};

export const removeOption = (i, j, questions, setQuestions) => {
  var RemoveOptionQuestion = [...questions];
  if (RemoveOptionQuestion[i].options.length > 1) {
    RemoveOptionQuestion[i].options.splice(j, 1);
    setQuestions(RemoveOptionQuestion);
    console.log(i + "__" + j);
  }
};

export const addOption = (i, questions, setQuestions) => {
  var optionsofQuestion = [...questions];
  if (optionsofQuestion[i].options.length < 5) {
    optionsofQuestion[i].options.push({
      optionText: "Option" + (optionsofQuestion[i].options.length + 1),
    });
  } else {
    console.log("Max 5 Options");
  }
  setQuestions(optionsofQuestion);
};

export const copyQuestion = (i, questions, setQuestions) => {
  let qs = [...questions];
  var newQuestion = { ...qs[i] };
  setQuestions([...questions, newQuestion]);
};

export const deleteQuestion = (i, questions, setQuestions) => {
  let qs = [...questions];
  if (questions.length > 1) {
    qs.splice(i, 1);
  }
  setQuestions(qs);
};

export const requiredQuestion = (i, questions, setQuestions) => {
  var reqQuestion = [...questions];
  reqQuestion[i].required = !reqQuestion[i].required;
  setQuestions(reqQuestion);
};

export const setOptionPoints = (pts, qno, questions, setQuestions) => {
  let newQuestions = [...questions];
  newQuestions[qno].points = pts;
  setQuestions(newQuestions);
};

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
