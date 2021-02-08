import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Trang Chủ</title>
                <link rel="icon" href="/favicon.ico" />
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
            {/* XSlider */}
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel" >
                <div className="carousel-inner">
                    <div style={{ height: '600px' }} className="carousel-item active">
                        <img
                            src="../assets/img/banner-bg2.jpg"
                            className="d-block w-100"
                            alt="..." />
                    </div>
                    <div style={{ height: '600px' }} className="carousel-item">
                        <img
                            src="../assets/img/banner-bg.jpg"
                            className="d-block w-100"
                            alt="..." />
                    </div>
                    <div style={{ height: '600px' }} className="carousel-item">
                        <img
                            src="../assets/img/banner-img1.jpg"
                            className="d-block w-100"
                            alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            {/* AboutAndNoti */}
            <section className="services-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Giới thiệu</span>
                            <h2>We Offer Professional IT Solutions For Business</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                suspendisse ultrices gravida. Risus commodo viverra maecenas
                                accumsan lacus vel facilisis. Lorem ipsum dolor, sit amet
                                consectetur adipisicing elit. Laborum ipsam voluptatem consequatur
                                ipsum est nemo quidem magni unde iure ex quod excepturi doloremque
                                maxime minus facere, numquam vitae sit ullam.</p>
                        </div>
                        <div className="image">
                            <img src="../assets/img/section-title/1.png" alt={`img`} />
                        </div>
                    </div>
                    <div className="section-title">
                        <div className="image">
                            <img src="../assets/img/section-title/1.png" alt={`img`} />
                        </div>
                        <div className="content">
                            <span>Thông Báo</span>
                            <h2>We Offer Professional IT Solutions For Business</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                suspendisse ultrices gravida. Risus commodo viverra maecenas
                                accumsan lacus vel facilisis. Lorem ipsum dolor sit amet
                                consectetur, adipisicing elit. Earum quod quis voluptatibus
                                mollitia eaque est, velit, omnis impedit expedita adipisci aut
                                animi. Quasi atque magnam beatae repellat velit ipsa nesciunt.</p>
                        </div>
                    </div>
                </div>
                <div className="shape13">
                    <img src="../assets/img/shape/13.svg" alt={`img`} />
                </div>
                <div className="shape14">
                    <img src="../assets/img/shape/13.svg" alt={`img`} />
                </div>
            </section>
            {/* Course */}
            <section className="blog-area extra-pb ptb-110">
                <div className="container">
                    <div className="section-title-style-two text-center">
                        <div className="content">
                            <span>KHOÁ HỌC</span>
                            <h2>THÔNG BÁO - CHIÊU SINH</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post sticky">
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><Link href="#"><a>Admin</a></Link></li>
                                            <li>August 16, 2020</li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <Link href="#">
                                            <a>10 Building Mobile Apps With Ionic And React</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post sticky">
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><Link href="#"><a>Admin</a></Link></li>
                                            <li>August 16, 2020</li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <Link href="#">
                                            <a>10 Building Mobile Apps With Ionic And React</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post sticky">
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><Link href="#"><a>Admin</a></Link></li>
                                            <li>August 16, 2020</li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <Link href="#">
                                            <a>10 Building Mobile Apps With Ionic And React</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape13">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
                <div className="shape14">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
            </section>
            {/* NewsShared */}
            <section className="blog-area extra-pb ptb-110">
                <div className="container">
                    <div className="section-title-style-two text-center">
                        <div className="content">
                            <span>TIN TỨC</span>
                            <h2>BÀI VIẾT MỚI</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="image">
                                    <Link href="#">
                                        <a><img src="assets/img/blog/1.jpg" alt={`img`} /></a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><Link href="#"><a>Pham Hoang Dong</a></Link></li>
                                            <li>07/02/2021</li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque omnis asperiores rem, nostrum itaque est sit repellat. Ducimus magnam, perferendis quia ipsum obcaecati amet eveniet, ipsa, itaque id distinctio a?</p>
                                    <Link href="#">
                                        <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="image">
                                    <Link href="#">
                                        <a><img src="assets/img/blog/1.jpg" alt={`img`} /></a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a>Pham Hoang Dong</a>
                                                </Link>
                                            </li>
                                            <li>07/02/2021</li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque omnis asperiores rem, nostrum itaque est sit repellat. Ducimus magnam, perferendis quia ipsum obcaecati amet eveniet, ipsa, itaque id distinctio a?</p>
                                    <Link href="#">
                                        <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="image">
                                    <Link href="#">
                                        <a><img src="assets/img/blog/1.jpg" alt={`img`} /></a>
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Link href="#">
                                                    <a>Pham Hoang Dong</a>
                                                </Link>
                                            </li>
                                            <li>07/02/2021</li>
                                        </ul>
                                    </div>
                                    <h3>
                                        <Link href="#">
                                            <a>Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque omnis asperiores rem, nostrum itaque est sit repellat. Ducimus magnam, perferendis quia ipsum obcaecati amet eveniet, ipsa, itaque id distinctio a?</p>
                                    <Link href="#">
                                        <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                <div className="shape13">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
                <div className="shape14">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
            </section>
            {/* XGallary */}
            <section className="blog-area extra-pb ptb-110">
                <div className="container">
                    <div className="section-title-style-two text-center">
                        <div className="content">
                            <span>ALBUM</span>
                            <h2>HÌNH ẢNH</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-choose-box">
                                <img src="assets/img/why-choose-us/1.jpg" alt={`img`} />
                                <div className="title">
                                    <h3>Industry Expertise</h3>
                                </div>
                                <div className="content">
                                    <div className="inner-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Industry Expertise</a>
                                            </Link>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
                                            tempor ut labore et dolore magna aliqua. Quis ipsum
                                            suspendisse ultrices gravida.</p>
                                        <Link href="#">
                                            <a className="read-more-btn">Read More<i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-choose-box">
                                <img src="assets/img/why-choose-us/2.jpg" alt={`img`} />
                                <div className="title">
                                    <h3>Expertise & Leadership</h3>
                                </div>
                                <div className="content">
                                    <div className="inner-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Expertise & Leadership</a>
                                            </Link>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
                                            tempor ut labore et dolore magna aliqua. Quis ipsum
                                            suspendisse ultrices gravida.</p>
                                        <Link href="#">
                                            <a className="read-more-btn" >Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-choose-box">
                                <img src="assets/img/why-choose-us/3.jpg" alt={`img`} />
                                <div className="title">
                                    <h3>Dedicated IT Solution</h3>
                                </div>
                                <div className="content">
                                    <div className="inner-content">
                                        <h3>
                                            <Link href="#">
                                                <a>Dedicated IT Solution</a>
                                            </Link>
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
                                            tempor ut labore et dolore magna aliqua. Quis ipsum
                                            suspendisse ultrices gravida.</p>
                                        <Link href="#">
                                            <a className="read-more-btn" >Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape14">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
                </div>
                <div className="shape15">
                    <img src="assets/img/shape/13.svg" alt={`img`} />
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
