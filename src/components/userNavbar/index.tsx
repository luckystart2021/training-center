import React, { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AssetsImg } from "../../staticData/img";
import { DTC_USER_ROUTE, RouteModel } from "../../routes";

export default function UserNavbar() {
  const router = useRouter();

  const renderNavLink = (navList: RouteModel[]) => {
    return navList.map((item: RouteModel, index: number) => (
      <li
        className={`nav-item ${router.pathname === item.path ? "active" : ""}`}
        key={index}
      >
        <Link href={item.path}>{item.title}</Link>
      </li>
    ));
  };
  return (
    <header className="navbar-area position-relative">
      <div className="evolta-responsive-nav">
        <div className="container">
          <div className="evolta-responsive-menu">
            <div className="logo">
              <Link href="/">
                <img src={AssetsImg.whiteLogo} alt="logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="evolta-nav navbar-style-two">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <a className="navbar-brand" href="index-2.html">
              <img src={AssetsImg.whiteLogo} alt="logo" />
            </a>
            <div
              className="collapse navbar-collapse mean-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">{renderNavLink(DTC_USER_ROUTE)}</ul>
              <div className="others-options">
                <div className="option-item">
                  <i className="search-btn flaticon-search" />
                  <i className="close-btn fas fa-times" />
                  <div className="search-overlay search-popup">
                    <div className="search-box">
                      <form className="search-form">
                        <input
                          className="search-input"
                          name="search"
                          placeholder="Search"
                          type="text"
                        />
                        <button className="search-button" type="submit">
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-xl-block d-none ml-2">
              <button className="btn btn-primary">
                Gọi Ngay: <strong>0349295446</strong>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
