import AdminHeader from "../../../src/components/adminHeader";
import AdminTemplate from "../../../src/containers/AdminTemplate";

export default function Index() {
  return (
    <AdminTemplate title="Banner Trang chủ">
      <div className="container-fluid">
        {AdminHeader("Banner Trang chủ")}
        <p>Banner Trang chủ</p>
      </div>
    </AdminTemplate>
  );
}
