import { useEffect, useState } from "react";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import { toast, ToastContainer } from "react-nextjs-toast";
import Inducator from "../../../src/components/indicator";
import Link from "next/link";

export default function Index() {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    adminReqService
      .showListAlbum()
      .then((res) => {
        setAlbums(res.data);
      })
      .catch((err) => {
        toast.notify(`${err.status}`, {
          title: `Thất bại`,
          duration: 3,
          type: "error",
        });
      });
  }, []);
  const renderContent = (albums) => {
    return (
      <div className="card shadow mb-4">
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
                </tr>
              </thead>
              <tbody>
                {albums.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>
                        <Link href={`/admin/album/${item.id}`}>
                          {item.name}
                        </Link>
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
        {albums ? renderContent(albums) : Inducator()}
      </div>
      <div style={{ zIndex: 999999999999 }}>
        <ToastContainer align={"right"} />
      </div>
    </AdminTemplate>
  );
}
