import Link from 'next/link'
import Head from 'next/head'

export default function ContactPage() {
    return (
        <>
        <Head>
            <title>Liên Hệ</title>
        </Head>
            {/* HeaderHome */}
            <div className="navbar-area">
                <div className="evolta-responsive-nav">
                    <div className="container">
                        <div className="evolta-responsive-menu">
                            <div className="logo">
                                <Link href="index-2.html">
                                    <a>
                                        <img src="assets/img/white-logo.png" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evolta-nav navbar-style-two">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index-2.html">
                                <img src="assets/img/white-logo.png" alt="logo" />
                            </a>
                            <div
                                className="collapse navbar-collapse mean-menu"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link active">Trang Chủ</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="gioi-thieu"><a className="nav-link">Giới Thiệu</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href='#'><a className="nav-link">Thông Tin</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href='#'><a className="nav-link">Đào Tạo</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href='#'><a className="nav-link">Tin Tức</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="on-thi"><a className="nav-link">Ôn Thi</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href='#'><a className="nav-link">Lưu Ý</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="lien-he"><a className="nav-link">Liên Hệ</a></Link>
                                    </li>
                                </ul>
                                <div className="others-options">
                                    <div className="option-item">
                                        <i className="search-btn flaticon-search"></i>
                                        <i className="close-btn fas fa-times"></i>
                                        <div className="search-overlay search-popup">
                                            <div className="search-box">
                                                <form className="search-form">
                                                    <input
                                                        className="search-input"
                                                        name="search"
                                                        placeholder="Search"
                                                        type="text"
                                                    />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="contact.html">
                                        <a className="btn btn-primary">Gọi Ngay: <strong>0349295446</strong></a>
                                    </Link>
                                    <Link href="contact.html">
                                        <a className="btn btn-primary">Gọi Ngay: <strong>0349295446</strong></a>
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* TitleCategory */}
            <div className="page-title-area">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Gioi Thieu</h2>
                        <ul>
                            <li><a href="index.html">Trang Chủ</a></li>
                            <li>Gioi Thieu</li>
                        </ul>
                    </div>
                </div>
                <div className="dot-shape1">
                    <img src="assets/img/shape/dot1.png" alt={`img`} />
                </div>
                <div className="dot-shape2">
                    <img src="assets/img/shape/dot2.png" alt={`img`} />
                </div>
                <div className="dot-shape3">
                    <img src="assets/img/shape/dot3.png" alt={`img`} />
                </div>
                <div className="dot-shape4">
                    <img src="assets/img/shape/dot4.png" alt={`img`} />
                </div>
                <div className="dot-shape5">
                    <img src="assets/img/shape/dot5.png" alt={`img`} />
                </div>
                <div className="dot-shape6">
                    <img src="assets/img/shape/dot6.png" alt={`img`} />
                </div>
                <div className="dot-shape7">
                    <img src="assets/img/shape/dot1.png" alt={`img`} />
                </div>
                <div className="shape16">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
                <div className="shape17">
                    <img src="assets/img/shape/14.svg" alt={`img`} />
                </div>
                <div className="shape18">
                    <img src="assets/img/shape/15.png" alt={`img`} />
                </div>
                <div className="shape19">
                    <img src="assets/img/shape/16.png" alt={`img`} />
                </div>
                <div className="shape20">
                    <img src="assets/img/shape/14.svg" alt={`img`} />
                </div>
            </div>
            {/* Contact */}
            <section className="contact-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Gửi Tin Nhắn</span>
                            <h2>GỬI YÊU CẦU HỖ TRỢ</h2>
                            <p>Vui lòng điền thông tin vào form bên dưới để được hỗ trợ. Xin cảm ơn!</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="contact-info">
                                <ul>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <span>Địa chỉ</span> CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-envelope"></i>
                                        </div>
                                        <span>Email</span>
                                        <Link href="#">
                                            <span className="__cf_email__"
                                                data-cfemail="ea8f9c85869e8baa8f878b8386c4898587">[email&#160;protected]</span>
                                        </Link>
                                        <Link href="#">
                                            <span className="__cf_email__"
                                                data-cfemail="bbdddac3fbded6dad2d795d8d4d6">[email&#160;protected]</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <i className="fas fa-phone-volume"></i>
                                        </div>
                                        <span>Phone</span>
                                        <Link href="#"><a>+44 587 154756</a></Link>
                                        <Link href="#"><a>+55 5555 14574</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="contact-form">
                                <form id="contactForm" >
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" className="form-control" required
                                                    data-error="Please enter your name" placeholder="Name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" className="form-control" required
                                                    data-error="Please enter your email" placeholder="Email" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="phone_number" id="phone_number" required
                                                    data-error="Please enter your number" className="form-control"
                                                    placeholder="Phone" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control"
                                                    required data-error="Please enter your subject" placeholder="Subject" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" cols={30} rows={5}
                                                    required data-error="Write your message"
                                                    placeholder="Your Message"></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <button type="submit" className="btn btn-primary">
                                                GỬI LIÊN HỆ</button>
                                            <div id="msgSubmit" className="h3 text-center hidden"></div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-map"><img src="assets/img/bg-map.png" alt={`img`} /></div>
            </section>
            {/* Maps */}
            <div className="map-area">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.8158792277713!2d-123.36243578415748!3d48.44087343796659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7381102ff519%3A0xc03e5586418eb3f2!2s2750%20Quadra%20St%2C%20Victoria%2C%20BC%20V8T%204E8%2C%20Canada!5e0!3m2!1sen!2sbd!4v1591454631154!5m2!1sen!2sbd"></iframe>
            </div>
            {/* XFooter */}
            <footer className="footer-area">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a><img src="assets/img/white-logo.png" alt={`img`} /></a>
                                    </Link>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                        maecenas accumsan.</p>
                                </div>
                                <ul className="social">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank" ><i className="flaticon-facebook-letter-logo"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank"><i className="flaticon-twitter-black-shape"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank"><i className="flaticon-instagram-logo"></i></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank"><i className="flaticon-youtube"></i></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                {/* <h3>Services</h3>
                                <ul className="footer-services-list">
                                    <li><a href="null">Product Engineering</a></li>
                                    <li><a href="null">UX/UI Design</a></li>
                                    <li><a href="null">Big Data Analysis</a></li>
                                    <li><a href="null">Desktop Applications</a></li>
                                    <li><a href="null">Mobile Applications</a></li>
                                </ul> */}
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>
                                <ul className="quick-links-list">
                                    <li><a href="null">About Us</a></li>
                                    <li><a href="null">Blog</a></li>
                                    <li><a href="null">Contact</a></li>
                                    <li><a href="null">Support</a></li>
                                    <li><a href="null">Applications</a></li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contacts</h3>
                                <ul className="footer-contact-list">
                                    <li>
                                        <span>Address:</span> 2750 Quadra Street Victoria, Canada
                                    </li>
                                    <li>
                                        <span>Email:</span>
                                        <Link href="#">
                                            <a><span className="__cf_email__" data-cfemail="4124372e2d352001262c20282d6f222e2c">[email&#160;protected]</span></a>
                                        </Link>
                                    </li>
                                    <li><span>Phone:</span>
                                        <Link href="#">
                                            <a>+44 587 154756</a>
                                        </Link>
                                    </li>
                                    <li><span>Fax:</span>
                                        <Link href="#">
                                            <a>+44 785 4578964</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>
                                    Copyright 2020 <Link href="#"><a>Pham Dong</a></Link>. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Conditions</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-map">
                    <img src="assets/img/circle-map.png" alt={`img`} />
                </div>
            </footer>
        </>
    )
}