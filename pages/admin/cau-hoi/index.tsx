import React from "react";
import axiosService from "../../../src/services/httpService/axios.service";
import userRequestService from "../../../src/services/userService/user.service";

const CauHoi = ({ questionList }) => {
  console.log(questionList);
  return <div>day la cau hoi</div>;
};

CauHoi.getInitialProps = () => {
  const questionList = userRequestService.getQuestions(1);

  return { questionList };
};

export default CauHoi;
