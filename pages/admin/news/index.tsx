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
  try {
    allNews = await adminReqService.showAllNews();
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
  console.log(props.err);
  function imageFormatter(cell, row) {
    return <img src={Utils.baseURL + `${cell}`} alt={row.title} />;
  }

  const [listNews, setlistNews] = useState(props.allNews);
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

  function removeNews(row) {
    adminReqService
      .postRemoveNews(row.id)
      .then((res) => {
        let arrTemp = [...listNews];
        const filteredItems = arrTemp.filter((item) => item !== row);

        console.log(filteredItems);
        setlistNews(filteredItems);
        toast.notify(`Đã xoá bài viết ID: ${row.id}`, {
          title: "Thành công",
          duration: 5,
          type: "success",
        });
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

  function submitDelete(row) {
    confirmAlert({
      title: "Xác nhận xoá bài viết",
      message: `Bạn có chắc muốn xoá bài viết có ID: ${row.id}`,
      buttons: [
        {
          label: "Đồng ý",
          onClick: () => removeNews(row),
        },
        {
          label: "Không",
          onClick: () => {},
        },
      ],
    });
  }

  function renderBadgesStatus(cell, row) {
    return (
      <span className="badge badge-danger" onClick={() => submitDelete(row)}>
        Xoá Bài
      </span>
    );
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
      formatter: renderBadgesStatus,
    },
  ];

  return (
    <AdminTemplate title="Tin tức & thông báo">
      <div className="container-fluid">
        {AdminHeader("Danh sách bài viết đã duyệt")}
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
