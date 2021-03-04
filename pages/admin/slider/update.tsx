import AdminHeader from "../../../src/components/adminHeader";
import AdminTemplate from "../../../src/containers/AdminTemplate";

export default function Index() {
  return (
    <AdminTemplate title="Cập nhật Banner Trang chủ">
      <div className="container-fluid">
        {AdminHeader("Cập nhật Banner Trang chủ")}
        <p>Cập nhật Banner Trang chủ</p>
      </div>
    </AdminTemplate>
  );
}
