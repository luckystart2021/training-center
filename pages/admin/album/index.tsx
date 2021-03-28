import { useEffect, useState } from "react";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import { toast, ToastContainer } from "react-nextjs-toast";
import Inducator from "../../../src/components/indicator";
import Link from "next/link";
import { useRouter } from "next/router";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export default function Index() {
  const [albums, setAlbums] = useState(null);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [ladingRefetch, setladingRefetch] = useState(false);

  const refetchData = () => {
    setladingRefetch(true);
    adminReqService
      .showListAlbum()
      .then((res) => {
        setAlbums(res.data);
        setladingRefetch(false);
      })
      .catch((err) => {
        setladingRefetch(false);
        setAlbums(null);
      });
  };
  useEffect(() => {
    refetchData();
  }, []);
  const confirmDelete = (id) => {
    setisLoading(true);
    console.log(id);
    adminReqService
      .deleteAlbumById(id)
      .then((res) => {
        toast.notify(`Xóa Album thành công`, {
          title: `Thành công`,
          duration: 3,
          type: "success",
        });
        refetchData();
        setisLoading(false);
      })
      .catch((err) => {
        toast.notify(`${err.message}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
        setisLoading(false);
      });
  };
  const actionRemoveAlbum = (id) => {
    console.log("remove");
    confirmAlert({
      title: "Xác nhận Album này",
      message: `Bạn có chắc muốn xoá Album này`,
      buttons: [
        {
          label: "Đồng ý",
          onClick: () => confirmDelete(id),
          className: "btn btn-success",
        },
        {
          label: "Không",
          onClick: () => {},
          className: "btn btn-danger",
        },
      ],
    });
  };
  const actionEditAlbum = (id) => {
    router.push(`/admin/album/${id}`);
  };
  const renderContent = (albums) => {
    return (
      <div className="card shadow mb-4">
        {isLoading ? Inducator() : <></>}
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Danh sách album</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "20px" }}>
                    #
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {albums?.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>
                        <Link href={`/admin/album/${item.id}`}>
                          {item.name}
                        </Link>
                      </td>
                      <td>
                        <span
                          className="badge badge-success"
                          onClick={() => actionEditAlbum(item.id)}
                        >
                          <i className="fas fa-edit"></i> Chỉnh sửa
                        </span>
                        <div className="my-2"></div>

                        <span
                          className="badge badge-danger"
                          onClick={() => actionRemoveAlbum(item.id)}
                        >
                          <i className="fas fa-trash"></i> Xóa Album
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
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
        {!ladingRefetch ? renderContent(albums) : Inducator()}
      </div>
      <ToastContainer align={"right"} />
    </AdminTemplate>
  );
}
