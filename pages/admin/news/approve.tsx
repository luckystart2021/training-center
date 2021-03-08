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
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { toast, ToastContainer } from "react-nextjs-toast";

Index.getInitialProps = async (ctx: DocumentContext) => {
  let result = null;
  let err = null;

  try {
    await adminReqService.getListNewsUnApprove().then((res) => {
      result = res;
    });
  } catch (error) {
    err = error;
  }

  return {
    props: {
      data: result?.data,
      error: err,
    },
  };
};

export default function Index({ props }) {
  function imageFormatter(cell, row) {
    return <img src={Utils.baseURL + `${cell}`} alt={row.title} />;
  }

  console.log(props.data);
  const [listNews, setlistNews] = useState(props.data);
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
        toast.notify(`Cập nhật thành công`, {
          title: `Thành công`,
          duration: 3,
          type: "success",
        });
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
  }

  function confirmApprove(row) {
    console.log("dong ne");
    confirmAlert({
      title: "Xác nhận xoá bài viết",
      message: `Bạn có chắc muốn xoá bài viết có ID: ${row.id}`,
      buttons: [
        {
          label: "Đồng ý",
          onClick: () => actionApprove(row),
        },
        {
          label: "Không",
          onClick: () => {},
        },
      ],
    });
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
          <span className="badge badge-success" onClick={() => actionDelete()}>
            <i className="fas fa-edit"></i> Chỉnh sửa
          </span>

          <div className="my-2"></div>
          <span
            className="badge badge-success"
            onClick={() => confirmApprove(row)}
          >
            <i className="fas fa-check"></i> Duyệt
          </span>

          <div className="my-2"></div>
          <span className="badge badge-danger" onClick={() => actionDelete()}>
            <i className="fas fa-trash"></i> Xóa
          </span>
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
        <ToastContainer align={"right"} />
      </div>
    </AdminTemplate>
  );
}
