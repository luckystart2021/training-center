import AdminHeader from "../../../src/components/adminHeader";
import AdminTemplate from "../../../src/containers/AdminTemplate";

export default function Index() {
  return (
    <AdminTemplate title="Thêm Banner Trang chủ">
      <div className="container-fluid">
        {AdminHeader("Thêm Banner Trang chủ")}
        <p>Thêm Banner Trang chủ</p>
      </div>
    </AdminTemplate>
  );
}
