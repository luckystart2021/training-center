import React, { useState } from "react";
import { Question } from "../../models/Question";

const QuestionItem = ({ questionData, selecttion, ...props }) => {
  const { answerList, question, id, imgUrl, answerIndex, index } = questionData;
console.log(imgUrl)
  return (
    <>
      <div className="card mt-5">
        <div className="card-body">
          <h5 className="card-title">
            <strong>Câu Hỏi {index + 1}</strong> {question}
          </h5>
        </div>
        {imgUrl ? (
          <img
            className="card-img-top"
            src={imgUrl}
            alt={`hình ảnh minh họa cho câu hỏi ${question}`}
          />
        ) : (
          ""
        )}

        <div className="list-group list-group-flush">
          {answerList?.map((item, index) => (
            <div className="custom-control custom-checkbox">
              <input
                type="radio"
                checked={answerIndex === index}
                id={`customRadio${index}`}
                name="radioCauHoi"
                className="custom-control-input"
                onChange={() => selecttion(index)}
              />
              <label
                className="custom-control-label"
                htmlFor={`customRadio${index}`}
              >
                {item.answer}
              </label>
            </div>
          ))}
        </div>
        {props.children}
      </div>
    </>
  );
};

export default QuestionItem;
