import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import Router, { useRouter } from "next/router";

type T_AdminTemplateProps = {
  head?: HTMLHeadElement;
  title: string;
  className?: string;
};

const AdminTemplate: React.FC<T_AdminTemplateProps> = ({
  head,
  title,
  className,
  ...props
}) => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  });
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        {head}
      </Head>
      <main id="wrapper">
        <AdminSidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content w-100">
            <AdminTopBar />
            <div className={className}>
            {props.children}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default AdminTemplate;
