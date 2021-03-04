import AdminHeader from "../../../src/components/adminHeader";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import Utils from "../../../src/components/utils/constant";

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
                <form>
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
                          value={props.information.title}
                        />
                      </div>
                      <div className="form-group">
                        <h4>Mô tả: </h4>
                        <input
                          className="form-control"
                          type="text"
                          name="description"
                          id="description"
                          value={props.information.description}
                        />
                      </div>
                      <div className="form-group">
                        <h4>Email: </h4>
                        <input
                          className="form-control"
                          type="text"
                          name="email"
                          id="email"
                          value={props.information.email}
                        />
                      </div>
                      <div className="form-group">
                        <h4>Phone: </h4>
                        <input
                          className="form-control"
                          type="text"
                          name="phone"
                          id="phone"
                          value={props.information.phone}
                        />
                      </div>
                      <div className="form-group">
                        <h4>Cập nhật lần cuối: </h4>
                        <input
                          className="form-control"
                          type="date"
                          name="created_at"
                          id="created_at"
                          value={props.information.created_at}
                        />
                      </div>
                      <div className="form-group">
                        <h4>Maps: </h4>
                        <div className="z-depth-1-half map-container">
                          <textarea
                            className="form-control"
                            value={props.information.maps}
                            name="maps"
                            id="maps"
                            cols={30}
                            rows={10}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}
