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
import ListNews from "../../src/components/ListNews";
import { useEffect, useState } from "react";

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

async function reloadListNews(cate, page: number) {
  let data = await userRequestService.getListNews(cate.id, page);
  return data?.data;
}

function NewsPage({
  listNews,
  cate,
  listSubCategories,
  listPage,
  currentPage,
  pupolarNews,
}) {
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

      reloadListNews(cate, currentPage)
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
          <Link href="#">
            <a className="prev page-numbers">
              <i className="fas fa-angle-double-left"></i>
            </a>
          </Link>
          {page.map((item, index) => {
            return (
              <Link
                href={{
                  pathname: `${cate.meta_url}`,
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

          <Link href="#">
            <a className="next page-numbers">
              <i className="fas fa-angle-double-right"></i>
            </a>
          </Link>
        </div>
      </div>
    );
  };
  const renderListNews = (listNews) => {
    return (
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {ListNews({ cate, listNews })}
                {renderPageNumber(listPage)}
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              {LeftView({ cate, listSubCategories, pupolarNews })}
            </div>
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

  return (
    <UserTemplate title="Chi tiết bài viết">
      <Head>
        <title>{cate.title}</title>
      </Head>
      {headerTitle(cate)}
      {renderListNews(listNewsUse)}
    </UserTemplate>
  );
}

NewsPage.getInitialProps = async (ctx: DocumentContext) => {
  let listNews = null;
  let listSubCategories = null;
  let listPage = null;
  let pupolarNews = null;
  const paramId = ctx.query;
  const cate = paramId.categories == "tin-tuc" ? category[1] : category[0];
  cate.meta_url = `${paramId.categories}`;
  try {
    listNews = await userRequestService.getListNews(cate.id, 1);
    listPage = await userRequestService.getListPagination(cate.id);
    listSubCategories = await userRequestService.getListSubCategoriesById(
      cate.id
    );
    pupolarNews = await userRequestService.getListNewsPupolar();
  } catch (error) {}
  return {
    listNews: listNews?.data,
    cate,
    listSubCategories: listSubCategories?.data,
    listPage: listPage?.data,
    currentPage: paramId.page ?? "1",
    pupolarNews: pupolarNews?.data,
  };
};

export default NewsPage;
