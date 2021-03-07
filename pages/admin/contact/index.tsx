import AdminTemplate from "../../../src/containers/AdminTemplate";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DocumentContext } from "next/document";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import Utils from "../../../src/components/utils/constant";
import AdminHeader from "../../../src/components/adminHeader";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { toast, ToastContainer } from "react-nextjs-toast";

Index.getInitialProps = async (ctx: DocumentContext) => {
  let allNews = null;
  let err = null;
  // allNews = await adminReqService.showAllNews();
  try {
    allNews = await adminReqService.showAllContact();
  } catch (error) {
    err = error;
  }
  return {
    props: {
      allNews: allNews?.data,
      err: err,
    },
  };
};

export default function Index({ props }) {
  const [listNews, setlistNews] = useState(props.allNews);
  const products = listNews;

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: "80px", textAlign: "center" };
      },
    },
    {
      dataField: "full_name",
      text: "Họ & Tên",
      headerStyle: (colum, colIndex) => {
        return { "white-space": "nowrap" };
      },
    },
    {
      dataField: "phone",
      text: "Số điện thoại",
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return {
          textAlign: "center",
        };
      },
      style: {
        "word-wrap": "break-word",
        wordWrap: "break-word",
      },
    },
    {
      dataField: "subject",
      text: "Tiêu đề",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { textAlign: "center" };
      },
    },
    {
      dataField: "message",
      text: "Nội dung",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { textAlign: "center" };
      },
    },

    {
      dataField: "created_at",
      text: "Ngày gửi",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { textAlign: "center" };
      },
    },
  ];

  return (
    <AdminTemplate title="Tin tức & thông báo">
      <div className="container-fluid">
        {AdminHeader("Danh sách Liên hệ của khách hàng")}
        <div className="row">
          <div className="col-lg-12">
            <BootstrapTable
              keyField="id"
              data={products ?? []}
              noDataIndication={() => <div>No Registers available</div>}
              columns={columns}
              wrapperClasses="table-responsive"
            />
          </div>
        </div>
        <ToastContainer align={"self-start"} />
      </div>
    </AdminTemplate>
  );
}
