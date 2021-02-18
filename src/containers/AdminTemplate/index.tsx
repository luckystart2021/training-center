import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import authService from "../../services/authService/auth.service";
import AdminSidebar from "../../components/adminSidebar";
import AdminTopBar from "../../components/adminTopBar";

type T_AdminTemplateProps = {
  head?: HTMLHeadElement;
  title: string;
};

const AdminTemplate: React.FC<T_AdminTemplateProps> = ({
  head,
  title,
  ...props
}) => {
  const router = useRouter();

  useEffect(() => {
    const isAdmin = authService.checkAuthAdmin();
    if (!isAdmin) {
      router.push("/login");
    }
  }, []);
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />
        {head}
      </Head>
      <main id="wrapper">
        <AdminSidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content w-100">
            <AdminTopBar />
            {props.children}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default AdminTemplate;
