import { DocumentContext } from "next/document";
import Link from "next/link";
import UserTemplate from "../src/containers/UserTemplate";
import { assetIcons, HomeUserAssets } from "../src/staticData/img";
import userRequestService from "../src/services/userService/user.service";
import utils from "../src/components/utils/constant";
import SEOTag from "../src/components/seoTag";
import Head from "next/head";

const headerData = {
  title: "Trang Chủ",
};
const listIcon = ["sticky", "link", "quote"];
const gallery = [
  {
    id: 1,
    thumbnail: HomeUserAssets.gallarys.gallary_1,
    title: "Industry Expertise",
    content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
      tempor ut labore et dolore magna aliqua. Quis ipsum
      suspendisse ultrices gravida.`,
  },
  {
    id: 2,
    thumbnail: HomeUserAssets.gallarys.gallary_2,
    title: "Expertise & Leadership",
    content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
      tempor ut labore et dolore magna aliqua. Quis ipsum
      suspendisse ultrices gravida.`,
  },
  {
    id: 3,
    thumbnail: HomeUserAssets.gallarys.gallary_3,
    title: "Dedicated IT Solution",
    content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
      tempor ut labore et dolore magna aliqua. Quis ipsum
      suspendisse ultrices gravida.`,
  },
];

HomeUserpage.getInitialProps = async (context: DocumentContext) => {
  let metaSEO = null;
  let listCarousel = null;
  let aboutData = null;
  let news3Data = null;
  let listNotification = null;
  try {
    metaSEO = await userRequestService.getSEO();
  } catch (error) {}
  
  try {
    listCarousel = await userRequestService.getCarousel();
  } catch (error) {}
  try {
    aboutData = await userRequestService.getHomeAbout();
  } catch (error) {}
  try {
    news3Data = await userRequestService.getHomeNews();
  } catch (error) {}
  try {
    listNotification = await userRequestService.getHomeNotification();
  } catch (error) {}
  return {
    props: {
      metaSEO: metaSEO?.data,
      listCarousel: listCarousel?.data,
      aboutData: aboutData?.data,
      news3Data: news3Data?.data,
      listNotification: listNotification?.data,
    },
  };
};

export default function HomeUserpage({ props }) {
  console.log(props.metaSEO)
  const renderCarousel = (carouselAssets) => {
    const renderCarouselItem = (carouselAssets) => {
      return carouselAssets?.map((item, index) => {
        return (
          <div
            className={`custom-slider carousel-item ${
              index === 0 ? "active" : ""
            }`}
            key={index}
          >
            <img
              src={utils.baseURL + item.img}
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

  const renderHomeAbout = (aboutData) => {
    const renderItem = (items) => {
      return items?.map((item, index) => {
        if (index % 2 == 0) {
          return (
            <div className="section-title" key={index}>
              <div className="content">
                <span>Giới Thiệu</span>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a
                  href={`/gioi-thieu/${item.meta}-${item.id}`}
                  className="read-more-btn"
                >
                  Xem thêm <i className="flaticon-add-1"></i>
                </a>
              </div>
              <div className="image">
                <img src={utils.baseURL + item.img} alt="" />
              </div>
            </div>
          );
        } else {
          return (
            <div className="section-title" key={index}>
              <div className="image">
                <img src={utils.baseURL + item.img} alt="" />
              </div>
              <div className="content">
                <span>{item.title}</span>
                <h2>{item.sub_title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          );
        }
      });
    };
    return (
      <section className="services-area ptb-110">
        <div className="container">{renderItem(aboutData)}</div>
      </section>
    );
  };

  const renderCourse = (listNotification) => {
    const renderCourseItem = (listNotification) => {
      return listNotification?.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className={`single-blog-post ${listIcon[index % 3]}`}>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <Link href="/">{item.created_by}</Link>
                    </li>
                    <li>&nbsp;{item.created_at}</li>
                  </ul>
                </div>
                <h3>
                  <Link href="/">{item.title}</Link>
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
          <div className="row">{renderCourseItem(listNotification)}</div>
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
                  <img
                    src={utils.baseURL + item.img}
                    alt={`img" new ${item.title}`}
                  />
                </Link>
              </div>
              <div className="content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <Link href="/">{item.created_at}</Link>
                    </li>
                    <li>{item.created_by}</li>
                  </ul>
                </div>
                <h3>
                  <Link href="/">{item.title}</Link>
                </h3>
                <p>{item.description}</p>
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
    <UserTemplate title={headerData.title}>
      <Head>
        {SEOTag(props.metaSEO)}
      </Head>
      {renderCarousel(props.listCarousel)}
      {renderHomeAbout(props.aboutData)}
      {renderCourse(props.listNotification)}
      {renderNew(props.news3Data)}
      {renderGallary(gallery)}
    </UserTemplate>
  );
}
