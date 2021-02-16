import headerTitle from "../../src/components/headerTitle";
import UserTemplate from "../../src/containers/UserTemplate";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import userRequestService from "../../src/services/userService/user.service";
import { News } from "../../src/models/News";
import LeftView from "../../src/components/leftView";
const headerData = {
  title: "Tin Tức",
};

const subString = (string: string, length: number): string =>
  string.length < length ? string : string.substring(0, length) + "...";

NewsPage.getInitialProps = async () => {
  let listNews = null;
  try {
    listNews = await userRequestService.getListNews();
  } catch (error) {
    console.log(error);
  }

  return { listNews };
};

export default function NewsPage({ listNews, error }) {
  const router = useRouter();
  const baseUrlMeta = (meta_url: string, id: string) =>
    `tin-tuc/${meta_url}-${id}`;
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

    const renderPopularPosts = (popularPosts) => {
      const renderItem = (popularPosts) => {
        return popularPosts.map((item, index) => {
          return (
            <article className="item" key={index}>
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a className="thumb">
                  <span
                    style={{ backgroundImage: "url(" + item.image + ")" }}
                    className="fullimage cover bg1"
                    role="img"
                  ></span>
                </a>
              </Link>

              <div className="info">
                <time dateTime="2019-06-30">{item.create_date}</time>
                <h4 className="title usmall">
                  <Link href={baseUrlMeta(item.meta_url, item.id)}>
                    <a>{item.title}</a>
                  </Link>
                </h4>
              </div>
              <div className="clear"></div>
            </article>
          );
        });
      };

      return (
        <section className="widget widget_evolta_posts_thumb">
          <h3 className="widget-title">TIN XEM NHIỀU</h3>
          {renderItem(popularPosts)}
        </section>
      );
    };

    const renderRecentComments = () => {
      return (
        <section className="widget widget_recent_comments">
          <h3 className="widget-title">Recent Comments</h3>
          <ul>
            <li>
              <span className="comment-author-link">
                <a href="#">A WordPress Commenter</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
            <li>
              <span className="comment-author-link">
                <a href="#">Evolta</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
            <li>
              <span className="comment-author-link">
                <a href="#">Wordpress</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
            <li>
              <span className="comment-author-link">
                <a href="#">A WordPress Commenter</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
            <li>
              <span className="comment-author-link">
                <a href="#">Evolta</a>
              </span>
              on
              <a href="#">Hello world!</a>
            </li>
          </ul>
        </section>
      );
    };

    const renderSubCategories = (subCategories) => {
      const renderItem = (subCategories) => {
        return subCategories.map((item, index) => {
          return (
            <li key={index}>
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        });
      };

      return (
        <section className="widget widget_recent_entries">
          <h3 className="widget-title">TIN TỨC</h3>
          <ul>{renderItem(subCategories)}</ul>
        </section>
      );
    };

    const renderCategoris = (listCategoris) => {
      const renderItem = (listCategoris) => {
        return listCategoris.map((item, index) => {
          return (
            <li key={index}>
              <Link href={baseUrlMeta(item.meta_url, item.id)}>
                <a>{item.title}</a>
              </Link>
            </li>
          );
        });
      };
      return (
        <section className="widget widget_categories">
          <h3 className="widget-title">DANH MỤC</h3>
          <ul>{renderItem(listCategoris)}</ul>
        </section>
      );
    };

    const renderListTags = (listTags) => {
      const renderItem = (listTags) => {
        return listTags.map((item, index) => {
          return (
            <Link href={baseUrlMeta(item.meta_url, item.id)}>
              <a key={index}>
                {item.title}{" "}
                <span className="tag-link-count"> ({item.total})</span>
              </a>
            </Link>
          );
        });
      };
      return (
        <section className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>
          <div className="tagcloud">{renderItem(listTags)}</div>
        </section>
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
            <div className="col-lg-4 col-md-12">{LeftView()}</div>
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
        <title>{headerData.title}</title>
      </Head>
      {headerTitle(headerData)}
      {renderListNews(listNews.data)}
    </UserTemplate>
  );
}
