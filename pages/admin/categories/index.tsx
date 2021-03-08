import { DocumentContext } from "next/document";
import AdminHeader from "../../../src/components/adminHeader";
import utils from "../../../src/components/utils/constant";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import { toast, ToastContainer } from "react-nextjs-toast";
import { useState } from "react";
import Link from "next/link";

Index.getInitialProps = async (ctx: DocumentContext) => {
  let tintuc = null;
  let thongtin = null;

  console.log(tintuc);
  let err = null;
  try {
    thongtin = await adminReqService.showListCateById(1);
    tintuc = await adminReqService.showListCateById(2);
  } catch (error) {
    err = error;
  }
  return {
    props: {
      tintuc: tintuc?.data,
      thongtin: thongtin?.data,
      err: err,
    },
  };
};

export default function Index({ props }) {
  let [tintuc, settintuc] = useState(props.tintuc);
  let [thongtin, setthongtin] = useState(props.thongtin);

  const currentItem = {
    nameItem: "",
    idItem: "",
    idCate: "",
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(currentItem.idItem);
    console.log(event.target[`${currentItem.nameItem}`].value === "");
    if (event.target[`${currentItem.nameItem}`].value === "") {
      toast.notify(`Vui lòng điền đầy đủ thông tin`, {
        title: `Thất bại`,
        duration: 3,
        type: "error",
      });
    } else {
      var data = JSON.stringify({
        title: event.target[`${currentItem.nameItem}`].value,
        meta: utils.ChangeToSlug(event.target[`${currentItem.nameItem}`].value),
        id_category: currentItem.idCate,
      });
      adminReqService
        .updateChildCategories(currentItem.idItem, data)
        .then((res) => {
          toast.notify(``, {
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
  };

  const onClictBtn = (name, id, idCate) => {
    currentItem.nameItem = name;
    currentItem.idItem = id;
    currentItem.idCate = idCate;
  };

  const renderModal = () => {
    return (
      <div
        className="modal"
        id="createCate"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  defaultValue={`item.title`}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const renderItem = (items) => {
    return (
      <>
        {items.map((item, index) => {
          return (
            <li className="list-group-item" key={index}>
              <form onSubmit={onSubmitForm}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name={`${item.meta}`}
                    defaultValue={item.title}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-success"
                      type="submit"
                      onClick={() =>
                        onClictBtn(item.meta, item.id, item.id_category)
                      }
                    >
                      Chấp nhận
                    </button>
                    <input
                      className="btn btn-danger"
                      type="reset"
                      value="Reset"
                    />
                  </div>
                </div>
              </form>
            </li>
          );
        })}
      </>
    );
  };
  return (
    <AdminTemplate title="Danh mục bài viết">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Danh mục bài viết</h1>
          <button
            type="button"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#createCate"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Thêm danh
            mục
          </button>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Thông báo</h3>
            <ul className="list-group">
              {tintuc ? renderItem(thongtin) : "Không có dữ liệu"}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Tin tức</h3>
            <ul className="list-group">
              {thongtin ? renderItem(tintuc) : "Không có dữ liệu"}
            </ul>
          </div>
        </div>
      </div>
      {renderModal()}
      <ToastContainer align={"right"} />
    </AdminTemplate>
  );
}
