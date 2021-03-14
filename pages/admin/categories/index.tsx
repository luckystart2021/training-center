import { DocumentContext } from "next/document";
import AdminHeader from "../../../src/components/adminHeader";
import utils from "../../../src/components/utils/constant";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import { toast, ToastContainer } from "react-nextjs-toast";
import { useEffect, useState } from "react";
import Link from "next/link";
import Utils from "../../../src/utils/constant";
import Inducator from "../../../src/components/indicator";

async function reloadChil(id) {
  let listCate = null;
  listCate = await adminReqService.getListCategories(id);
  return listCate.data;
}

export default function Index({ props }) {
  const [tintuc, settintuc] = useState(null);
  const [thongtin, setthongtin] = useState(null);
  const [gioithieu, setgioithieu] = useState(null);
  const [daotao, setdaotao] = useState(null);
  const [khoadaotao, setkhoadaotao] = useState(null);
  const [tragiayphep, settragiayphep] = useState(null);
  const [luuy, setluuy] = useState(null);

  var [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    adminReqService
      .showListCateById(1)
      .then((res) => {
        setthongtin(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
    adminReqService
      .showListCateById(2)
      .then((res) => {
        settintuc(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
    adminReqService
      .showListCateById(3)
      .then((res) => {
        setgioithieu(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
    adminReqService
      .showListCateById(4)
      .then((res) => {
        setdaotao(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
    adminReqService
      .showListCateById(5)
      .then((res) => {
        setkhoadaotao(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
    adminReqService
      .showListCateById(6)
      .then((res) => {
        settragiayphep(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
    adminReqService
      .showListCateById(7)
      .then((res) => {
        setluuy(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
  }, []);
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
        {items?.map((item, index) => {
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
  const onSubmitCreate = (event) => {
    event.preventDefault();
    var data = JSON.stringify({
      title: `${event.target.name.value}`,
      meta: `${Utils.ChangeToSlug(event.target.name.value)}`,
      id_category: parseInt(event.target.idcate.value),
    });
    console.log("data", data);
    adminReqService
      .createChildCategories(data)
      .then((res) => {
        toast.notify(`Tạo danh mục "${event.target.name.value}" thành công`, {
          title: `Thành công`,
          duration: 3,
          type: "success",
        });

        switch (event.target.idcate.value) {
          case 1:
            adminReqService
              .showListCateById(1)
              .then((res) => {
                setthongtin(res.data);
              })
              .catch((err) => {
                toast.notify(`${err.message}`, {
                  title: `Thất bại`,
                  duration: 3,
                  type: "error",
                });
              });
            break;
          case 2:
            adminReqService
              .showListCateById(2)
              .then((res) => {
                settintuc(res.data);
              })
              .catch((err) => {
                toast.notify(`${err.message}`, {
                  title: `Thất bại`,
                  duration: 3,
                  type: "error",
                });
              });
            break;
          case 3:
            adminReqService
              .showListCateById(3)
              .then((res) => {
                setgioithieu(res.data);
              })
              .catch((err) => {
                toast.notify(`${err.message}`, {
                  title: `Thất bại`,
                  duration: 3,
                  type: "error",
                });
              });
            break;
          case 4:
            adminReqService
              .showListCateById(4)
              .then((res) => {
                setdaotao(res.data);
                setisLoading(true);
              })
              .catch((err) => {
                toast.notify(`${err.message}`, {
                  title: `Thất bại`,
                  duration: 3,
                  type: "error",
                });
              });
            break;
          default:
            break;
        }
      })
      .catch((err) => {
        console.log("errror ne me m: ", err);
        toast.notify(`${err.status}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
  };
  const renderCreateForm = () => {
    return (
      <form onSubmit={onSubmitCreate}>
        {isLoading ? (
          <>
            <div className="form-group col-md-4">
              <label htmlFor="idcate">Danh mục</label>
              <select id="idcate" name="idcate" className="form-control">
                <option selected value="1">
                  Thông báo
                </option>
                <option value="2">Tin tức</option>
                <option value="3">Giới thiệu</option>
                <option value="4">Đào tạo</option>
                <option value="5">Khóa đào tạo</option>
                <option value="6">Trả giấy phép lái xe</option>
                <option value="7">Lưu Ý</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="name">Danh Mục Con</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
              ></input>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="btnSubmit"></label>
              <button
                type="submit"
                className="btn btn-success form-group"
                id="btnSubmit"
              >
                Confirm identity
              </button>
            </div>
          </>
        ) : (
          "Loading"
        )}
      </form>
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
        {renderCreateForm()}
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
        <div className="row">
          <div className="col-md-6">
            <h3>Giới thiệu</h3>
            <ul className="list-group">
              {thongtin ? renderItem(gioithieu) : "Không có dữ liệu"}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Đào tạo</h3>
            <ul className="list-group">
              {thongtin ? renderItem(daotao) : "Không có dữ liệu"}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Khóa đào tạo</h3>
            <ul className="list-group">
              {khoadaotao ? renderItem(khoadaotao) : Inducator()}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Trả giấy phép lái xe</h3>
            <ul className="list-group">
              {tragiayphep ? renderItem(tragiayphep) : Inducator()}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Lưu lý</h3>
            <ul className="list-group">
              {luuy ? renderItem(luuy) : Inducator()}
            </ul>
          </div>
        </div>
        
      </div>
      {renderModal()}
      <div style={{ zIndex: 999999999999 }}>
        <ToastContainer align={"right"} />
      </div>
    </AdminTemplate>
  );
}
