import UserTemplate from "../../src/containers/UserTemplate";
import HeaderTitle from "../../src/components/headerTitle";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

const headerData = {
  title: "Giới Thiệu",
};

const information = {
  address: "38 Tây Hòa",
  phone: "thanhphong9718@gmail.com",
  email: "0832210125",
  maps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.807549595758!2d106.76057895063911!3d10.826034992250055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bd92bda2c1%3A0x16607d0fd6c0392f!2zMzggVMOieSBIw7JhLCBQaMaw4bubYyBMb25nIEEsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1612799368639!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"',
  title: "We've Been Thriving in 37 Years The Tech Area",
  description:
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra.</p><p>Business-to-business metrics analytics value proposition fundingangel investor entrepreneur alpha ramen equity gamification. Social proof partner network research.</p><p>Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. Insagittis eg esta ante, sed viverra nunc tinci dunt nec elei fendet tiram.</p>",
  img: "/files/img/information/tt.jpg",
};

export default function AboutPage() {
  const renderAbout = (information) => {
    return (
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="assets/img/about-img1.jpg" alt={`img`} />
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
                  <p><strong>{information.address}</strong></p>
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
                          data-cfemail="ea8f9c85869e8baa8f878b8386c4898587" >
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
                      <a><strong>{information.phone}</strong></a>
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
      {renderAbout(information)}
    </UserTemplate>
  );
}
