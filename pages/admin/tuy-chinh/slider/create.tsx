import AdminTemplate from "../../../../src/containers/AdminTemplate";
import React, { useState } from "react";
import { DocumentContext } from "next/document";
import adminReqService from "../../../../src/services/adminService/admin.request.service";
import Utils from "../../../../src/components/utils/constant";
import AdminHeader from "../../../../src/components/adminHeader";
import { toast, ToastContainer } from "react-nextjs-toast";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("Choose file");
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setFileName(event.target.files[0].name);
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  function actionChange() {
    console.log("actionChange");
  }
  const onSubmit = (event) => {
    event.preventDefault();
    var data = new FormData();
    data.append("title", event.target.title.value);
    if (event.target.img.files[0]) {
      data.append(
        "img",
        event.target.img.files[0],
        event.target.img.files[0]?.name
      );
    }

    console.log(data);
    adminReqService
      .createSlider(data)
      .then((res) => {
        console.log(res);

        toast.notify(``, {
          title: "Thành công",
          duration: 3,
          type: "success",
        });
        setTimeout(() => {
          router.push("/admin/tuy-chinh/slider/slider-trang-chu");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.notify(`${error.message}`, {
          title: "Lỗi",
          duration: 5,
          type: "error",
        });
      });
  };

  return (
    <AdminTemplate title="Upload Slider Trang chủ">
      <div className="container-fluid">
        {AdminHeader("Upload Slider Trang chủ")}
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <div className="custom-file ">
                  <input
                    type="file"
                    onChange={onImageChange}
                    name="img"
                    className="custom-file-input form-control"
                    id="customFile"
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    {fileName}
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="titleImage">Title Hình ảnh (SEO)</label>
                <input
                  type="text"
                  className="form-control"
                  id="titleImage"
                  name="title"
                  placeholder="Title"
                />
              </div>
              <div
                className="form-group"
                style={{ float: "right", width: "100%" }}
              >
                <button
                  className="btn btn-success btn-icon-split"
                  style={{ width: "100%" }}
                >
                  <span className="text">Cập nhật</span>
                </button>
              </div>
            </div>
            <div className="col-8">
              <img id="target" src={image ?? `http://placehold.it/1900x720`} />
            </div>
          </div>
        </form>
        <ToastContainer align={"right"} />
      </div>
    </AdminTemplate>
  );
}
