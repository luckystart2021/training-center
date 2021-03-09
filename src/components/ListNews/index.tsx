import { Console } from "console";
import Link from "next/link";
import { Fragment } from "react";
import LeftView from "../leftView";
import Utils from "../../utils/constant";

function ListNews({ cate, listNews }) {
  const subString = (string: string, length: number): string =>
    string.length < length ? string : string.substring(0, length) + "...";
  const baseUrlMeta = (meta_url: string, id: string) =>
    `/${cate.meta_url}/${meta_url}-${id}`;

  const renderNewOrther = (listNews) => {
    return listNews.map((item, index) => {
      if (!item.is_one) {
        return (
          <div className="col-lg-6 col-md-6" key={index}>
            <div className="single-blog-post">
              <div className="entry-thumbnail">
                <a href={baseUrlMeta(item.meta, item.id)}>
                  <img src={Utils.baseURL + item.img} alt="image" />
                </a>
              </div>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <a href="#">{item.created_by}</a>
                    </li>
                    <li>{item.created_at}</li>
                  </ul>
                </div>
                <h3>
                  <a href={baseUrlMeta(item.meta, item.id)}>{item.title}</a>
                </h3>
                <p>{subString(item.description, 200)}</p>
                <a
                  href={baseUrlMeta(item.meta, item.id)}
                  className="read-more-btn"
                >
                  Xem thêm <i className="flaticon-add-1"></i>
                </a>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="col-lg-12 col-md-12" key={index}>
            <div className="single-blog-post">
              <div className="entry-thumbnail">
                <a href={baseUrlMeta(item.meta, item.id)}>
                  <img
                    style={{ height: "auto" }}
                    src={Utils.baseURL + item.img}
                    alt="image"
                  />
                </a>
              </div>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <a href="#">{item.created_by}</a>
                    </li>
                    <li>{item.created_at}</li>
                  </ul>
                </div>
                <h3>
                  <a href={baseUrlMeta(item.meta, item.id)}>{item.title}</a>
                </h3>
                <p>{item.description.length}</p>
                <a
                  href={baseUrlMeta(item.meta, item.id)}
                  className="read-more-btn"
                >
                  Xem thêm <i className="flaticon-add-1"></i>
                </a>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  if (listNews) {
    return <Fragment>{renderNewOrther(listNews)}</Fragment>;
  } else {
    <div className="row">Khong cos Data</div>;
  }
}
export default ListNews;
