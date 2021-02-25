import Link from "next/link";
import { useEffect, useState } from "react";
import userRequestService from "../../services/userService/user.service";
import Utils from "../utils/constant";

const listCategoris = [
  {
    id: 1,
    title: "Thông Tin",
    meta_url: "thong-tin",
  },
  {
    id: 2,
    title: "Tin Tức",
    meta_url: "tin-tuc",
  },
];

export default function LeftView({ cate, listSubCategories, pupolarNews }) {
  const baseUrlMeta = (meta_url: string, id: string = null) => {
    if (id == null) return `/${cate.meta_url}/${meta_url}`;
    else return `/${cate.meta_url}/${meta_url}-${id}`;
  };
  const subString = (string: string, length: number): string =>
    string.length < length ? string : string.substring(0, length) + "...";
  const renderPopularPosts = (popularPosts) => {
    const renderItem = (popularPosts) => {
      return popularPosts?.map((item, index) => {
        return (
          <article className="item" key={index}>
            <Link href={baseUrlMeta(item.meta, item.id)}>
              <a className="thumb">
                <span
                  style={{
                    backgroundImage: "url(" + Utils.baseURL + item.img + ")",
                  }}
                  className="fullimage cover bg1"
                  role="img"
                ></span>
              </a>
            </Link>

            <div className="info">
              <time dateTime="2019-06-30">{item.created_at}</time>
              <h4 className="title usmall">
                <Link href={baseUrlMeta(item.meta, item.id)}>
                  <a>{subString(item.title, 70)}</a>
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

  const renderSubCategories = (subCategories) => {
    const renderItem = (subCategories) => {
      return subCategories?.map((item, index) => {
        return (
          <li key={index}>
            <Link href={baseUrlMeta(item.meta)}>
              <a>{item.title}</a>
            </Link>
          </li>
        );
      });
    };

    return (
      <section className="widget widget_recent_entries">
        <h3 className="widget-title">{cate.title}</h3>
        <ul>{renderItem(subCategories)}</ul>
      </section>
    );
  };

  const renderCategoris = (listCategoris) => {
    const renderItem = (listCategoris) => {
      return listCategoris.map((item, index) => {
        return (
          <li key={index}>
            <Link href={`/${item.meta_url}`}>
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
  const [movies, setMovies] = useState([]); //Displays the table of search results
  const [search, setSearch] = useState(""); //Value in the research input
  const [query, setQuery] = useState(""); //Value to look for when submit
  useEffect(() => {
    searchMovie();
  }, [query]);
  const searchMovie = async () => {
    console.log("query", query);
    const request = await userRequestService.search(query.normalize("NFC"));
    const response = request.data;
    console.log(response);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  const submitSearchMovie = (event) => {
    event.preventDefault();
    setQuery(search);
  };
  return (
    <aside className="widget-area" id="secondary">
      <section className="widget widget_search">
        <form className="search-form" onSubmit={() => {submitSearchMovie}}>
          <label>
            <span className="screen-reader-text">Search for:</span>
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
              value={search}
              onChange={handleChange}
            />
          </label>
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </section>
      {renderPopularPosts(pupolarNews)}
      {/* {renderRecentComments()} */}
      {renderSubCategories(listSubCategories)}
      {renderCategoris(listCategoris)}
      {/* {renderListTags(listTags)} */}
    </aside>
  );
}
