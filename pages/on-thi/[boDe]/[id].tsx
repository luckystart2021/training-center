import { DocumentContext } from "next/document";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import OnThi from "../index";
import userRequestService from "../../../src/services/userService/user.service";
import { Question } from "../../../src/models/Question";
import QuestionItem from "../../../src/components/itemCauHoi";
import question from "../../../src/components/question";

const DeThi = ({ questionList, ...props }) => {
  const namespace = "on thi";
  const title = `bo de thi so `;
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);

  const [curentQuestions, setCurentQuestions] = useState<Question>(
    new Question()
  );

  useEffect(() => {
    const data = questionList.data.map(
      (item, index) => new Question(item, index)
    );
    setQuestions(data);
    if (data.length) {
      setCurentQuestions(data[0]);
    }
  }, []);

  const renderContent = () => {
    return (
      <div className="d-none">
        {questionList.data.map((item, index) => (
          <div className="" key={index}>
            <p>{item.question_name}</p>
            {item.answers.map((answer, idx) => (
              <p key={idx}>
                Câu sô {idx + 1}: {answer.answer}
              </p>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const handleChangeQuestion = (isNext: boolean = true) => {
    const data = questions.find(
      (item) =>
        item.index ===
        (isNext ? curentQuestions.index + 1 : curentQuestions.index - 1)
    );
    setCurentQuestions(data);
  };

  const handleSelection = (index: number) => {
    setCurentQuestions({ ...curentQuestions, answerIndex: index });
  };

  return (
    <>
      <OnThi>
        <section className={style.bai__thi}>
          <QuestionItem
            questionData={curentQuestions}
            onChange={handleChangeQuestion}
            selecttion={handleSelection}
          >
            <div className="card-body d-flex justify-content-around">
              <div className="">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleChangeQuestion(false)}
                  disabled={curentQuestions.index === 0}
                >
                  Câu Trước
                </button>
              </div>
              <div className="">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => handleChangeQuestion()}
                  disabled={curentQuestions.index === questions.length - 1}
                >
                  Câu Tiếp
                </button>
              </div>
            </div>
          </QuestionItem>
        </section>

        {renderContent()}
      </OnThi>
    </>
  );
};

DeThi.getInitialProps = async (ctx: DocumentContext) => {
  let questionList = null;
  const id = typeof ctx.query.id === "string" ? ctx.query.id : ctx.query.id[0];
  const boDe =
    typeof ctx.query.boDe === "string" ? ctx.query.boDe : ctx.query.boDe[0];

  try {
    questionList = await userRequestService.getQuestions(id);
  } catch (error) {
    console.log(error);
  }

  return { questionList, boDe, id };
};

export default DeThi;
