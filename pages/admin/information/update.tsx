import AdminHeader from "../../../src/components/adminHeader";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import Utils from "../../../src/components/utils/constant";
import { toast, ToastContainer } from "react-nextjs-toast";

Index.getInitialProps = async (context) => {
  let information = null;

  information = await adminReqService.showInformation();
  return {
    props: {
      information: information?.data,
    },
  };
};

export default function Index({ props }) {
  const checkValid = (event) => {};

  const onSubmit = (event) => {
    event.preventDefault();
    var data = new FormData();
    data.append("address", event.target.address.value);
    data.append("phone", event.target.phone.value);
    data.append("email", event.target.email.value);
    data.append("maps", event.target.maps.value);
    data.append("title", event.target.title.value);
    data.append("description", event.target.description.value);
    if (event.target.img.files[0]) {
      data.append(
        "img",
        event.target.img.files[0],
        event.target.img.files[0]?.name
      );
    }

    console.log(data);
    adminReqService
      .updateInformation(props.information.id, data)
      .then((res) => {
        console.log(res);
        toast.notify(``, {
          title: "Thành công",
          duration: 5,
          type: "success",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.notify(`${error.message}`);
        toast.notify(`${error.message}`, {
          title: "Lỗi",
          duration: 5,
          type: "error",
        });
      });
  };

  return (
    <AdminTemplate title="Thông tin giới thiệu">
      <div className="container-fluid ">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Thông tin giới thiệu</h1>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="col-xs-12 ">
              <div className="well well-sm">
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-sm-6 col-md-4">
                      <img
                        src={Utils.baseURL + props.information.img}
                        alt=""
                        className="img-rounded img-responsive"
                      />
                      <input
                        id="img"
                        name="img"
                        type="file"
                        className="form-control"
                        data-browse-on-zone-click="true"
                      />
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <div className="form-group">
                        <h4>Tiêu đề: </h4>
                        <input
                          className="form-control"
                          type="text"
                          name="title"
                          id="title"
                          defaultValue={props.information.title}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <h4>Mô tả: </h4>
                        <input
                          className="form-control"
                          type="text"
                          name="description"
                          id="description"
                          defaultValue={props.information.description}
                        />
                      </div>
                      <div className="form-group">
                        <h4>Email: </h4>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          defaultValue={props.information.email}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <h4>Phone: </h4>
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          id="phone"
                          defaultValue={props.information.phone}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <h4>Địa chỉ: </h4>
                        <input
                          className="form-control"
                          type="text"
                          name="address"
                          id="address"
                          defaultValue={props.information.address}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <h4>Cập nhật lần cuối: </h4>
                        <p>{props.information.created_at}</p>
                      </div>
                      <div className="form-group">
                        <h4>Maps: </h4>
                        <div className="z-depth-1-half map-container">
                          <textarea
                            className="form-control"
                            defaultValue={props.information.maps}
                            required
                            name="maps"
                            id="maps"
                            cols={30}
                            rows={10}
                          ></textarea>
                          <a href="4">
                            Hướng dẫn cách lấy mã nhúng google maps
                          </a>
                        </div>
                      </div>
                      <div className="form-group ">
                        <button type="submit" className="btn btn-primary">
                          Lưu thông tin
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <ToastContainer align={"right"} />
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}
