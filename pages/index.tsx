import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="preloader">
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            </div>
            <div className="navbar-area">
                <div className="evolta-responsive-nav">
                    <div className="container">
                        <div className="evolta-responsive-menu">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="/assets/img/black-logo.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="evolta-nav">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <a className="navbar-brand" href="index.html">
                                <img src="/assets/img/black-logo.png" alt="logo" />
                            </a>
                            <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item"><a href="index.html" className="nav-link active">Home <i
                                        className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="index.html" className="nav-link active">IT Startups</a>
                                            </li>
                                            <li className="nav-item"><a href="index-2.html" className="nav-link">IT Company</a></li>
                                            <li className="nav-item"><a
                                                href="https://templates.envytheme.com/evolta/default/big-data/index.html"
                                                className="nav-link" target="_blank">Big Data Startups</a></li>
                                            <li className="nav-item"><a
                                                href="https://templates.envytheme.com/evolta/default/ai-startups/index.html"
                                                className="nav-link" target="_blank">AI Startups</a></li>
                                            <li className="nav-item"><a
                                                href="https://templates.envytheme.com/evolta/default/chatbot-startups/index.html"
                                                className="nav-link" target="_blank">Chatbot Startups</a></li>
                                            <li className="nav-item"><a
                                                href="https://templates.envytheme.com/evolta/default/machine-learning-startups/index.html"
                                                className="nav-link" target="_blank">Machine Learning Startups</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a href="#" className="nav-link">Pages <i
                                        className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="about.html" className="nav-link">About Us</a></li>
                                            <li className="nav-item"><a href="team.html" className="nav-link">Team</a></li>
                                            <li className="nav-item"><a href="#" className="nav-link">Services</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><a href="services.html" className="nav-link">Services</a>
                                                    </li>
                                                    <li className="nav-item"><a href="single-services.html"
                                                        className="nav-link">Services Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><a href="#" className="nav-link">Shop</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><a href="shop.html" className="nav-link">Shop</a></li>
                                                    <li className="nav-item"><a href="single-product.html" className="nav-link">Single
                                                    Products</a></li>
                                                    <li className="nav-item"><a href="cart.html" className="nav-link">Cart</a></li>
                                                    <li className="nav-item"><a href="checkout.html" className="nav-link">Checkout</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><a href="#" className="nav-link">Blog</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><a href="blog-1.html" className="nav-link">Blog Grid</a>
                                                    </li>
                                                    <li className="nav-item"><a href="blog-2.html" className="nav-link">Blog Right
                                                    Sidebar</a></li>
                                                    <li className="nav-item"><a href="single-blog.html" className="nav-link">Blog
                                                    Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><a href="error-404.html" className="nav-link">404 Error</a></li>
                                            <li className="nav-item"><a href="coming-soon.html" className="nav-link">Coming Soon</a>
                                            </li>
                                            <li className="nav-item"><a href="faq.html" className="nav-link">FAQ</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a href="#" className="nav-link">Projects <i
                                        className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="projects.html" className="nav-link">Projects</a></li>
                                            <li className="nav-item"><a href="single-projects.html" className="nav-link">Projects
                                            Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a href="#" className="nav-link">Shop <i
                                        className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="shop.html" className="nav-link">Shop</a></li>
                                            <li className="nav-item"><a href="single-product.html" className="nav-link">Single
                                            Products</a></li>
                                            <li className="nav-item"><a href="cart.html" className="nav-link">Cart</a></li>
                                            <li className="nav-item"><a href="checkout.html" className="nav-link">Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a href="#" className="nav-link">Blog <i
                                        className="fas fa-chevron-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item"><a href="blog-1.html" className="nav-link">Blog Grid</a></li>
                                            <li className="nav-item"><a href="blog-2.html" className="nav-link">Blog Right Sidebar</a>
                                            </li>
                                            <li className="nav-item"><a href="single-blog.html" className="nav-link">Blog Details</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                                </ul>
                                <div className="others-options">
                                    <a href="cart.html" className="cart-btn"><i className="flaticon-shopping-basket"></i></a>
                                    <div className="option-item"><i className="search-btn flaticon-search"></i>
                                        <i className="close-btn fas fa-times"></i>
                                        <div className="search-overlay search-popup">
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="fas fa-search"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="contact.html" className="btn btn-primary">Free Quote</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="main-banner">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-lg-7 col-md-12 p-0">
                            <div className="main-banner-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <h1>Solve Business Challenges With IT</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                    gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        <div className="btn-box">
                                            <a href="#" className="btn btn-primary">Read More</a>
                                            <a href="#" className="btn btn-light">Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 p-0">
                            <div className="main-banner-image" />
                            <img src="/assets/img/banner-img1.jpg" alt="image" />
                            <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" className="video-btn popup-youtube"><i
                                className="flaticon-play-button"></i></a>
                        </div>
                    </div>
                </div>
                <div className="banner-inner-content">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="single-inner-box">
                                <div className="icon">
                                    <i className="flaticon-branch"></i>
                                </div>
                                <h3><a href="#">IT Management <i className="flaticon-add-1"></i></a></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="single-inner-box">
                                <div className="icon">
                                    <i className="flaticon-programming-code"></i>
                                </div>
                                <h3><a href="#">Development <i className="flaticon-add-1"></i></a></h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 offset-lg-0 offset-md-0 offset-sm-3">
                            <div className="single-inner-box">
                                <div className="icon">
                                    <i className="flaticon-tools-and-utensils"></i>
                                </div>
                                <h3><a href="#">UX/UI Design <i className="flaticon-add-1"></i></a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="map"><img src="/assets/img/circle-map2.png" alt="image" /></div>
                </div>
                <div className="shape1"><img src="/assets/img/shape/1.png" alt="image" /></div>
                <div className="shape2"><img src="/assets/img/shape/2.png" alt="image" /></div>
                <div className="shape3"><img src="/assets/img/shape/3.png" alt="image" /></div>
                <div className="shape4"><img src="/assets/img/shape/4.png" alt="image" /></div>
                <div className="shape5"><img src="/assets/img/shape/5.png" alt="image" /></div>
                <div className="shape6"><img src="/assets/img/shape/6.png" alt="image" /></div>
                <div className="shape7"><img src="/assets/img/shape/7.png" alt="image" /></div>
                <div className="shape8"><img src="/assets/img/shape/8.png" alt="image" /></div>
                <div className="shape9"><img src="/assets/img/shape/9.png" alt="image" /></div>
                <div className="shape10"><img src="/assets/img/shape/10.png" alt="image" /></div>
                <div className="shape11"><img src="/assets/img/shape/11.png" alt="image" /></div>
                <div className="shape12"><img src="/assets/img/shape/12.png" alt="image" /></div>
            </div>

            <section className="services-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Our Services</span>
                            <h2>We Offer Professional IT Solutions For Business</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas
                        accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="image">
                            <img src="/assets/img/section-title/1.png" alt="image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-plugin"></i>
                                </div>
                                <h3><a href="#">Product Engineering</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus
                            vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-computer-graphic"></i>
                                </div>
                                <h3><a href="#">UX/UI Design</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus
                            vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-analysis"></i>
                                </div>
                                <h3><a href="#">Big Data Analysis</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus
                            vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-code"></i>
                                </div>
                                <h3><a href="#">Desktop Applications</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus
                            vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-application"></i>
                                </div>
                                <h3><a href="#">Mobile Applications</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus
                            vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-cyber-security"></i>
                                </div>
                                <h3><a href="#">Cyber Security</a></h3>
                                <p>Quis ipsum suspendisse ultrices gravida lacu. Risus commodo viverra maecenas accumsan lacus
                            vel adipiscing aliqua.</p>
                                <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape13"><img src="/assets/img/shape/13.svg" alt="image" /></div>
                <div className="shape14"><img src="/assets/img/shape/13.svg" alt="image" /></div>
            </section>


            <section className="about-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/assets/img/about-img1.jpg" alt="image" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>We've Been Thriving in 37 Years The Tech Area</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra.</p>
                                <a href="#" className="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="why-choose-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Why choose us</span>
                            <h2>We Different From Others Should Choose Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas
                        accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="image">
                            <img src="/assets/img/section-title/2.png" alt="image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-choose-box">
                                <img src="/assets/img/why-choose-us/1.jpg" alt="image" />
                                <div className="title">
                                    <h3>Industry Expertise</h3>
                                </div>
                                <div className="content">
                                    <div className="inner-content">
                                        <h3><a href="#">Industry Expertise</a></h3>
                                        <p>Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-choose-box">
                                <img src="/assets/img/why-choose-us/2.jpg" alt="image" />
                                <div className="title">
                                    <h3>Expertise & Leadership</h3>
                                </div>
                                <div className="content">
                                    <div className="inner-content">
                                        <h3><a href="#">Expertise & Leadership</a></h3>
                                        <p>Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-choose-box">
                                <img src="/assets/img/why-choose-us/3.jpg" alt="image" />
                                <div className="title">
                                    <h3>Dedicated IT Solution</h3>
                                </div>
                                <div className="content">
                                    <div className="inner-content">
                                        <h3><a href="#">Dedicated IT Solution</a></h3>
                                        <p>Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod tempor ut labore et dolore
                                    magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                        <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape14"><img src="/assets/img/shape/13.svg" alt="image" /></div>
                <div className="shape15"><img src="/assets/img/shape/13.svg" alt="image" /></div>
            </section>


            <section className="funfacts-area ptb-110 bg-f2feee">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4">
                            <div className="single-funfacts">
                                <div className="circlechart" data-percentage="60"></div>
                                <span>Design</span>
                                <h3>Codes</h3>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4">
                            <div className="single-funfacts">
                                <div className="circlechart" data-percentage="75"></div>
                                <span>Our happy</span>
                                <h3>Clients</h3>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4">
                            <div className="single-funfacts">
                                <div className="circlechart" data-percentage="85"></div>
                                <span>Projects</span>
                                <h3>Design</h3>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3 col-md-3 col-sm-4 offset-lg-0 offset-md-0 offset-sm-4">
                            <div className="single-funfacts">
                                <div className="circlechart" data-percentage="95"></div>
                                <span>Completed</span>
                                <h3>Projects</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cta-area jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="container">
                    <div className="cta-content">
                        <span>We Take Care of Your Technology</span>
                        <h2>Focus on Your Business</h2>
                        <a href="#" className="btn btn-primary">Contact Us</a>
                    </div>
                </div>
            </section>


            <section className="projects-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Recent projects</span>
                            <h2>Proud Projects That Make Us Stand Out</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas
                        accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="image">
                            <img src="/assets/img/section-title/3.png" alt="image" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="projects-slides owl-carousel owl-theme">
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#"><img src="/assets/img/projects/1.jpg" alt="image" /></a>
                                <div className="projects-content">
                                    <span>Design/Idea</span>
                                    <h3><a href="#">Flutter Development</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#"><img src="/assets/img/projects/2.jpg" alt="image" /></a>
                                <div className="projects-content">
                                    <span>Design/Development</span>
                                    <h3><a href="#">Application Development</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#"><img src="/assets/img/projects/3.jpg" alt="image" /></a>
                                <div className="projects-content">
                                    <span>Design</span>
                                    <h3><a href="#">Web Development</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#"><img src="/assets/img/projects/4.jpg" alt="image" /></a>
                                <div className="projects-content">
                                    <span>Idea</span>
                                    <h3><a href="#">Big Data Analysis</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                            <div className="single-projects-box">
                                <a href="#"><img src="/assets/img/projects/5.jpg" alt="image" /></a>
                                <div className="projects-content">
                                    <span>Guard</span>
                                    <h3><a href="#">Cyber Security</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra maecenas.</p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape13"><img src="/assets/img/shape/13.svg" alt="image" /></div>
                <div className="shape15"><img src="/assets/img/shape/13.svg" alt="image" /></div>
            </section>


            <div className="partner-area bg-f2feee">
                <div className="container">
                    <div className="partner-list">
                        <div className="partner-item">
                            <a href="#" target="_blank"><img src="/assets/img/partner/1.png" alt="image" /></a>
                            <a href="#" target="_blank"><img src="/assets/img/partner/1.png" alt="image" /></a>
                        </div>
                        <div className="partner-item">
                            <a href="#" target="_blank"><img src="/assets/img/partner/2.png" alt="image" /></a>
                            <a href="#" target="_blank"><img src="/assets/img/partner/2.png" alt="image" /></a>
                        </div>
                        <div className="partner-item">
                            <a href="#" target="_blank"><img src="/assets/img/partner/1.png" alt="image" /></a>
                            <a href="#" target="_blank"><img src="/assets/img/partner/1.png" alt="image" /></a>
                        </div>
                        <div className="partner-item">
                            <a href="#" target="_blank"><img src="/assets/img/partner/3.png" alt="image" /></a>
                            <a href="#" target="_blank"><img src="/assets/img/partner/3.png" alt="image" /></a>
                        </div>
                        <div className="partner-item">
                            <a href="#" target="_blank"><img src="/assets/img/partner/4.png" alt="image" /></a>
                            <a href="#" target="_blank"><img src="/assets/img/partner/4.png" alt="image" /></a>
                        </div>
                        <div className="partner-item">
                            <a href="#" target="_blank"><img src="/assets/img/partner/5.png" alt="image" /></a>
                            <a href="#" target="_blank"><img src="/assets/img/partner/5.png" alt="image" /></a>
                        </div>
                    </div>
                </div>
            </div>


            <section className="team-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Our Experts</span>
                            <h2>Meet Our Leadership Preparing For Your Success</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas
                        accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="image">
                            <img src="/assets/img/section-title/4.png" alt="image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-box">
                                <div className="team-image">
                                    <img src="/assets/img/team/1.jpg" alt="image" />
                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-twitter-black-shape"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-instagram-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-linkedin-letters"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>James Anderson</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-box">
                                <div className="team-image">
                                    <img src="/assets/img/team/2.jpg" alt="image" />
                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-twitter-black-shape"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-instagram-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-linkedin-letters"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Sarah Taylor</h3>
                                    <span>Marketing Manager</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-box">
                                <div className="team-image">
                                    <img src="/assets/img/team/3.jpg" alt="image" />
                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-twitter-black-shape"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-instagram-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-linkedin-letters"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Joe Root</h3>
                                    <span>Lead Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-box">
                                <div className="team-image">
                                    <img src="/assets/img/team/4.jpg" alt="image" />
                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-twitter-black-shape"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-instagram-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-linkedin-letters"></i></a></li>
                                    </ul>
                                </div>
                                <div className="team-content">
                                    <h3>Daisy Lucy</h3>
                                    <span>Lead Designer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape13"><img src="/assets/img/shape/13.svg" alt="image" /></div>
                <div className="shape14"><img src="/assets/img/shape/13.svg" alt="image" /></div>
            </section>


            <section className="testimonials-area">
                <div className="container-fluid p-0">
                    <div className="testimonials-inner-area jarallax" data-jarallax='{"speed": 0.3}'>
                        <div className="testimonials-inner-content">
                            <div className="testimonials-slides owl-carousel owl-theme">
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra.</p>
                                    <div className="client-info">
                                        <img src="/assets/img/author1.jpg" alt="image" />
                                        <h3>John Doe</h3>
                                        <span>Marketing</span>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra.</p>
                                    <div className="client-info">
                                        <img src="/assets/img/author2.jpg" alt="image" />
                                        <h3>Steven Smith</h3>
                                        <span>Marketing</span>
                                    </div>
                                </div>
                                <div className="single-testimonials-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
                                viverra.</p>
                                    <div className="client-info">
                                        <img src="/assets/img/author3.jpg" alt="image" />
                                        <h3>Sarah Taylor</h3>
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="circle-map"><img src="/assets/img/circle-map3.png" alt="image" /></div>
                        </div>
                        <a href="https://www.youtube.com/watch?v=bk7McNUjWgw" className="video-btn popup-youtube"><i
                            className="flaticon-play-button"></i></a>
                    </div>
                </div>
            </section>


            <section className="blog-area extra-pb ptb-110">
                <div className="container">
                    <div className="section-title">
                        <div className="content">
                            <span>Latest News</span>
                            <h2>Our Latest Insights Are On Top All Times</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas
                        accumsan lacus vel facilisis.</p>
                        </div>
                        <div className="image">
                            <img src="/assets/img/section-title/5.png" alt="image" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post sticky">
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 16, 2020</li>
                                        </ul>
                                    </div>
                                    <h3><a href="#">10 Building Mobile Apps With Ionic And React</a></h3>
                                </div>
                            </div>
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <a href="#"><img src="/assets/img/blog/1.jpg" alt="image" /></a>
                                </div>
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 15, 2020</li>
                                        </ul>
                                    </div>
                                    <h3><a href="#">Making Peace With The Feast Or Famine Of Freelancing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <a href="#"><img src="/assets/img/blog/2.jpg" alt="image" /></a>
                                </div>
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 18, 2020</li>
                                        </ul>
                                    </div>
                                    <h3><a href="#">I Used The Web For A Day On A 50 MB Budget</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                </div>
                            </div>
                            <div className="single-blog-post link">
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 01, 2020</li>
                                        </ul>
                                    </div>
                                    <h3><a href="#">The hardest leadership advice to follow</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post quote">
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 08, 2020</li>
                                        </ul>
                                    </div>
                                    <h3><a href="#">How to share your company vision as a leader</a></h3>
                                </div>
                            </div>
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <a href="#"><img src="/assets/img/blog/3.jpg" alt="image" /></a>
                                </div>
                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 15, 2020</li>
                                        </ul>
                                    </div>
                                    <h3><a href="#">Here are the 5 most telling signs of micromanagement</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    <a href="#" className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape13"><img src="/assets/img/shape/13.svg" alt="image" /></div>
                <div className="shape14"><img src="/assets/img/shape/13.svg" alt="image" /></div>
            </section>


            <footer className="footer-area">
                <div className="container">
                    <div className="subscribe-area">
                        <h3>Subscribe To Our Newsletter</h3>
                        <form className="newsletter-form" data-toggle="validator">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <input type="text" className="form-control" placeholder="Your Name" name="name" id="name" />
                                </div>
                                <div className="col-lg-5 col-md-6 col-sm-6">
                                    <input type="email" className="form-control" placeholder="Your Email" name="EMAIL" required
                                        autoComplete="off" />
                                </div>
                                <div className="col-lg-3 col-md-12 col-sm-12">
                                    <button type="submit">Subscribe Now <i className="flaticon-paper-plane"></i></button>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div id="validator-newsletter" className="form-result"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="#"><img src="/assets/img/white-logo.png" alt="image" /></a>
                                    <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                                </div>
                                <ul className="social">
                                    <li><a href="#" target="_blank"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="flaticon-twitter-black-shape"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="flaticon-instagram-logo"></i></a></li>
                                    <li><a href="#" target="_blank"><i className="flaticon-youtube"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Services</h3>
                                <ul className="footer-services-list">
                                    <li><a href="#">Product Engineering</a></li>
                                    <li><a href="#">UX/UI Design</a></li>
                                    <li><a href="#">Big Data Analysis</a></li>
                                    <li><a href="#">Desktop Applications</a></li>
                                    <li><a href="#">Mobile Applications</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>
                                <ul className="quick-links-list">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">Applications</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contacts</h3>
                                <ul className="footer-contact-list">
                                    <li><span>Address:</span> 2750 Quadra Street Victoria, Canada</li>
                                    <li><span>Email:</span> <a href="#"><span className="__cf_email__"
                                        data-cfemail="0f6a7960637b6e4f68626e6663216c6062">[email&#160;protected]</span></a>
                                    </li>
                                    <li><span>Phone:</span> <a href="#">+44 587 154756</a></li>
                                    <li><span>Fax:</span> <a href="#">+44 785 4578964</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <p>Copyright 2020 <a href="#">Evolta</a>. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-map"><img src="/assets/img/circle-map.png" alt="image" /></div>
            </footer>

            <div className="go-top"><i className="fas fa-arrow-up"></i><i className="fas fa-arrow-up"></i></div>

        </>
    )
}
