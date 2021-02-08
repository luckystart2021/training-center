import Link from 'next/link'
import Head from 'next/head'

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Giới Thiệu</title>
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
            {/* AboutContent */}
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
                                <h2>We've Been Thriving in 37 Years The Tech Area</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                    suspendisse ultrices gravida. Risus commodo viverra.</p>
                                <p>
                                    Business-to-business metrics analytics value proposition funding
                                    angel investor entrepreneur alpha ramen equity gamification.
                                    Social proof partner network research.</p>
                                <p>
                                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                                    sagittis eg esta ante, sed viverra nunc tinci dunt nec elei fend
                                    et tiram.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-inner-area">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="about-text">
                                    <h3>Địa Chỉ</h3>
                                    <p>
                                        CA 560 Bush St & 20th Ave, Apt 5 San Francisco, 230909, Canada</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="about-text">
                                    <h3>Email</h3>
                                    <p>
                                        <Link href="#">
                                            <a><span
                                                className="__cf_email__"
                                                data-cfemail="ea8f9c85869e8baa8f878b8386c4898587">[email&#160;protected]</span></a>

                                        </Link>
                                        <Link href="#">
                                            <a><span
                                                className="__cf_email__"
                                                data-cfemail="bbdddac3fbded6dad2d795d8d4d6">[email&#160;protected]</span></a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="about-text">
                                    <h3>Phone</h3>
                                    <p>
                                        <Link href="#">
                                            <a>+44 587 154756</a>

                                        </Link>
                                        <Link href="#">
                                            <a>+55 5555 14574</a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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