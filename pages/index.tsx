import Link from "next/link";
import UserTemplate from "../src/containers/UserTemplate";
import { assetIcons, HomeUserAssets } from "../src/staticData/img";


const courseList = [
  {
      auth: 'Admin',
      date: 'August 16, 2020',
      content: '10 Building Mobile Apps With Ionic And React',
      classIcon: 'sticky',
  },
  {
      auth: 'Admin',
      date: 'August 01, 2020',
      content: 'The hardest leadership advice to follow',
      classIcon: 'link',
  },
  {
      auth: 'Admin',
      date: 'August 08, 2020',
      content: 'How to share your company vision as a leader',
      classIcon: 'quote',
  }
];

const news = [
  {
      id: 1,
      auth: 'Dong',
      date: 'August 15, 2020',
      title: 'Making Peace With The Feast Or Famine Of Freelancing',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      thumbnail: HomeUserAssets.news.blog_1,
  },
  {
      id: 2,
      auth: 'Dong 2',
      date: 'August 18, 2020',
      title: 'I Used The Web For A Day On A 50 MB Budget',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      thumbnail: HomeUserAssets.news.blog_1,
  },
  {
      id: 3,
      auth: 'Dong 3',
      date: 'August 16, 2020',
      title: 'Here are the 5 most telling signs of micromanagement',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      thumbnail: HomeUserAssets.news.blog_1,
  },
];
const gallery = [
  {
      id: 1,
      thumbnail: HomeUserAssets.gallarys.gallary_1,
      title: 'Industry Expertise',
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
      tempor ut labore et dolore magna aliqua. Quis ipsum
      suspendisse ultrices gravida.`,
  },
  {
      id: 2,
      thumbnail: HomeUserAssets.gallarys.gallary_2,
      title: 'Expertise & Leadership',
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
      tempor ut labore et dolore magna aliqua. Quis ipsum
      suspendisse ultrices gravida.`,
  },
  {
      id: 3,
      thumbnail: HomeUserAssets.gallarys.gallary_3,
      title: 'Dedicated IT Solution',
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
      tempor ut labore et dolore magna aliqua. Quis ipsum
      suspendisse ultrices gravida.`,
  },
]
export default function HomeUserpage() {
  const renderCarousel = (carouselAssets) => {
    const renderCarouselItem = (carouselAssets) => {
      return carouselAssets.map((item, index) => {
        return (
          <div
            style={{ height: "600px" }}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={item}
              className="d-block w-100"
              alt={`carousel ${index}`}
            />
          </div>
        );
      });
    };

    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {renderCarouselItem(carouselAssets)}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  };

  const renderHomeAbout = () => (
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
              maxime minus facere, numquam vitae sit ullam.
            </p>
          </div>
          <div className="image">
            <img src={HomeUserAssets.about.homeAbout_1} alt="" />
          </div>
        </div>
        <div className="section-title">
          <div className="image">
            <img src={HomeUserAssets.about.homeAbout_1} alt="" />
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
              animi. Quasi atque magnam beatae repellat velit ipsa nesciunt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCourse = (courseList) => {
    const renderCourseItem = (courseList) => {
      return courseList?.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className={`single-blog-post ${item.classIcon}`}>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <Link href="/">{item.auth}</Link>
                    </li>
                    <li>{item.date}</li>
                  </ul>
                </div>
                <h3>
                  <Link href="/">{item.content}</Link>
                </h3>
              </div>
            </div>
          </div>
        );
      });
    };
    return (
      <section className="blog-area extra-pb ptb-110">
        <div className="container">
          <div className="section-title-style-two text-center">
            <div className="content">
              <span>KHOÁ HỌC</span>
              <h2>THÔNG BÁO - CHIÊU SINH</h2>
            </div>
          </div>
          <div className="row">{renderCourseItem(courseList)}</div>
        </div>
        <div className="shape13">
          <img src={assetIcons.shape_13} alt={`img`} />
        </div>
        <div className="shape14">
          <img src={assetIcons.shape_13} alt={`img`} />
        </div>
      </section>
    );
  };

  const renderNew = (news) => {
    const renderNewItem = (news) => {
      return news?.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="single-blog-post-item">
              <div className="image">
                <Link href="/">
                  <img src={item.thumbnail} alt={`img" new ${index}`} />
                </Link>
              </div>
              <div className="content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <Link href="/">{item.auth}</Link>
                    </li>
                    <li>{item.date}</li>
                  </ul>
                </div>
                <h3>
                  <Link href="/">{item.title}</Link>
                </h3>
                <p>{item.content}</p>
                <Link href="/">
                  <a className="read-more-btn">
                    Read More <i className="flaticon-add-1" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      });
    };
    return (
      <section className="blog-area extra-pb ptb-110">
        <div className="container">
          <div className="section-title-style-two text-center">
            <div className="content">
              <span>TIN TỨC</span>
              <h2>BÀI VIẾT MỚI</h2>
            </div>
          </div>
          <div className="row">{renderNewItem(news)}</div>
        </div>
        <div className="shape13">
          <img src={assetIcons.shape_13} alt={`img`} />
        </div>
        <div className="shape14">
          <img src={assetIcons.shape_13} alt={`img`} />
        </div>
      </section>
    );
  };

  const renderGallary = (gallery) => {
    const renderGallaryItems = (gallary) => {
      return gallary?.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <div className="single-choose-box">
              <img src={item.thumbnail} alt={`img ${index}`} />
              <div className="title">
                <h3>{item.title}</h3>
              </div>
              <div className="content">
                <div className="inner-content">
                  <h3>
                    <Link href="/">{item.title}</Link>
                  </h3>
                  <p>{item.content}</p>
                  <Link href="/">
                    <a className="read-more-btn">
                      Read More <i className="flaticon-add-1" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      });
    };
    return (
      <section className="blog-area extra-pb ptb-110">
        <div className="container">
          <div className="section-title-style-two text-center">
            <div className="content">
              <span>ALBUM</span>
              <h2>HÌNH ẢNH</h2>
            </div>
          </div>
          <div className="row">{renderGallaryItems(gallery)}</div>
        </div>
        <div className="shape14">
          <img src={assetIcons.shape_13} alt={`img`} />
        </div>
        <div className="shape15">
          <img src={assetIcons.shape_13} alt={`img`} />
        </div>
      </section>
    );
  };

  return (
    <UserTemplate title="Trang chủ">
      {renderCarousel(HomeUserAssets.carousel)}
      {renderHomeAbout()}
      {renderCourse(courseList)}
      {renderNew(news)}
      {renderGallary(gallery)}
    </UserTemplate>
  );
}