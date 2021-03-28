import { useEffect, useState } from "react";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import { toast, ToastContainer } from "react-nextjs-toast";
import Inducator from "../../../src/components/indicator";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocumentContext } from "next/document";
import utils from "../../../src/components/utils/constant";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

DetailAlbums.getInitialProps = async (ctx: DocumentContext) => {
  return {
    props: {
      query: ctx.query,
    },
  };
};

export default function DetailAlbums({ props }) {
  const [album, setAlbum] = useState(null);
  const [saveConfirm, setsaveConfirm] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const id = props.query.id;
  const router = useRouter();

  const refetchData = () => {
    adminReqService
      .showAlbumDetail(id)
      .then((res) => {
        setAlbum(res.data);
      })
      .catch((err) => {
        toast.notify(`${err.status}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
  };
  useEffect(() => {
    refetchData();
  }, []);

  const confirmDelete = (id, isSave = false) => {
    if (isSave) {
      setsaveConfirm(isSave);
    }
    adminReqService
      .deletePhotoById(id)
      .then((res) => {
        toast.notify(`Xóa hình ảnh thành công`, {
          title: `Thành công`,
          duration: 3,
          type: "success",
        });
        refetchData();
      })
      .catch((err) => {
        toast.notify(`${err.status}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
  };

  const postFormData = (event) => {
    setisLoading(true);
    event.preventDefault();
    var name = event.target.albumName.value;
    var meta = utils.ChangeToSlug(event.target.albumName.value);
    var data = JSON.stringify({
      name: name,
      meta: meta,
    });
    var files = event.target.img.files;
    adminReqService
      .updateAlbumById(id, data)
      .then((res) => {
        var data2 = new FormData();
        for (let index = 0; index < files.length; index++) {
          data2.append(
            "upload[]",
            event.target.img.files[index],
            event.target.img.files[index]?.name
          );
        }
        data2.append("id_album", `${id}`);
        data2.append("title", name);
        data2.append("meta", meta);
        adminReqService
          .addPhotoToAlbum(data2)
          .then((res) => {
            event.target.reset()
            setisLoading(false);
            refetchData();
            toast.notify(`Thành Công`, {
              title: `Tạo Photo thành công`,
              duration: 3,
              type: "success",
            });
          })
          .catch((err) => {
            setisLoading(false);
            toast.notify(`${err.message}`, {
              title: `Tạo Photo thất bại`,
              duration: 3,
              type: "error",
            });
          });
      })
      .catch((err) => {
        setisLoading(false);
        toast.notify(`${err.message}`, {
          title: `Tạo Album thất bại`,
          duration: 3,
          type: "error",
        });
      });
  };
  const deletePhoto = (id) => {
    if (saveConfirm) {
      confirmDelete(id);
    } else {
      confirmAlert({
        title: "Xác nhận hình ảnh viết",
        message: `Bạn có chắc muốn xoá hình ảnh này`,
        buttons: [
          {
            label: "Đồng ý và lưu lựa chọn",
            onClick: () => confirmDelete(id, true),
            className: "btn btn-success",
          },
          {
            label: "Đồng ý",
            onClick: () => confirmDelete(id, false),
            className: "btn btn-success",
          },
          {
            label: "Không",
            onClick: () => {},
            className: "btn btn-danger",
          },
        ],
      });
    }
  };
  const renderGallery = (item) => {
    return (
      <div className="photo-gallery">
        <form onSubmit={postFormData}>
          <div className="container">
            <div className="intro">
              <h2 className="text-center">
                <label htmlFor="albumName">Tên Album</label>
                <input
                  style={{ fontSize: "2rem" }}
                  type="text"
                  className="form-control"
                  id="albumName"
                  name="albumName"
                  placeholder="Tên album"
                  defaultValue={item.name}
                />
              </h2>
            </div>
            <div className="row photos">
              {item.photos.map((item, index) => {
                return (
                  <div className="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                    <button
                      className="btn btn-danger delete-button-image"
                      onClick={() => deletePhoto(item.id)}
                    >
                      X
                    </button>
                    <a href={item} data-lightbox="photos">
                      <img
                        className="img-fluid"
                        src={utils.baseURL + item.img}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="addImage">Thêm Ảnh</label>
              <div className="input-group">
                <input
                  type="file"
                  className="img"
                  id="img"
                  accept="image/*"
                  multiple={true}
                />
              </div>
            </div>
          </div>
          {isLoading ? Inducator() : <></>}
          <div className="form-group">
            <button type="submit" className="btn btn-primary col-md-12">
              Cập nhật Album
            </button>
          </div>
        </form>
      </div>
    );
  };
  const renderContent = (album) => {
    return (
      <div className="card shadow mb-4">
        <div className="card-body">{renderGallery(album)}</div>
      </div>
    );
  };

  return (
    <AdminTemplate title="Xem chi tiết album">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Cập nhật Album</h1>
          <button
            type="button"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            data-bs-toggle="modal"
            data-bs-target="#createAlbum"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Thêm danh
            mục
          </button>
        </div>
        {album ? renderContent(album) : Inducator()}
      </div>
      <ToastContainer align={"right"} />
    </AdminTemplate>
  );
}
