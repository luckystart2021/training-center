import UserTemplate from "../../../src/containers/UserTemplate";
import userRequestService from "../../../src/services/userService/user.service";
import { DocumentContext } from "next/document";
import LeftView from "../../../src/components/leftView";
import HeaderTitle from "../../../src/components/headerTitle";
import ListNews from "../../../src/components/ListNews";
import { Fragment, useState } from "react";
import { InnerHTMLTemplate } from "../../../src/components/innerHTMLTemplate";
import Link from "next/link";
import utils from "../../../src/components/utils/constant";
import Head from "next/head";
import SEOTag from "../../../src/components/seoTag";
import { useRouter } from "next/router";

//https://600fdd7a6c21e1001704f836.mockapi.io/news/1
const headerData = {
  title: "Tin Tức",
};

const category = [
  {
    id: 1,
    title: "Thông Tin",
    meta_url: "",
  },
  {
    id: 2,
    title: "Tin Tức",
    meta_url: "",
  },
];

async function reloadListNews(paramId) {
  const metaChil = `${paramId.categories}/${paramId.id}/list/child-news?page=${
    paramId.page ?? 1
  }`;

  let data = await userRequestService.getListChildNews(metaChil);
  return data?.data;
}

DetailsNews.getInitialProps = async (ctx: DocumentContext) => {
  const param = ctx.query.id;
  const paramId = ctx.query;
  const cate = paramId.categories == "tin-tuc" ? category[1] : category[0];
  cate.meta_url = `${paramId.categories}`;
  let resListNews = null;
  let res = null;
  let listSubCategories = null;
  let error = null;
  let listPage = null;
  let pupolarNews = null;
  let metaSEO = null;
  try {
    metaSEO = await userRequestService.getSEO();
  } catch (error) {}

  try {
    if (typeof param === "string") {
      const id = param.split("-").pop();

      const meta = param.split("-");
      meta.pop();
      meta.join("-");
      const metaChil = `${paramId.categories}/${
        paramId.id
      }/list/child-news?page=${paramId.page ?? 1}`;
      const metaPageChil = `${paramId.categories}/${paramId.id}/list/child-news/pagination`;
      listSubCategories = await userRequestService.getListSubCategoriesById(
        cate.id
      );
      pupolarNews = await userRequestService.getListNewsPupolar();
      if (parseInt(id))
        res = await userRequestService.getNewsById(id, meta.join("-"));
      else {
        resListNews = await userRequestService.getListChildNews(metaChil);
        listPage = await userRequestService.getListChilPagination(metaPageChil);
      }
    }
  } catch (error) {
    error = error;
  }
  return {
    detail: res?.data,
    paramId,
    listNews: resListNews?.data,
    listSubCategories: listSubCategories?.data,
    cate,
    error,
    listPage: listPage?.data,
    currentPage: paramId.page ?? "1",
    pupolarNews: pupolarNews.data,
    metaSEO: metaSEO?.data,
  };
};

function DetailsNews({
  detail,
  paramId,
  listNews,
  listSubCategories,
  cate,
  error,
  listPage,
  currentPage,
  pupolarNews,
  metaSEO,
}) {
  if (error) {
    return <div>errro</div>;
  }
  headerData.title = detail?.title;
  cate.meta_url = paramId.categories;
  const route = useRouter();
  const baseUrlMeta = (meta_url: string, id: string) =>
    `${cate.meta_url}/${meta_url}-${id}`;
  metaSEO.og_description = detail.description;
  metaSEO.og_title = detail.title;
  metaSEO.og_url = utils.baseURL + route.asPath;
  console.log(metaSEO.og_url);
  metaSEO.og_image = utils.baseURL + detail.img;
  metaSEO.twitter_description = detail.description;
  metaSEO.twitter_image = utils.baseURL + detail.img;
  let listPageNew = [];
  const [listNewsUse, setListNewsUse] = useState(listNews);
  const renderPageNumber = (listPage) => {
    const choosePageNumber = (page: number) => {
      currentPage = page;
      listPage?.map((item, index) => {
        if (currentPage == item.page_number) {
          if (currentPage == 1) {
            listPageNew = [
              listPage[index],
              listPage[index + 1],
              listPage[index + 2],
              listPage[index + 3],
            ];
          } else {
            listPageNew = [
              listPage[index - 1],
              listPage[index],
              listPage[index + 1],
              listPage[index + 2],
            ];
          }
        }
      });
      listPageNew = listPageNew.filter((item) => item != null);

      reloadListNews(paramId)
        .then((result) => {
          setListNewsUse(result);
        })
        .catch((err) => {});

      setPage(listPageNew);
    };

    listPage?.map((item, index) => {
      if (currentPage == item.page_number) {
        if (currentPage == 1) {
          listPageNew = [
            listPage[index],
            listPage[index + 1],
            listPage[index + 2],
            listPage[index + 3],
          ];
        } else {
          listPageNew = [
            listPage[index - 1],
            listPage[index],
            listPage[index + 1],
            listPage[index + 2],
          ];
        }
      }
    });
    listPageNew = listPageNew.filter((item) => item != null);
    const [page, setPage] = useState(listPageNew);
    return (
      <div className="col-lg-12 col-md-12">
        <div className="pagination-area">
          <Link
            href={{
              pathname: `/${paramId.categories}/${paramId.id}`,
              query: `page=${parseInt(currentPage) - 1}`,
            }}
          >
            <a
              className={
                currentPage == 1
                  ? "next page-numbers not-active"
                  : "next page-numbers"
              }
              onClick={() => choosePageNumber(parseInt(currentPage) - 1)}
            >
              <i className="fas fa-angle-double-left"></i>
            </a>
          </Link>
          {page.map((item, index) => {
            return (
              <Link
                href={{
                  pathname: `/${paramId.categories}/${paramId.id}`,
                  query: `page=${item?.page_number}`,
                }}
                key={index}
              >
                <a
                  className={
                    item?.page_number == currentPage
                      ? "page-numbers current"
                      : "page-numbers"
                  }
                  onClick={() => choosePageNumber(item?.page_number)}
                >
                  {item?.page_number}
                </a>
              </Link>
            );
          })}
          <Link
            href={{
              pathname: `/${paramId.categories}/${paramId.id}`,
              query: `page=${parseInt(currentPage) + 1}`,
            }}
          >
            <a
              className={
                currentPage == page?.length
                  ? "next page-numbers not-active"
                  : "next page-numbers"
              }
              onClick={() => choosePageNumber(parseInt(currentPage) + 1)}
            >
              <i className="fas fa-angle-double-right"></i>
            </a>
          </Link>
        </div>
      </div>
    );
  };
  const renderDetailsNews = (listNews) => {
    const renderContent = (item) => {
      return (
        <>
          <div className="blog-details">
            <div className="article-image">
              <img src={utils.baseURL + item.img} alt="image" />
            </div>
            <div className="article-content">
              <div className="entry-meta">
                <ul>
                  <li>
                    <i className="far fa-user-circle"></i> By:{" "}
                    <a href="#">{item.created_by}</a>
                  </li>
                  <li>
                    <i className="far fa-calendar-alt"></i> {item.created_at}
                  </li>
                  <li>
                    <i className="fas fa-eye"></i> {item.view}
                  </li>
                  <li>
                    <i className="far fa-comment-dots"></i>{" "}
                    <a href="#">3 Comments</a>
                  </li>
                </ul>
              </div>
              <p>{item.description}</p>
              <div dangerouslySetInnerHTML={{ __html: item.detail }} />
            </div>
            <div className="article-footer">
              <div className="article-tags">
                <span>
                  <i className="fas fa-bookmark"></i>
                </span>
                <a href="#">Fashion</a>,<a href="#">Games</a>,
                <a href="#">Travel</a>
              </div>
              <div className="article-share">
                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="comments-area">
            <div
              className="fb-comments"
              data-href={`https://developers.facebook.com/docs/plugins/comments#${utils.baseURL + route.asPath}`}
              data-width="100%"
              data-numposts="5"
            ></div>
          </div>
        </>
      );
    };
    return (
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {detail ? renderContent(detail) : ListNews({ cate, listNews })}
              {detail ? <></> : renderPageNumber(listPage)}
            </div>
            <div className="col-lg-4 col-md-12">
              {listSubCategories ? (
                LeftView({ cate, listSubCategories, pupolarNews })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <div className="shape13">
          <img src="/assets/img/shape/13.svg" alt="image" />
        </div>
        <div className="shape14">
          <img src="/assets/img/shape/13.svg" alt="image" />
        </div>
      </section>
    );
  };
  return (
    <UserTemplate title="Chi tiết bài viết">
      <Head>{SEOTag(metaSEO)}</Head>
      {HeaderTitle(headerData)}
      {renderDetailsNews(listNews)}
    </UserTemplate>
  );
}

export default DetailsNews;
