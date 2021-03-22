import Link from "next/link";
import HeaderTitle from "../../src/components/headerTitle";
import UserTemplate from "../../src/containers/UserTemplate";
import { assetIcons } from "../../src/staticData/img";

export default function DetailAlbums() {
  const headerData = {
    title: "Trung Tam Sat Hach",
  };
  const data = {
    id: 1,
    category_meta: "hinh-anh",
    title: "Trung Tam Sat Hach",
    meta: "trung-tam-sat-hach",
    images: [
      "https://trungtamhoanggia.com/Images/Gallery/trungtamhoanggia_full_11042018_1004232.jpg",
      "https://unsplash.it/600.jpg?image=251",
      "https://unsplash.it/600.jpg?image=253",
      "https://trungtamhoanggia.com/Images/Gallery/trungtamhoanggia_full_11042018_1004232.jpg",
      "https://unsplash.it/600.jpg?image=251",
      "https://unsplash.it/600.jpg?image=253",
      "https://trungtamhoanggia.com/Images/Gallery/trungtamhoanggia_full_11042018_1004232.jpg",
      "https://unsplash.it/600.jpg?image=251",
      "https://unsplash.it/600.jpg?image=253",
    ],
  };
  const gallery = [
    {
      id: 1,
      thumbnail: "https://trungtamhoanggia.com/Images/Gallery/trungtamhoanggia_full_11042018_1004232.jpg",
      title: "TRUNG TÂM LẠC HỒNG 1",
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
        tempor ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.`,
    },
    {
      id: 2,
      thumbnail: "https://trungtamhoanggia.com/Images/Gallery/trungtamhoanggia_full_11042018_1004232.jpg",
      title: "TRUNG TÂM LẠC HỒNG 2",
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
        tempor ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.`,
    },
    {
      id: 3,
      thumbnail: "https://trungtamhoanggia.com/Images/Gallery/trungtamhoanggia_full_11042018_1004232.jpg",
      title: "TRUNG TÂM LẠC HỒNG 3",
      content: `Lorem ipsum dolor amet, adipiscing elit, sed do eiusmod
        tempor ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.`,
    },
  ];
  const renderGallaryMore = (gallery) => {
    const renderGallaryItems = (gallary) => {
      return gallary?.map((item, index) => {
        return (
          <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
            <div className="single-choose-box">
              <img src={item.thumbnail} alt={`img ${index}`} />
              <div className="title">
                <h3>{item.title}</h3>
              </div>
              <div className="content">
                <div className="inner-content">
                  <h3>
                    <Link href="/">{item.title}</Link>
                  </h3>
                  <p>{item.content}</p>
                  <Link href="/">
                    <a className="read-more-btn">
                      Read More <i className="flaticon-add-1" />
                    </a>
                  </Link>
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
  const renderGallery = (item) => {
    console.log(item.title);
    return (
      <div className="photo-gallery">
        <div className="container">
          <div className="intro">
            <h2 className="text-center">{item.title}</h2>
          </div>
          <div className="row photos">
            {item.images.map((item, index) => {
              return (
                <div className="col-sm-6 col-md-4 col-lg-3 item" key={index}>
                  <a href={item} data-lightbox="photos">
                    <img className="img-fluid" src={item} />
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
