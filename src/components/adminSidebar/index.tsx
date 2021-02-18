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
      </ul>
    </Fragment>
  );
};

export default AdminSidebar;
