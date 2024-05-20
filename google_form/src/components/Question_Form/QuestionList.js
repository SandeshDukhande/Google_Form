import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Question from "./Question";
import { reorder } from "./Utils";

const QuestionList = ({ questions, setQuestions, addMoreQuestionField }) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      questions,
      result.source.index,
      result.destination.index
    );
    setQuestions(items);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {questions.map((ques, i) => (
              <Draggable key={i} draggableId={`draggable-${i}`} index={i}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Question
                      ques={ques}
                      i={i}
                      questions={questions}
                      setQuestions={setQuestions}
                      addMoreQuestionField={addMoreQuestionField} // Pass the function here
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <button onClick={addMoreQuestionField}>Add Question</button>
    </DragDropContext>
  );
};

export default QuestionList;
