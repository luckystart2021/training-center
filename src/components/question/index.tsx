import React from "react";
import { Answer, Question } from "../../models/Question";

type TQuestionComponent = {
  question: Question;
  nextQuestion: () => void;
  prevQuestion: () => void;
};

const QuestionComponent: React.FC<TQuestionComponent> = ({
  question,
  nextQuestion,
  prevQuestion,
  ...props
}) => {
  const renderCauTraLoi = (answerList: Answer[]): JSX.Element[] => {
    return answerList.map(({answer, id}, index: number) => {
      return (
        <p key={index}>
          <input type="radio" id="answer-1" name="radio-group" />
          <label htmlFor="answer-1">
            {index}- {answer}
          </label>
        </p>
      );
    });
  };
  return (
    <React.Fragment>
      <div
        className="cart-totals" /*onClick={() => clickQuestion(props.question)}*/
      >
        {/* <h3>Câu hỏi {props.question?.id}:</h3> */}
        <h3>Câu hỏi: {question.index}</h3>
        <strong className="fs__17">{question.question}</strong>
        <div className="order-details">
          <div className="payment-box">{renderCauTraLoi(question.AnswerList)}</div>
          <button onClick={() => prevQuestion()} className="btn btn-primary">
            Câu trước
          </button>
          <button onClick={() => nextQuestion()} className="btn btn-primary">
            Câu tiếp theo
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionComponent;
