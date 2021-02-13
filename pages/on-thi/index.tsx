import Link from "next/link";
import React, { useState } from "react";
import QuestionComponent from "../../src/components/question";
import UserTemplate from "../../src/containers/UserTemplate";
import { Answer, Question } from "../../src/models/Question";
import userRequestService from "../../src/services/userService/user.service";

const _questionList: Question[] = [
  new Question({
    id: 1,
    index: 1,
    question: "day là cau hoi 1",
    AnswerList: [
      new Answer(1, "cau tra loi 1-1"),
      new Answer(2, "cau tra loi 1-2"),
      new Answer(3, "cau tra loi 1-3"),
    ],
  }),
];

const OnThi = ({ questionList, ...props }) => {
  console.log(questionList);
  const [questions] = useState(_questionList);

  const [currentQuestion, setcurrentQuestion] = useState(questions[0]);

  const nextQuestion = () => {};

  const prevQuestion = () => {};

  return (
    <UserTemplate>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="custom-content-title text-center mb-3">
            <h2>Bộ Đề Thi Thử Lý Thuyết Lái Xe Ô tô B2 600 Câu</h2>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="col-lg-12 col-md-12">
                <div className="cart-totals">
                  <h3>Kết quả bài làm</h3>
                  <div className="ket-qua-bai-thi">
                    <div>
                      <span>Đề số: </span>
                      <label className="text-green-color" htmlFor="de-so">
                        01
                      </label>
                    </div>
                    <div>
                      <span>Số câu đúng: </span>
                      <label className="text-red-color" htmlFor="so-cau-sai">
                        0
                      </label>
                    </div>
                    <div>
                      <span>Số câu sai: </span>
                      <label className="text-red-color" htmlFor="so-cau-sai">
                        35
                      </label>
                    </div>
                    <div>
                      <span>Kết quả: </span>
                      <label htmlFor="ket-qua">
                        <strong className="text-red-color">
                          KHÔNG ĐẠT - Sai câu điểm liệt
                        </strong>
                      </label>
                    </div>
                    <div>
                      <span>Đáp án sai: </span>
                      <label htmlFor="dap-an-sai" className="text-red-color">
                        Tô màu đỏ
                      </label>
                    </div>
                    <div>
                      <span>Đáp án đúng: </span>
                      <label htmlFor="dap-an-dung" className="text-blue-color">
                        Tô màu xanh
                      </label>
                    </div>
                    <div>Kiểm tra lại đáp án đúng bên dưới!</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="cart-totals">
                  <h3>Câu hỏi</h3>
                  <div className="pagination-area">
                    {/* {listNumberQuestion(listQuestions)} */}
                  </div>
                  {/* className={questions.id === list.id ? "page-numbers current" : "page-numbers"} */}
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="cart-totals">
                  <div className="custom-title-card">
                    <h3>Thời gian còn lại: 21:34</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12">
                <div className="cart-totals">
                  <div className="custom-title-card">
                    <button className="btn btn-primary"> NỘP BÀI THI</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <QuestionComponent
                question={currentQuestion}
                nextQuestion={nextQuestion}
                prevQuestion={prevQuestion}
              />
            </div>
          </div>
        </div>
      </section>
    </UserTemplate>
  );
};

OnThi.getInitialProps = async () => {
  let questionList = null;
  try {
    questionList = await userRequestService.getQuestions(1);
  } catch (error) {
    console.log(error);
  }

  return { questionList };
};

export default OnThi;
