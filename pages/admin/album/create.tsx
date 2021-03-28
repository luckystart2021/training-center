import { useEffect, useState } from "react";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import { toast, ToastContainer } from "react-nextjs-toast";
import Inducator from "../../../src/components/indicator";
import Link from "next/link";
import utils from "../../../src/components/utils/constant";
import { useRouter } from "next/router";

export default function Create() {
  const [isLoading, setisLoading] = useState(false);
  const router = useRouter();

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
      .createAlbum(data)
      .then((res) => {
        var data2 = new FormData();
        var dataRes = null;
        dataRes = res.data;
        for (let index = 0; index < files.length; index++) {
          data2.append(
            "upload[]",
            event.target.img.files[index],
            event.target.img.files[index]?.name
          );
        }
        data2.append("id_album", `${dataRes.id}`);
        data2.append("title", name);
        data2.append("meta", meta);
        adminReqService
          .addPhotoToAlbum(data2)
          .then((res) => {
            setisLoading(false);
            toast.notify(`Thành Công`, {
              title: `Tạo Photo thành công`,
              duration: 3,
              type: "success",
            });
            setTimeout(() => {
              router.push("/admin/album");
            }, 3000);
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
  const renderContent = () => {
    return (
      <div className="card shadow mb-4">
        <div className="card-body">
          <form onSubmit={postFormData}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="albumName">Tên Album</label>
                <input
                  type="text"
                  className="form-control"
                  id="albumName"
                  name="albumName"
                  placeholder="Tên album"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="addImage">Ảnh</label>
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
                Tạo Album
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  console.log(isLoading);
  return (
    <AdminTemplate title="Album">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Album</h1>
          <Link href="/admin/album/create">
            <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              {" "}
              <i className="fas fa-download fa-sm text-white-50"></i> Thêm Album
            </a>
          </Link>
        </div>
        {renderContent()}
      </div>
      <ToastContainer align={"right"} style={{ zIndex: 999999999999 }} />
    </AdminTemplate>
  );
}
