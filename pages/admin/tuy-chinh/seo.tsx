import { useEffect, useState } from "react";
import AdminHeader from "../../../src/components/adminHeader";
import Inducator from "../../../src/components/indicator";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";

export default function SEO() {
  const [dataSEO, setDataSEO] = useState(null);
  useEffect(() => {
    adminReqService.showKeywordSEO().then((res) => {
      setDataSEO(res.data);
    });
  }, []);
  const postForm = (event) => {
    event.preventDefault();
    var data = JSON.stringify({
      description: event.target.description.value,
      keywords: event.target.keywords.value,
      fb_app_id: event.target.fb_app_id.value,
      og_title: event.target.og_title.value,
      og_url: event.target.og_url.value,
      og_image: event.target.og_image.value,
      og_description: event.target.og_description.value,
      og_site_name: event.target.og_site_name.value,
      og_see_also: event.target.og_see_also.value,
      og_locale: event.target.og_locale.value,
      article_author: event.target.article_author.value,
      twitter_card: event.target.twitter_card.value,
      twitter_url: event.target.twitter_url.value,
      twitter_title: event.target.twitter_title.value,
      twitter_description: event.target.twitter_description.value,
      twitter_image: event.target.twitter_image.value,
      author: event.target.author.value,
      generator: event.target.generator.value,
      copyright: event.target.copyright.value,
    });
    console.log(data)
  };
  const renderContent = () => {
    return (
      <form onSubmit={postForm}>
        <div className="form-group">
          <label htmlFor="description">description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            defaultValue={dataSEO.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="keywords">keywords</label>
          <input
            type="text"
            className="form-control"
            id="keywords"
            defaultValue={dataSEO.keywords}
          />
        </div>
        <div className="form-group">
          <label htmlFor="fb_app_id">fb_app_id</label>
          <input
            type="text"
            className="form-control"
            id="fb_app_id"
            defaultValue={dataSEO.fb_app_id}
          />
        </div>
        <div className="form-group">
          <label htmlFor="og_title">og_title</label>
          <input
            type="text"
            className="form-control"
            id="og_title"
            defaultValue={dataSEO.og_title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="og_url">og_url</label>
          <input
            type="text"
            className="form-control"
            id="og_url"
            defaultValue={dataSEO.og_url}
          />
        </div>
        <div className="form-group">
          <label htmlFor="og_image">og_image</label>
          <input
            type="text"
            className="form-control"
            id="og_image"
            defaultValue={dataSEO.og_image}
          />
        </div>

        <div className="form-group">
          <label htmlFor="og_description">og_description</label>
          <input
            type="text"
            className="form-control"
            id="og_description"
            defaultValue={dataSEO.og_description}
          />
        </div>

        <div className="form-group">
          <label htmlFor="og_site_name">og_site_name</label>
          <input
            type="text"
            className="form-control"
            id="og_site_name"
            defaultValue={dataSEO.og_site_name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="og_see_also">og_see_also</label>
          <input
            type="text"
            className="form-control"
            id="og_see_also"
            defaultValue={dataSEO.og_see_also}
          />
        </div>

        <div className="form-group">
          <label htmlFor="og_locale">og_locale</label>
          <input
            type="text"
            className="form-control"
            id="og_locale"
            defaultValue={dataSEO.og_locale}
          />
        </div>
        <div className="form-group">
          <label htmlFor="article_author">article_author</label>
          <input
            type="text"
            className="form-control"
            id="article_author"
            defaultValue={dataSEO.article_author}
          />
        </div>

        <div className="form-group">
          <label htmlFor="twitter_card">twitter_card</label>
          <input
            type="text"
            className="form-control"
            id="twitter_card"
            defaultValue={dataSEO.twitter_card}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter_url">twitter_url</label>
          <input
            type="text"
            className="form-control"
            id="twitter_url"
            defaultValue={dataSEO.twitter_url}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter_title">twitter_title</label>
          <input
            type="text"
            className="form-control"
            id="twitter_title"
            defaultValue={dataSEO.twitter_title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter_description">twitter_description</label>
          <input
            type="text"
            className="form-control"
            id="twitter_description"
            defaultValue={dataSEO.twitter_description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="twitter_image">twitter_image</label>
          <input
            type="text"
            className="form-control"
            id="twitter_image"
            defaultValue={dataSEO.twitter_image}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            defaultValue={dataSEO.author}
          />
        </div>
        <div className="form-group">
          <label htmlFor="generator">generator</label>
          <input
            type="text"
            className="form-control"
            id="generator"
            defaultValue={dataSEO.generator}
          />
        </div>
        <div className="form-group">
          <label htmlFor="copyright">copyright</label>
          <input
            type="text"
            className="form-control"
            id="copyright"
            defaultValue={dataSEO.copyright}
          />
        </div>
        {/* {dataSEO.articles_tag.map((item, index) => {
          return (
            <div className="form-group">
              <label htmlFor="copyright">articles_tag</label>
              <input
                type="text"
                className="form-control"
                id="copyright"
                defaultValue={item.name}
              />
            </div>
          );
        })} */}
        <button type="submit" className="btn btn-success">
          Lưu
        </button>
      </form>
    );
  };
  return (
    <AdminTemplate title="Keyword SEO">
      <div className="container-fluid">
        {AdminHeader("Manager Keyword SEO")}
        {dataSEO ? renderContent() : Inducator()}
      </div>
    </AdminTemplate>
  );
}
