import React from "react";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import userRequestService from "../../../src/services/userService/user.service";

const CauHoi = ({ questionList }) => {
  console.log(questionList);
  return <AdminTemplate title="Quản lý câu hỏi">
    <div>day la cau hoi</div>;
  </AdminTemplate>
};

CauHoi.getInitialProps = () => {
  const questionList = userRequestService.getQuestions(1);
  return { questionList };
};
export default CauHoi;