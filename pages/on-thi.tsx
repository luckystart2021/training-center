import Link from 'next/link'
import Head from 'next/head'

export default function QuizPage() {
    return (
        <>
            <Head>
                <title>Thi Trắc nghiệm</title>
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
            {/* ContentQuestion */}
            <section className="contact-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="custom-content-title text-center">
                            <h2>Bộ Đề Thi Thử Lý Thuyết Lái Xe Ô tô B2 600 Câu</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="col-lg-12 col-md-12">
                                <div className="cart-totals">
                                    <h3>Kết quả bài làm</h3>
                                    <div className='ket-qua-bai-thi'>
                                        <div><span>Đề số: </span><label className='text-green-color' htmlFor="de-so">01</label></div>
                                        <div><span>Số câu đúng: </span><label className='text-red-color' htmlFor="so-cau-sai">0</label></div>
                                        <div><span>Số câu sai: </span><label className='text-red-color' htmlFor="so-cau-sai">35</label></div>
                                        <div><span>Kết quả: </span><label htmlFor="ket-qua"><strong className='text-red-color'>KHÔNG ĐẠT - Sai câu điểm liệt</strong></label></div>
                                        <div><span>Đáp án sai: </span><label htmlFor="dap-an-sai" className='text-red-color'>Tô màu đỏ</label></div>
                                        <div><span>Đáp án đúng: </span><label htmlFor="dap-an-dung" className='text-blue-color'>Tô màu xanh</label></div>
                                        <div>Kiểm tra lại đáp án đúng bên dưới!</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="cart-totals">
                                    <h3>Câu hỏi</h3>
                                    <div className="pagination-area">
                                        {/* {listNumberQuestion(listQuestions)} */}
                                    </div>
                                    {/* className={questions.id === list.id ? "page-numbers current" : "page-numbers"} */}
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="cart-totals">
                                    <div className="custom-title-card">
                                        <h3>Thời gian còn lại: 21:34</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="cart-totals">
                                    <div className="custom-title-card">
                                        <button className="btn btn-primary"> NỘP BÀI THI</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="cart-totals" /*onClick={() => clickQuestion(props.question)}*/>
                                {/* <h3>Câu hỏi {props.question?.id}:</h3> */}
                                <h3>Câu hỏi :</h3>
                                <strong className='ket-qua-bai-thi'>Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?</strong>
                                <div className="order-details">
                                    <div className="payment-box">
                                        <div className="payment-method">
                                            <p>
                                                <input
                                                    type="radio"
                                                    id="answer-1"
                                                    name="radio-group"
                                                />
                                                <label htmlFor="answer-1">1- Phần mặt đường và lề đường.</label>
                                            </p>
                                            <p>
                                                <input type="radio" id="answer-2" name="radio-group" />
                                                <label htmlFor="answer-2">2- Phần đường xe chạy.</label>
                                            </p>
                                            <p>
                                                <input
                                                    type="radio"
                                                    id="answer-3"
                                                    name="radio-group"
                                                />
                                                <label htmlFor="answer-3">3- Phần đường xe cơ giới.</label>
                                            </p>
                                        </div>
                                    </div>
                                    <a href=" " className="btn btn-primary order-btn">Câu trước</a>
                                    <a href=" " className="btn btn-primary order-btn custom-float-right">Câu tiếp theo</a>

                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}