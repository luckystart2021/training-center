import UserTemplate from "../../../src/containers/UserTemplate";
import userRequestService from "../../../src/services/userService/user.service";
import { DocumentContext } from "next/document";
import LeftView from "../../../src/components/leftView";
import HeaderTitle from "../../../src/components/headerTitle";

//https://600fdd7a6c21e1001704f836.mockapi.io/news/1
const headerData = {
  title: "Tin Tức",
};

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

function DetailsNews({ detail, paramId }) {
  headerData.title = detail.title;
  const cate = paramId.categories == "tin-tuc" ? category[0] : category[1];
  cate.meta_url = paramId.categories;
  console.log(cate);
  cate.meta_url = paramId.categories;

  const baseUrlMeta = (meta_url: string, id: string) =>
    `${cate.meta_url}/${meta_url}-${id}`;

  const renderDetailsNews = () => {
    const renderContent = (item) => {
      return (
        <div className="blog-details">
          <div className="article-image">
            <img src={item.image} alt="image" />
          </div>
          <div className="article-content">
            <div className="entry-meta">
              <ul>
                <li>
                  <i className="far fa-user-circle"></i> By:{" "}
                  <a href="#">{item.create_by}</a>
                </li>
                <li>
                  <i className="far fa-calendar-alt"></i> {item.create_date}
                </li>
                <li>
                  <i className="fas fa-tags"></i>{" "}
                  {item.tags.map((item, index) => {
                    return (
                      <>
                        {" "}
                        <a href="#" key={index}>
                          {item.title}
                        </a>
                      </>
                    );
                  })}
                </li>
                <li>
                  <i className="far fa-clock"></i> 2 Mins Read
                </li>
                <li>
                  <i className="fas fa-eye"></i>
                  {item.view}
                </li>
                <li>
                  <i className="far fa-comment-dots"></i>{" "}
                  <a href="#">3 Comments</a>
                </li>
              </ul>
            </div>
            {item.details}
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
      );
    };
    return (
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">{renderContent(detail)}</div>
            <div className="col-lg-4 col-md-12">{LeftView({ cate })}</div>
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
      {HeaderTitle(headerData)}
      {renderDetailsNews()}
    </UserTemplate>
  );
}

DetailsNews.getInitialProps = async (ctx: DocumentContext) => {
  const param = ctx.query.id;
  const paramId = ctx.query;
  let res = null;
  if (typeof param === "string") {
    const id = param.split("-").pop();
    res = await userRequestService.getNewsById(id);
  }
  return { detail: res.data, paramId };
};
export default DetailsNews;
