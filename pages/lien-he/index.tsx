import UserTemplate from "../../src/containers/UserTemplate";
import headerTitle from "../../src/components/headerTitle";
import Link from "next/link";
import Head from "next/head";

const headerData = {
  title: "Liên Hệ",
};

const information = {
  address: "38 Tây Hòa",
  phone: "thanhphong9718@gmail.com",
  email: "0832210125",
  maps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.807549595758!2d106.76057895063911!3d10.826034992250055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527bd92bda2c1%3A0x16607d0fd6c0392f!2zMzggVMOieSBIw7JhLCBQaMaw4bubYyBMb25nIEEsIFF14bqtbiA5LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1612799368639!5m2!1svi!2s" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"',
  title: "Phong",
  description: "Phong",
  img: "/files/img/information/tt.jpg",
};

export default function ContactPage() {
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
                  data-error="Please enter your name"
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
                  data-error="Please enter your email"
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
                  data-error="Please enter your number"
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
                  data-error="Please enter your subject"
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
                  data-error="Write your message"
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
        <iframe src={maps}></iframe>
      </div>
    );
  };
  return (
    <UserTemplate title={headerData.title}>
      <Head>
        <title>Liên Hệ</title>
      </Head>
      {headerTitle(headerData)}
      {renderContact(information)}
      {renderMapsFrame(information.maps)}
    </UserTemplate>
  );
}
