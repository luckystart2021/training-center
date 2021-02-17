import { Console } from "console";
import Link from "next/link";
import LeftView from "../leftView";
import Utils from "../utils/constant";

function ListNews({ cate, listNews }) {
  const subString = (string: string, length: number): string =>
    string.length < length ? string : string.substring(0, length) + "...";
  const baseUrlMeta = (meta_url: string, id: string) =>
    `/${cate.meta_url}/${meta_url}-${id}`;
console.log('dongn3', listNews)
  const firstNews = listNews ? listNews[0] : null;
  const renderNews1st = (item) => {
    console.log('dongph3', item)
    return (
      <div className="col-lg-12 col-md-12">
        <div className="single-blog-post">
          <div className="entry-thumbnail">
            <Link href={baseUrlMeta(item.meta, item.id)}>
              <a>
                <img style={{ height: "auto" }} src={Utils.baseURL + item.img} alt="image" />
              </a>
            </Link>
          </div>
          <div className="entry-post-content">
            <div className="entry-meta">
              <ul>
                <li>
                  <Link href="#">
                    <a>{item.created_by}</a>
                  </Link>
                </li>
                <li>{item.created_at}</li>
              </ul>
            </div>
            <h3>
              <Link href={baseUrlMeta(item.meta, item.id)}>
                <a>{item.title}</a>
              </Link>
            </h3>
            <p>{item.description.length}</p>
            <Link href={baseUrlMeta(item.meta, item.id)}>
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
                <Link href={baseUrlMeta(item.meta, item.id)}>
                  <a>
                    <img src={Utils.baseURL + item.img} alt="image" />
                  </a>
                </Link>
              </div>
              <div className="entry-post-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <Link href="#">
                        <a>{item.created_by}</a>
                      </Link>
                    </li>
                    <li>{item.created_at}</li>
                  </ul>
                </div>
                <h3>
                  <Link href={baseUrlMeta(item.meta, item.id)}>
                    <a>{item.title}</a>
                  </Link>
                </h3>
                <p>{subString(item.description, 200)}</p>
                <Link href={baseUrlMeta(item.meta, item.id)}>
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
  if (listNews) {
    return (
      <div className="row">
        {renderNews1st(firstNews)}
        {renderNewOrther(listNews)}
        {renderPageNumber()}
      </div>
    );
  } else {
    <div className="row">Khong cos Data</div>;
  }
}
export default ListNews;
