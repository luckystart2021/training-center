import AdminHeader from "../../../../src/components/adminHeader";
import AdminTemplate from "../../../../src/containers/AdminTemplate";
import React, { useState } from "react";
import { DocumentContext } from "next/document";
import adminReqService from "../../../../src/services/adminService/admin.request.service";
import Utils from "../../../../src/components/utils/constant";
import Link from "next/link";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { toast, ToastContainer } from "react-nextjs-toast";

Index.getInitialProps = async (ctx: DocumentContext) => {
  let allSlider = null;
  let err = null;
  try {
    allSlider = await adminReqService.showAllSlider();
  } catch (error) {
    err = error;
  }
  return {
    props: {
      allSlider: allSlider?.data,
      err: err,
    },
  };
};

export default function Index({ props }) {
  const [listSlider, setListSlider] = useState(props.allSlider);
  const [image, setImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  function actionChange() {
    console.log("actionChange");
  }

  function deleteSlider(row) {
    adminReqService
      .deleteSlider(row.id)
      .then((res) => {
        let arrTemp = [...listSlider];
        const filteredItems = arrTemp.filter((item) => item !== row);

        console.log(filteredItems);
        setListSlider(filteredItems);
        toast.notify(`Đã Xoá Slideer ID: ${row.id}`, {
          title: "Thành công",
          duration: 3,
          type: "success",
        });
      })
      .catch((error) => {
        toast.notify(`Lỗi`, {
          title: `${error.message}`,
          duration: 3,
          type: "error",
        });
      });
  }

  function submitDelete(row) {
    console.log(row.id);
    confirmAlert({
      title: "Xác nhận xoá slider",
      message: `Bạn có chắc muốn xoá slider có ID: ${row.id}`,
      buttons: [
        {
          label: "Đồng ý",
          onClick: () => deleteSlider(row),
        },
        {
          label: "Không",
          onClick: () => {},
        },
      ],
    });
  }
  const renderItemTable = (items) => {
    console.log(items);

    return (
      <>
        {items.map((item, index) => {
          return (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td className="w-25">
                <img
                  src={Utils.baseURL + item.img}
                  className="img-fluid img-thumbnail"
                  alt="Sheep"
                />
              </td>
              <td>{item.title}</td>
              <td>
                <span
                  className={`badge badge-${
                    !item.hide ? "success" : "secondary"
                  }`}
                >
                  {!item.hide ? "Hiện thị" : "Ẩn"}
                </span>
              </td>
              <td>{item.create_by}</td>
              <td>{item.created_at}</td>
              <td>
                <div className="my-2"></div>
                <Link href={`/admin/tuy-chinh/slider/update/${item.id}`}>
                  <button className="btn-no-border btn btn-success btn-icon-split">
                    <span className="icon text-white-50">
                      <i className="fas fa-check"></i>
                    </span>
                    <span className="text">Cập nhật</span>
                  </button>
                </Link>

                <div className="my-2"></div>

                <button
                  onClick={() => submitDelete(item)}
                  className="btn-no-border btn btn-danger btn-icon-split"
                >
                  <span className="icon text-white-50">
                    <i className="fas fa-trash"></i>
                  </span>
                  <span className="text">Xóa</span>
                </button>
              </td>
            </tr>
          );
        })}
      </>
    );
  };

  return (
    <AdminTemplate title="Upload Slider Trang chủ">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Upload Slider Trang chủ</h1>
          <Link href="/admin/tuy-chinh/slider/create">
            <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              <i className="fas fa-download fa-sm text-white-50"></i> Thêm
              slider
            </a>
          </Link>
        </div>
        <div className="row">
          <div className="col-12">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">Hình Ảnh</th>
                  <th scope="col">Tiêu đề</th>
                  <th scope="col">Trạng thái</th>
                  <th scope="col">Người đăng</th>
                  <th scope="col">Ngày đăng</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>{!props.err ? renderItemTable(listSlider) : <></>}</tbody>
            </table>
            {!props.err ? (
              <> </>
            ) : (
              <p style={{ textAlign: "center" }}>{props.err.message}</p>
            )}
          </div>
        </div>
        <ToastContainer align={"self-start"} />
      </div>
    </AdminTemplate>
  );
}
