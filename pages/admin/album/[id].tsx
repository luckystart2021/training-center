import { useEffect, useState } from "react";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import { toast, ToastContainer } from "react-nextjs-toast";
import Inducator from "../../../src/components/indicator";
import Link from "next/link";
import { useRouter } from "next/router";
import { DocumentContext } from "next/document";
import utils from "../../../src/components/utils/constant";

DetailAlbums.getInitialProps = async (ctx: DocumentContext) => {
  return {
    props: {
      query: ctx.query
    }
  }
}

export default function DetailAlbums({props}) {
  const [album, setAlbum] = useState(null);
  const id = props.query.id

  useEffect(() => {
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
  }, []);
  const renderGallery = (item) => {
    console.log(item.title);
    return (
      <div className="photo-gallery">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">{item.name}</h2>
          </div>
          <div className="row photos">
            {item.photos.map((item, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                  <a href={item} data-lightbox="photos">
                    <img className="img-fluid" src={ utils.baseURL + item.img} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  const renderContent = (album) => {
      console.log(album)
    return (
      <div className="card shadow mb-4">
        <div className="card-body">
          {renderGallery(album)}
        </div>
      </div>
    );
  };

  return (
    <AdminTemplate title="Xem chi tiết album">
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Album</h1>
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
      <div style={{ zIndex: 999999999999 }}>
        <ToastContainer align={"right"} />
      </div>
    </AdminTemplate>
  );
}
