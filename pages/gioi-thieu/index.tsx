import UserTemplate from "../../src/containers/UserTemplate";
import HeaderTitle from "../../src/components/headerTitle";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { DocumentContext } from "next/document";
import userRequestService from "../../src/services/userService/user.service";
import Utils from "../../src/utils/constant";

const headerData = {
  title: "Giới Thiệu",
};

AboutPage.getInitialProps = async (ctx: DocumentContext) => {
  let information = null;

  try {
    information = await userRequestService.getInformation();
  } catch (error) {}
  return {
    props: {
      information: information?.data,
    },
  };
};

export default function AboutPage({ props }) {
  const renderAbout = (information) => {
    return (
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src={Utils.baseURL + information.img} alt={`img`} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span>About Us</span>
                <h2>{information.title}</h2>
                {ReactHtmlParser(information.description)}
              </div>
            </div>
          </div>
          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="about-text">
                  <h3>Địa Chỉ</h3>
                  <p>
                    <strong>{information.address}</strong>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="about-text">
                  <h3>Email</h3>
                  <p>
                    <Link href="#">
                      <a>
                        <span
                          className="__cf_email__"
                          data-cfemail="ea8f9c85869e8baa8f878b8386c4898587"
                        >
                          <strong>{information.email}</strong>
                        </span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                <div className="about-text">
                  <h3>Phone</h3>
                  <p>
                    <Link href="#">
                      <a>
                        <strong>{information.phone}</strong>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  return (
    <UserTemplate title={headerData.title}>
      {HeaderTitle(headerData)}
      {renderAbout(props.information)}
    </UserTemplate>
  );
}
