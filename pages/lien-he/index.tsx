import UserTemplate from "../../src/containers/UserTemplate";
import headerTitle from "../../src/components/headerTitle";
import Link from "next/link";
import Head from "next/head";
import { DocumentContext } from "next/document";
import userRequestService from "../../src/services/userService/user.service";
import ReactHtmlParser from "react-html-parser";

const headerData = {
  title: "Liên Hệ",
};

ContactPage.getInitialProps = async (ctx: DocumentContext) => {
  let information = null;

  try {
    information = await userRequestService.getInformation();
  } catch (error) {}
  return {
    props: {
      information: information.data,
    },
  };
};

export default function ContactPage({ props }) {
  const renderContact = (information) => {
    const renderContactForm = () => {
      return (
        <form id="contactForm">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  required
                  data-error="Vui lòng nhập tên"
                  placeholder="Name"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  required
                  data-error="Vui lòng nhập Email"
                  placeholder="Email"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  required
                  data-error="Vui lòng nhập Số điện thoại"
                  className="form-control"
                  placeholder="Phone"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="msg_subject"
                  id="msg_subject"
                  className="form-control"
                  required
                  data-error="Vui lòng nhập tiêu đề"
                  placeholder="Subject"
                />
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols={30}
                  rows={5}
                  required
                  data-error="Vui lòng nhập nội dung"
                  placeholder="Your Message"
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <button type="submit" className="btn btn-primary">
                GỬI LIÊN HỆ
              </button>
              <div id="msgSubmit" className="h3 text-center hidden"></div>
              <div className="clearfix"></div>
            </div>
          </div>
        </form>
      );
    };
    const renderInformationContact = (information) => {
      return (
        <ul>
          <li>
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <span>Địa chỉ</span>
            {information.address}
          </li>
          <li>
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <span>Email</span>
            <Link href="#">
              <span
                className="__cf_email__"
                data-cfemail="ea8f9c85869e8baa8f878b8386c4898587"
              >
                {information.email}
              </span>
            </Link>
          </li>
          <li>
            <div className="icon">
              <i className="fas fa-phone-volume"></i>
            </div>
            <span>Phone</span>
            <Link href="#">
              <a>{information.phone}</a>
            </Link>
          </li>
        </ul>
      );
    };
    return (
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <div className="content">
              <span>Gửi Tin Nhắn</span>
              <h2>GỬI YÊU CẦU HỖ TRỢ</h2>
              <p>
                Vui lòng điền thông tin vào form bên dưới để được hỗ trợ. Xin
                cảm ơn!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="contact-info">
                {renderInformationContact(information)}
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="contact-form">{renderContactForm()}</div>
            </div>
          </div>
        </div>
        <div className="bg-map">
          <img src="assets/img/bg-map.png" alt={`img`} />
        </div>
      </section>
    );
  };
  const renderMapsFrame = (maps) => {
    return (
      <div className="map-area">
        {ReactHtmlParser(maps)}
      </div>
    );
  };
  return (
    <UserTemplate title={headerData.title}>
      <Head>
        <title>Liên Hệ</title>
      </Head>
      {headerTitle(headerData)}
      {renderContact(props.information)}
      {renderMapsFrame(props.information.maps)}
    </UserTemplate>
  );
}
