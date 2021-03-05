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

Index.getInitialProps = async (ctx: DocumentContext) => {
  let listNewsUnApprove = null;
  let err = null;
  adminReqService
    .getListNewsUnApprove()
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  try {
  } catch (error) {}

  return {
    props: {
      listNewsUnApprove: listNewsUnApprove?.data,
      error: err,
    },
  };
};

export default function Index({ props }) {
  function imageFormatter(cell, row) {
    return <img src={Utils.baseURL + `${cell}`} alt={row.title} />;
  }

  const [listNews, setlistNews] = useState(props.listNewsUnApprove);
  const products = listNews;

  function actionApprove(row) {
    console.log("actionApprove", row.id);
    adminReqService
      .postApproveNews(row.id)
      .then((res) => {
        let arrTemp = [...listNews];
        const filteredItems = arrTemp.filter((item) => item !== row);

        console.log(filteredItems);
        setlistNews(filteredItems);
      })
      .catch((error) => console.log(error.message));
  }

  function actionDelete() {
    console.log("actionDelete");
  }

  function actionReview() {
    console.log("actionReview");
  }

  function renderButtonAction(cell, row) {
    if (row.id !== "") {
      return (
        <>
          <button
            onClick={() => actionDelete()}
            className="btn btn-danger btn-icon-split"
          >
            <span className="icon text-white-50">
              <i className="fas fa-trash"></i>
            </span>
            <span className="text">Preview</span>
          </button>
          <div className="my-2"></div>
          <button
            onClick={() => actionApprove(row)}
            className="btn btn-success btn-icon-split"
          >
            <span className="icon text-white-50">
              <i className="fas fa-check"></i>
            </span>
            <span className="text">Duyệt</span>
          </button>
          <div className="my-2"></div>

          <button
            onClick={() => actionDelete()}
            className="btn btn-danger btn-icon-split"
          >
            <span className="icon text-white-50">
              <i className="fas fa-trash"></i>
            </span>
            <span className="text">Xóa</span>
          </button>
        </>
      );
    }
  }

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
      dataField: "title",
      text: "Tiêu đề",
      headerStyle: (colum, colIndex) => {
        return { "white-space": "nowrap" };
      },
    },
    {
      dataField: "description",
      text: "Mô tả",
    },
    {
      dataField: "view",
      text: "Lượt xem",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: "80px", textAlign: "center" };
      },
    },
    {
      dataField: "img",
      text: "Thumnal",
      sort: true,
      formatter: imageFormatter,
    },
    {
      dataField: "status",
      text: "Trạng thái",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: "80px", textAlign: "center" };
      },
    },
    {
      dataField: "created_at",
      text: "Ngày tạo",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: "150px", textAlign: "center" };
      },
    },
    {
      dataField: "created_by",
      text: "Người tạo",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: "150px", textAlign: "center" };
      },
    },
    {
      dataField: "",
      text: "Hành động",
      formatter: renderButtonAction,
    },
  ];

  const dataCover = [
    {
      id: "",
      title: "",
      description: "",
      view: "",
      img: "",
      status: "",
      created_at: "",
      created_by: "",
    },
  ];
  return (
    <AdminTemplate title="Tin tức & thông báo">
      <div className="container-fluid">
        {AdminHeader("Danh sách bài viết cần duyệt")}
        <div className="row">
          <div className="col-lg-12">
            <BootstrapTable
              keyField="id"
              data={products ?? dataCover}
              noDataIndication={() => <div>No Registers available</div>}
              columns={columns}
              wrapperClasses="table-responsive"
            />
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}
