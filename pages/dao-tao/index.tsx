import { DocumentContext } from "next/document";
import HeaderTitle from "../../src/components/headerTitle";
import LeftView from "../../src/components/leftView";
import UserTemplate from "../../src/containers/UserTemplate";
import userRequestService from "../../src/services/userService/user.service";

const cate = {
  id: 4,
  title: "Đào Tạo",
  meta_url: "dao-tao",
};
Index.getInitialProps = async (ctx: DocumentContext) => {
  let listNews = null;
  let listSubCategories = null;
  let pupolarNews = null;
  try {
    listNews = await userRequestService.getListNews(cate.id, 1);
    listSubCategories = await userRequestService.getListSubCategoriesById(4);
    pupolarNews = await userRequestService.getListNewsPupolar();
  } catch (error) {}
  return {
    props: {
      listNews: listNews?.data,
      cate,
      listSubCategories: listSubCategories?.data,
      pupolarNews: pupolarNews?.data,
    },
  };
};

export default function Index({ props }) {
  var listSubCategories = props.listSubCategories;
  var pupolarNews = props.pupolarNews;
  return (
    <UserTemplate title="Đào Tạo">
      {HeaderTitle(cate)}
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <h3 className="rank-certificate-title text-center">
                HẠNG B1 - B11
              </h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-projects-box">
                    <a href="#">
                      <img src="assets/img/projects/1.jpg" alt="image" />
                    </a>
                    <div className="projects-content">
                      <h3 className="text-center">
                        <a href="#">Flutter Development Flutter Development</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-projects-box">
                    <a href="#">
                      <img src="assets/img/projects/1.jpg" alt="image" />
                    </a>
                    <div className="projects-content">
                      <h3 className="text-center">
                        <a href="#">Flutter Development Flutter Development</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                  <a href="#" className="btn btn-light btn-detail-custom">
                    Chi tiết <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <h3 className="rank-certificate-title text-center">HẠNG B2</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-projects-box">
                    <a href="#">
                      <img src="assets/img/projects/1.jpg" alt="image" />
                    </a>
                    <div className="projects-content">
                      <h3 className="text-center">
                        <a href="#">Flutter Development Flutter Development</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-projects-box">
                    <a href="#">
                      <img src="assets/img/projects/1.jpg" alt="image" />
                    </a>
                    <div className="projects-content">
                      <h3 className="text-center">
                        <a href="#">Flutter Development Flutter Development</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                  <a href="#" className="btn btn-light btn-detail-custom">
                    Chi tiết <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <h3 className="rank-certificate-title text-center">HẠNG C</h3>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-projects-box">
                    <a href="#">
                      <img src="assets/img/projects/1.jpg" alt="image" />
                    </a>
                    <div className="projects-content">
                      <h3 className="text-center">
                        <a href="#">Flutter Development Flutter Development</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-projects-box">
                    <a href="#">
                      <img src="assets/img/projects/1.jpg" alt="image" />
                    </a>
                    <div className="projects-content">
                      <h3 className="text-center">
                        <a href="#">Flutter Development Flutter Development</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 text-center">
                  <a href="#" className="btn btn-light btn-detail-custom">
                    Chi tiết <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              {LeftView({ cate, listSubCategories, pupolarNews })}
            </div>
          </div>
        </div>
      </section>
    </UserTemplate>
  );
}
