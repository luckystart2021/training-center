import AdminHeader from "../../../src/components/adminHeader";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import React, { Component, useState } from "react";

export default function Index() {
  return (
    <AdminTemplate title="Slider Trang chủ">
      <div className="container-fluid">{AdminHeader("Slider Trang chủ")}</div>
    </AdminTemplate>
  );
}
