import React from "react";
import userRequestService from "../../../src/services/userService/user.service";

const CauHoi = ({ questionList }) => {
  return <div>day la cau hoi</div>;
};

CauHoi.getInitialProps = () => {
  const questionList = userRequestService.getQuestions(1);

  return { questionList };
};

export default CauHoi;
