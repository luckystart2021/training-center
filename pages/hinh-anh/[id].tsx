import { DocumentContext } from "next/document";
import Link from "next/link";
import HeaderTitle from "../../src/components/headerTitle";
import utils from "../../src/components/utils/constant";
import UserTemplate from "../../src/containers/UserTemplate";
import userRequestService from "../../src/services/userService/user.service";
import { assetIcons } from "../../src/staticData/img";

DetailAlbums.getInitialProps = async (ctx: DocumentContext) => {
  let query = ctx.query;
  let detail = null;
  let gallery = null;
  try {
    detail = await userRequestService.getDetailAlbum(query.id);
  } catch (error) {}
  try {
    gallery = await userRequestService.get3album();
  } catch (error) {}
  return {
    props: {
      query: query,
      detail: detail?.data,
      gallery: gallery?.data,
    },
  };
};

export default function DetailAlbums({ props }) {
  const data = props.detail;
  const gallery = props.gallery;
  const headerData = {
    title: data.title,
  };
  const renderGallaryMore = (gallery) => {
    console.log(gallery);
    const renderGallaryItems = (gallary) => {
      return gallary?.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <div className="single-choose-box">
              <img
                src={utils.baseURL + item.photo.img}
                alt={`${item.album_name}`}
              />
              <div className="title">
                <h3>{item.album_name}</h3>
              </div>
              <div className="content">
                <div className="inner-content">
                  {/* <p>{item.content}</p> */}
                  <Link href={`/hinh-anh/${item.id}`}>
                    <a className="read-more-btn">
                      <img
                        src={utils.baseURL + item.photo.img}
                        alt={`${item.album_name}`}
                      />
                    </a>
                  </Link>
                  <h3>
                    <Link href={`/hinh-anh/${item.id}`}>{item.album_name}</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        );
      });
    };
    return (
      <section className="blog-area extra-pb ptb-110">
        <div className="container">
          <div className="section-title-style-two text-center">
            <div className="content">
              <span>ALBUM</span>
              <h2>HÌNH ẢNH</h2>
            </div>
          </div>
          <div className="row">{renderGallaryItems(gallery)}</div>
        </div>
        <div className="shape14">
          <img src={assetIcons.shape_13} alt={`img`} />
        </div>
        <div className="shape15">
          <img src={assetIcons.shape_13} alt={`img`} />
        </div>
      </section>
    );
  };

  const renderGallery = (items) => {
    return (
      <div className="photo-gallery">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">{items.title}</h2>
          </div>
          <div className="row photos">
            {items.photos.map((item, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                  <a
                    href={`/hinh-anh/${props.query.id}`}
                    data-lightbox="photos"
                  >
                    <img className="img-fluid" src={utils.baseURL + item.img} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return (
    <UserTemplate title="Hình Ảnh">
      {HeaderTitle(headerData)}
      {/* <!-- Page Content --> */}
      {renderGallery(data)}
      {renderGallaryMore(gallery)}
    </UserTemplate>
  );
}
