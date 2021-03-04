import AdminHeader from "../../../src/components/adminHeader";
import AdminTemplate from "../../../src/containers/AdminTemplate";

export default function Index() {
  return (
    <AdminTemplate title="Danh mục bài viết">
      <div className="container-fluid">
          {AdminHeader("Danh mục bài viết")}
          <p>Danh mục bài viết</p>
      </div>
    </AdminTemplate>
  );
}
