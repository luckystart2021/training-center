import { Router, useRouter } from "next/router";
import React, { FormEventHandler, useEffect, useState } from "react";
import UserTemplate from "../../src/containers/UserTemplate";
import {
  Answer,
  AnswerChecked,
  LicenseType,
  Question,
  Test,
  TestList,
} from "../../src/models/Question";
import userRequestService from "../../src/services/userService/user.service";
import style from "./style.module.scss";

const namespace = "on thi";

let countInterval = null;

let count = 0;

let isStartCount = false;

const OnThi = (props) => {
  const title = "Thi sát hạch lý thuyết lái xe online";

  const router = useRouter();

  const [loaiBang, setLoaiBang] = useState<LicenseType[]>([]);

  const [boDe, setBoDe] = useState<TestList>(new TestList(-1));

  const [questions, setQuestions] = useState<Question[]>([]);

  const [countTime, setCountTime] = useState<number>(count);

  const [curentQuestions, setCurentQuestions] = useState<Question>(
    new Question()
  );

  const [answersChecked, setAnswersChecked] = useState<AnswerChecked[]>([]);

  const getListLicensesType = () => {
    userRequestService.getLicenseType().then((license) => {
      setLoaiBang(license.data.map((item) => new LicenseType(item)));
    });
  };

  useEffect(() => {
    handleSelectBoCauHoi(loaiBang[0]);
    setAnswersChecked([]);
  }, [loaiBang]);

  useEffect(() => {
    if (!countInterval && boDe) {
      console.log("object");
      count = boDe.timeSeconds;
    } else {
      count = boDe.timeSeconds;
    }
    setAnswersChecked([]);
  }, [questions, boDe]);

  const getTestList = (idLoaiDe: number) => {
    userRequestService.layDanhSachBoDe(idLoaiDe).then((res) => {
      setBoDe(new TestList(idLoaiDe, res.data));
    });
  };

  useEffect(() => {
    getListLicensesType();
    return () => {
      stopCountDown();
    };
  }, []);

  const startCountDown = () => {
    isStartCount = true;
    countInterval = setInterval(() => {
      if (count) {
        count--;
        setCountTime(count);
      }
    }, 1000);
  };

  const stopCountDown = () => {
    isStartCount = false;
    count = boDe.timeSeconds;
    clearInterval(countInterval);
  };

  const handleSelectBoCauHoi = (item: LicenseType) => {
    router.push({
      pathname: "/on-thi",
      query: { bang: item?.licenseName, id: item?.id },
    });

    getTestList(item?.id);
    setAnswersChecked([]);
  };

  const renderLoaiBang = () => {
    return loaiBang.map((item) => (
      <li className="nav-item mx-2" key={item.id}>
        <a
          className="nav-link text-white"
          onClick={() => handleSelectBoCauHoi(item)}
        >
          Đề thi bằng {item.licenseName}
        </a>
      </li>
    ));
  };

  const handleSelectBoDe = (item: Test) => {
    userRequestService.getQuestions(item.id).then((res) => {
      const data = res.data.map((item, index) => new Question(item, index));
      setQuestions(data);
      if (data.length) {
        setCurentQuestions(data[0]);
        stopCountDown();
      }
    });
  };

  const renderBoDe = () => {
    return boDe?.suite.map((item) => (
      <div className="d-inline">
        <button
          className="btn btn-success rounded m-2"
          onClick={() => handleSelectBoDe(item)}
        >
          {item.name}
        </button>
      </div>
    ));
  };

  const getTimneMinute = (sec: number): string => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec - minutes * 60;
    return sec ? `${minutes ? minutes : "00"}:${seconds ? seconds : "00"}` : "";
  };

  const handleNopBai = () => {
    stopCountDown();

    userRequestService.nopBai(boDe.id, answersChecked).then((res) => {
      console.log(res);
    });
  };

  const renderCauHoi = () => {
    return (
      <div className="row">
        <div className="col-sm-12 col-xl-4 p-3 border">
          <div className="">Câu hỏi</div>
          <div className="row">
            {questions.map((cauHoi, i) => {
              const index = answersChecked.findIndex(
                (item) => item.id === cauHoi.id
              );
              return (
                <div className="col-sm-2 col-xl-3 my-1" key={cauHoi.id}>
                  <button
                    className={`btn btn-${
                      index === -1 ? "success" : "secondary"
                    } rounded w-100`}
                    onClick={() => {
                      setCurentQuestions(cauHoi);
                      if (i === 0 && !isStartCount) startCountDown();
                    }}
                  >
                    {cauHoi.index + 1}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="m-3">
            Thời gian còn lại: {getTimneMinute(countTime)}
          </div>

          <div className="nop__bai">
            <button
              className="btn btn-success btn-lg btn-block mt-3 mb-3"
              disabled={!answersChecked.length}
              onClick={() => handleNopBai()}
            >
              {" "}
              Nộp bài
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-xl-8 p-3 border">
          <div className="">
            <h3>Câu hỏi: {curentQuestions.index + 1}</h3>
            <strong className="fs__17">{curentQuestions.question}</strong>
            {curentQuestions.imgUrl ? (
              <div className="d-flex justify-content-center">
                <img src={curentQuestions.imgUrl} alt="" />
              </div>
            ) : (
              ""
            )}
            <div className="order-details">
              <div className="payment-box">
                {renderCauTraLoi(curentQuestions.answerList)}
              </div>
            </div>
            <div className="d-flex justify-content-around mt-3">
              <button
                className="btn btn-info"
                disabled={curentQuestions.index === 0}
                onClick={() => {
                  if (curentQuestions.index > 0)
                    setCurentQuestions(questions[curentQuestions.index - 1]);
                }}
              >
                câu trước
              </button>
              <button
                className="btn btn-info"
                disabled={curentQuestions.index === questions.length - 1}
                onClick={() => {
                  if (curentQuestions.index < questions.length - 1) {
                    if (!isStartCount) startCountDown();
                    setCurentQuestions(questions[curentQuestions.index + 1]);
                  }
                }}
              >
                câu tiếp theo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleOnCheck = (_index: number): void => {
    if (!isStartCount) startCountDown();
    const data = new AnswerChecked(curentQuestions.id, _index);

    const index = answersChecked.findIndex((item) => item.id === data.id);
    if (index !== -1) {
      answersChecked[index] = data;
    } else {
      answersChecked.push(data);
    }
    setAnswersChecked([...answersChecked]);
  };

  // <input type="radio" id={`answer-${index}`} name="radio-group" />

  const renderCauTraLoi = (answerList: Answer[]) => {
    const itemChecked = answersChecked.find(
      (item) => item.id === curentQuestions.id
    );

    return answerList.map((item, index) => {
      return (
        <div className="d-flex align-items-start" key={index}>
          <input
            className={style.input__select}
            type="radio"
            id={`answer-${curentQuestions.id}-${index}`}
            name="radio-group"
            checked={!!itemChecked && itemChecked.answerIndex === index}
            onChange={() => handleOnCheck(index)}
          />
          <label
            className="mb-0"
            htmlFor={`answer-${curentQuestions.id}-${index}`}
          >
            {index} - {item.answer}
          </label>
        </div>
      );
    });
  };

  return (
    <UserTemplate title={title} className={style.on__thi}>
      <nav className="navbar navbar-expand-lg">
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className=" navbar-nav bg-success rounded">
            <li className="nav-item mx-2">
              <a className="nav-link text-white">
                Chọn Hạng thi <span className="sr-only">(current)</span>
              </a>
            </li>
            {renderLoaiBang()}
          </ul>
        </div>
      </nav>
      <div className="container p-5">
        <div className="">{renderBoDe()}</div>
      </div>
      <div className="container">{renderCauHoi()}</div>
    </UserTemplate>
  );
};

export default OnThi;
