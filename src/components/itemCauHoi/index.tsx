import React, { useState } from "react";

const QuestionItem = ({ questionData, selecttion, ...props }) => {
  const { answerList, question, id, imgUrl, answerIndex, index } = questionData;
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
          <div className="m-3">
            {answerList?.map((item, index) => (
              <div className="custom-control custom-radio">
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
        </div>
        {props.children}
      </div>
    </>
  );
};

export default QuestionItem;
