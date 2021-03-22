import { Router, useRouter } from "next/router";
import React, { FormEventHandler, useEffect, useState } from "react";
import UserTemplate from "../../src/containers/UserTemplate";
import {
  Answer,
  AnswerChecked,
  DataQuestionChecked,
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

let isSubmited = false;

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

  const [
    dataQuestionChecked,
    setDataQuestionChecked,
  ] = useState<DataQuestionChecked>(new DataQuestionChecked());

  useEffect(() => {
    handleSelectBoCauHoi(loaiBang[0]);
    setAnswersChecked([]);
  }, [loaiBang]);

  useEffect(() => {
    if (!countInterval && boDe) {
      count = boDe.timeSeconds;
    } else {
      count = boDe.timeSeconds;
    }
    setAnswersChecked([]);
  }, [questions, boDe]);

  const getTestList = (idBoDe: number) => {
    userRequestService.layDanhSachBoDe(idBoDe).then((res) => {
      setBoDe(new TestList(res.data));
    });
  };

  useEffect(() => {
    getListLicensesType();
    return () => {
      stopCountDown();
    };
  }, []);

  const getListLicensesType = () => {
    userRequestService.getLicenseType().then((license) => {
      setLoaiBang(license.data.map((item) => new LicenseType(item)));
    });
  };

  const startCountDown = () => {
    isStartCount = true;
    countInterval = setInterval(() => {
      if (count) {
        count--;
        setCountTime(count);
      } else {
        handleNopBai();
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
      query: { bang: item?.licenseName },
    });

    getTestList(item?.id);
    setAnswersChecked([]);
  };

  const renderLoaiBang = () => {
    const currentBang =
      typeof router.query.bang === "string"
        ? router.query.bang
        : "router.query?.bang[0]";
    return loaiBang.map((item) => (
      <div
        className={`nav-item mx-2 ${
          currentBang === item.licenseName ? style.active : ""
        } ${style.pointer}`}
        key={item.id}
      >
        <a
          className="nav-link text-white"
          onClick={() => handleSelectBoCauHoi(item)}
        >
          Đề thi bằng {item.licenseName}
        </a>
      </div>
    ));
  };

  const handleSelectBoDe = (item: Test) => {
    count = boDe.timeSeconds;
    setCountTime(count);
    router.push({
      pathname: "/on-thi",
      query: { ...router.query, boDe: item?.id, deSo: item?.name },
    });
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
    return boDe?.suite?.map((item) => (
      <div className="d-inline">
        <button
          className={`btn btn-success ${
            Number(router.query.boDe) === item.id ? style.btn__active : ""
          }rounded m-2`}
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
    isSubmited = true;
    const idBoDe = Number(router.query.boDe);
    userRequestService.nopBai(idBoDe, answersChecked).then((res) => {
      const data = new DataQuestionChecked(res.data);
      setDataQuestionChecked(data);
    });
  };

  const handleThiLai = () => {
    isSubmited = false;
    count = boDe.timeSeconds;
    setCountTime(count);
    setAnswersChecked([]);
    setCurentQuestions(questions[0]);
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

              const indexChecked = dataQuestionChecked.resultTests.find(
                (elem) => elem.idQuestion === cauHoi.id
              );
              return (
                <div className="col-4 col-sm-2 col-xl-3 my-1" key={cauHoi.id}>
                  <button
                    className={`btn btn-${
                      isSubmited
                        ? indexChecked &&
                          indexChecked.answer === indexChecked.correctAnswer
                          ? "info"
                          : "warning"
                        : index === -1
                        ? "success"
                        : "secondary"
                    } rounded w-100`}
                    // disabled={isSubmited}
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
              disabled={!answersChecked.length || isSubmited}
              onClick={() => handleNopBai()}
            >
              Nộp bài
            </button>
          </div>
        </div>
        <div className="col-sm-12 col-xl-8 p-3 border">
          {isSubmited ? renderKetQua() : renderCauHoiCauTraLoi()}
        </div>
      </div>
    );
  };

  const renderKetQua = () => (
    <div className="border-bottom">
      <div className="">Kết quả bài làm</div>
      <div className={style.fs_18}>
        <p>
          <strong>{router.query.deSo}</strong>{" "}
        </p>
        <p>Số câu đúng: {dataQuestionChecked.numberOfCorrect} </p>
        <p>Số câu sai: {dataQuestionChecked.numberOfIncorrect}</p>
        <p>Kết quả: {dataQuestionChecked.resultTotal}</p>
      </div>
      <div className="mt-5">
        <button
          className="btn btn-success btn-lg btn-block mt-3 mb-3"
          // disabled={!answersChecked.length || isSubmited}
          onClick={() => handleThiLai()}
        >
          Thi lại
        </button>
      </div>
    </div>
  );

  const renderCauHoiCauTraLoi = () => (
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
          Câu trước
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
          Câu tiếp theo
        </button>
      </div>
    </div>
  );

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

  const renderQuestionTitles = () => (
    <div className="container">
      <div className="text-center m-4">
        <h2>Bộ Đề Thi {router.query.bang}</h2>

        <div className="text-left">
          <span>
            Trong 18 đề thi sát hạch lái xe B2 mỗi đề gồm 35 câu hỏi, mỗi câu
            hỏi chỉ có duy nhất 1 đáp án đúng. Cấu trúc 600 câu hỏi sát hạch lái
            xe B2 có đáp án áp dụng vào mỗi đề thi thi thử lý thuyết B2 này sẽ
            gồm: 1 câu hỏi phần khái niệm; 7 câu hỏi về quy tắc giao thông; 1
            câu hỏi nghiệp vụ vận tải; 1 câu về tốc độ khoảng cách; 1 câu hỏi về
            văn hóa & đạo đức người lái xe; 2 câu hỏi về kỹ thuật lái xe; 1 câu
            hỏi về cấu tạo sữa chữa; 10 câu hỏi biển báo; 10 câu hỏi sa hình kèm
            theo 1 câu hỏi điểm liệt (tình huống gây mất an toàn giao thông
            nghiêm trọng).
          </span>

          <div className="">
            <ul>
              <li>Số câu cần đạt: 32/35 câu trở lên là đậu.</li>
              <li>Thời gian làm bài: 22 phút.</li>
              <li>Đặc biệt: KHÔNG LÀM SAI CÂU ĐIỂM LIỆT (câu hỏi *)</li>
            </ul>
          </div>

          <span>
            <strong>Lưu ý:</strong> Bộ đề thi lý thuyết lái xe B2 này được xây
            dựng dựa trên tài liệu 600 câu hỏi thi GPLX do Bộ GTVT ban hành.
          </span>
          <span>
            Nếu học thuộc hết 18 đề thi thử bằng lái xe B2 này đồng nghĩa với
            việc bạn sẽ nắm chắc việc thi đậu lý thuyết 100% mà không cần phải
            lo lắng.
          </span>

          <span>
            Bộ đề thi thử 600 câu hỏi lý thuyết B2 online này đang trong quá
            trình hoàn thiện nên sẽ có lỗi phát sinh, vì thế nếu có bất cứ đóng
            góp nào. Các bạn đừng ngần ngại để lại comment bên dưới nhé!
          </span>
        </div>
      </div>
    </div>
  );

  const renderManHinhCauTraLoi = () => (
    <>
      <div className="container">{renderCauHoi()}</div>
    </>
  );

  return (
    <UserTemplate title={title} className={style.on__thi}>
<div className="container">
<nav className="nav justify-content-center bg-success rounded">
        <div className="">
          <a className="nav-link text-white">
            Chọn Hạng thi <span className="sr-only">(current)</span>
          </a>
        </div>
        {renderLoaiBang()}

        {/* <a className="nav-link active" href="#">Active link</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link disabled" href="#">Disabled link</a> */}
      </nav>
</div>

      {/* <div className="d-flex justify-content-center">
        <nav className="navbar navbar-expand-lg ">
          <div className="">
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
      </div> */}
      <div className="container p-5">
        <div className="">{renderBoDe()}</div>
      </div>
      {router.query.boDe ? renderManHinhCauTraLoi() : renderQuestionTitles()}
    </UserTemplate>
  );
};

export default OnThi;
