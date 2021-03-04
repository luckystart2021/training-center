import AdminHeader from "../../../src/components/adminHeader";
import AdminTemplate from "../../../src/containers/AdminTemplate";
import adminReqService from "../../../src/services/adminService/admin.request.service";

Index.getInitialProps = async (context) => {
  let information = null;

  information = await adminReqService.showInformation();
  return {
    props: {
      information: information?.data,
    },
  };
};

export default function Index({ props }) {
  console.log(props.information);
  return (
    <AdminTemplate title="Thông tin giới thiệu">
      <div className="container-fluid">
        {AdminHeader("Thông tin giới thiệu")}
        <p>Thông tin giới thiệu</p>
      </div>
    </AdminTemplate>
  );
}
