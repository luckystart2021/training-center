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
  console.log(props.information);
  return (
    <AdminTemplate title="Thông tin giới thiệu">
      <div className="container-fluid ">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Thông tin giới thiệu</h1>
          <Link href="/admin/information/update">
            <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
              Cập nhật <i className="fas fa-pen"></i>
            </a>
          </Link>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="col-xs-12 ">
              <div className="well well-sm">
                <div className="row">
                  <div className="col-sm-6 col-md-4">
                    <img
                      src={Utils.baseURL + props.information.img}
                      alt=""
                      className="img-rounded img-responsive"
                    />
                  </div>
                  <div className="col-sm-6 col-md-8">
                    <h4>Tiêu đề: </h4>
                    <p>{props.information.title}</p>
                    <h4>Mô tả: </h4>
                    <p>{props.information.description}</p>
                    <h4>Email: </h4>
                    <p>{props.information.email}</p>
                    <h4>Phone: </h4>
                    <p>{props.information.phone}</p>
                    <h4>Cập nhật lần cuối: </h4>
                    <p>{props.information.created_at}</p>
                    <h4>Maps: </h4>
                    <div className="z-depth-1-half map-container">
                      {ReactHtmlParser(props.information.maps)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminTemplate>
  );
}
