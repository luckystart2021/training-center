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

const category = [
  {
    id: 1,
    title: "Tin Tức",
    meta_url: "",
  },
  {
    id: 2,
    title: "Thông Tin",
    meta_url: "",
  },
];

function NewsPage({ listNews, cate, listSubCategories }) {
  const renderListNews = (listNews) => {
    return (
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {ListNews({ cate, listNews })}
            </div>
            <div className="col-lg-4 col-md-12">
              {LeftView({ cate, listSubCategories })}
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
      {renderListNews(listNews)}
    </UserTemplate>
  );
}

NewsPage.getInitialProps = async (ctx: DocumentContext) => {
  let listNews = null;
  let listSubCategories = null;
  const paramId = ctx.query;
  const cate = paramId.categories == "tin-tuc" ? category[0] : category[1];
  cate.meta_url = `${paramId.categories}`;
  try {
    listNews = await userRequestService.getListNews(cate.id);
    listSubCategories = await userRequestService.getListSubCategoriesById(
      cate.id
    );
  } catch (error) {
    console.log(error);
  }
  return {
    listNews: listNews?.data,
    cate,
    listSubCategories: listSubCategories?.data,
  };
};

export default NewsPage;
