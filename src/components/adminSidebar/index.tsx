import Link from "next/link";
import React, { Fragment } from "react";

const AdminSidebar = () => {
  return (
    <Fragment>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <Link href="/admin/dashboard">
            <a className="nav-link">
              <i className="fas fa-fw fa-chart-area" />
              <span>Dashboard</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/admin/cau-hoi">
            <a className="nav-link">
              <i className="fas fa-fw fa-chart-area" />
              <span>Câu Hỏi</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#tintuc"
            aria-expanded="true"
            aria-controls="tintuc"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Tin tức & Thông tin</span>
          </a>
          <div
            id="tintuc"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link href="/admin/news/create">
                <a className="collapse-item">Đăng bài</a>
              </Link>
              <Link href="/admin/news">
                <a className="collapse-item">Danh sách bài viết</a>
              </Link>
              <Link href="/admin/news/approve">
                <a className="collapse-item">Duyệt bài viết</a>
              </Link>
              <Link href="/admin/news/delete">
                <a className="collapse-item">Bài viết đã xóa</a>
              </Link>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#danhmuc"
            aria-expanded="true"
            aria-controls="danhmuc"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Danh mục bài viết</span>
          </a>
          <div
            id="danhmuc"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link href="/admin/categories">
                <a className="collapse-item">Danh sách danh mục</a>
              </Link>
             
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#information"
            aria-expanded="true"
            aria-controls="information"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Thông tin giới thiệu</span>
          </a>
          <div
            id="information"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link href="/admin/information">
                <a className="collapse-item">Thông tin</a>
              </Link>
              <Link href="/admin/information/create">
                <a className="collapse-item">Tạo thông tin</a>
              </Link>
              <Link href="/admin/information/update">
                <a className="collapse-item">Chỉnh sửa thông tin</a>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

export default AdminSidebar;
