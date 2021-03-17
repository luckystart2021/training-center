import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import userRequestService from "../../services/userService/user.service";
import { FotterAssets } from "../../staticData/img";

const UserFotter = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    userRequestService
      .getListNewsPupolar()
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderListNews = (news) => {
    return news.map((item, index) => {
      return (
        <>
          <li key={index}>
            <a href={`/${item.meta_category}/${item.meta}-${item.id}`}><i className="fa fa-forward" aria-hidden="true"></i>{" "}{item.title}</a>
          </li>
        </>
      );
    });
  };
  return (
    <Fragment>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img src={FotterAssets.whiteLogo} alt="{`img`}" />
                  </Link>
                  <p>
                    Quis ipsum suspendisse ultrices gravida. Risus commodo
                    viverra maecenas accumsan.
                  </p>
                </div>
                <ul className="social">
                  <li>
                    <Link href="/">
                      <a>
                        <i className="flaticon-facebook-letter-logo" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <i className="flaticon-twitter-black-shape" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <i className="flaticon-instagram-logo" />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a>
                        <i className="flaticon-youtube" />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>BÀI VIẾT MỚI</h3>
                <ul className="footer-services-list">
                  {news ? renderListNews(news) : <></>}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>LIÊN KẾT</h3>
                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span> 2750 Quadra Street Victoria, Canada
                  </li>
                  <li>
                    <span>Email:</span>
                    <Link href="/">
                      <span
                        className="__cf_email__"
                        data-cfemail="4124372e2d352001262c20282d6f222e2c"
                      >
                        [email&nbsp;protected]
                      </span>
                    </Link>
                  </li>
                  <li>
                    <span>Phone:</span> <Link href="/">+44 587 154756</Link>
                  </li>
                  <li>
                    <span>Fax:</span> <Link href="/">+44 785 4578964</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright 2020 <Link href="/">Pham Dong</Link>. All Rights
                  Reserved.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <ul>
                  <li>
                    <Link href="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/">Terms &amp; Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="circle-map">
          <img src={FotterAssets.circleMap} alt="{`img`}" />
        </div>
      </footer>
    </Fragment>
  );
};

export default UserFotter;
