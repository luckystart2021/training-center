import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import Router, { useRouter } from "next/router";
import localStorageService from "../../services/localStorage.service/localStorage.service";

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
    console.log(localStorageService.accessToken.get())
    if (localStorageService.accessToken.get() == null) {
      router.push("/login");
    }
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
