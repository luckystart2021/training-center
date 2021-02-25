import React from "react";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import style from "./style.module.scss";

const QuextionManagement = () => {
  return (
    <AdminTemplate title="Quản Lý Câu Hỏi" className="">
      <div className={style.question__management}>
        <h5>quantion management</h5>
      </div>
    </AdminTemplate>
  );
};

export default QuextionManagement;
