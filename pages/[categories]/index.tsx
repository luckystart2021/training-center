import headerTitle from "../../src/components/headerTitle";
import UserTemplate from "../../src/containers/UserTemplate";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import userRequestService from "../../src/services/userService/user.service";
import { News } from "../../src/models/News";
import LeftView from "../../src/components/leftView";
import { DocumentContext } from "next/document";

const category = [
  {
    id: 0,
    title: "Tin Tức",
    meta_url: "",
  },
  {
    id: 1,
    title: "Thông Tin",
    meta_url: "",
  },
];

const subString = (string: string, length: number): string =>
  string.length < length ? string : string.substring(0, length) + "...";

function NewsPage({ listNews, paramId, error }) {
  const router = useRouter();
  const cate = paramId.categories == "tin-tuc" ? category[0] : category[1];
  cate.meta_url = paramId.categories;
  console.log(cate);
  const baseUrlMeta = (meta_url: string, id: string) =>
    `${cate.meta_url}/${meta_url}-${id}`;
  const renderListNews = (listNews) => {
    const firstNews = listNews[0];
    const renderNews1st = (item) => {
      return (
        <div className="col-lg-12 col-md-12">
          <div className="single-blog-post">
            <div className="entry-thumbnail">
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a>
                  <img
                    style={{ height: "auto" }}
                    src={item.image}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="entry-post-content">
              <div className="entry-meta">
                <ul>
                  <li>
                    <Link href="#">
                      <a>{item.create_by}</a>
                    </Link>
                  </li>
                  <li>{item.create_date}</li>
                </ul>
              </div>
              <h3>
                <Link href={baseUrlMeta(item.meta_url, item.id)}>
                  <a>{item.title}</a>
                </Link>
              </h3>
              <p>{item.description.length}</p>
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a className="read-more-btn">
                  Xem thêm <i className="flaticon-add-1"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      );
    };

    const renderNewOrther = (listNews) => {
      return listNews.map((item, index) => {
        if (item.id != 1) {
          return (
            <div className="col-lg-6 col-md-6" key={index}>
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href={baseUrlMeta(item.meta_url, item.id)}>
                    <a>
                      <img src={item.image} alt="image" />
                    </a>
                  </Link>
                </div>
                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">
                          <a>{item.create_by}</a>
                        </Link>
                      </li>
                      <li>{item.create_date}</li>
                    </ul>
                  </div>
                  <h3>
                    <Link href={baseUrlMeta(item.meta_url, item.id)}>
                      <a>{item.title}</a>
                    </Link>
                  </h3>
                  <p>{subString(item.description, 200)}</p>
                  <Link href={baseUrlMeta(item.meta_url, item.id)}>
                    <a className="read-more-btn">
                      Xem thêm <i className="flaticon-add-1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        }
      });
    };

    const renderPageNumber = () => {
      return (
        <div className="col-lg-12 col-md-12">
          <div className="pagination-area">
            <a href="#" className="prev page-numbers">
              <i className="fas fa-angle-double-left"></i>
            </a>
            <a href="#" className="page-numbers">
              1
            </a>
            <span className="page-numbers current" aria-current="page">
              2
            </span>
            <a href="#" className="page-numbers">
              3
            </a>
            <a href="#" className="page-numbers">
              4
            </a>
            <a href="#" className="next page-numbers">
              <i className="fas fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      );
    };
    return (
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {renderNews1st(firstNews)}
                {renderNewOrther(listNews)}
                {renderPageNumber()}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">{LeftView({ cate })}</div>
          </div>
        </div>
        <div className="shape13">
          <img src="assets/img/shape/13.svg" alt="image" />
        </div>
        <div className="shape14">
          <img src="assets/img/shape/13.svg" alt="image" />
        </div>
      </section>
    );
  };
  if (error) {
    console.log(error);
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <UserTemplate title="Chi tiết bài viết">
      <Head>
        <title>{cate.title}</title>
      </Head>
      {headerTitle(cate)}
      {renderListNews(listNews.data)}
    </UserTemplate>
  );
}

NewsPage.getInitialProps = async (ctx: DocumentContext) => {
  let listNews = null;
  const paramId = ctx.query;
  try {
    listNews = await userRequestService.getListNews();
  } catch (error) {
    console.log(error);
  }
  return { listNews, paramId };
};

export default NewsPage;
