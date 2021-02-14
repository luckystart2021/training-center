import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import Router, { useRouter } from "next/router";

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
    router.push("/login");
  });
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        {head}
      </Head>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default AdminTemplate;
