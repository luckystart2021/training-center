import Head from "next/head";
import React, { Fragment, useEffect } from "react";
import UserFotter from "../../components/userFotter";
import UserNavbar from "../../components/userNavbar";

type UserTemplateProps = {
  head?: HTMLHeadElement;
  className?: string;
  title: string;
};

const UserTemplate: React.FC<UserTemplateProps> = ({
  head,
  className = "",
  title,
  ...props
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        {head}
      </Head>
      <UserNavbar />
      <main className={className}>{props.children}</main>
      <UserFotter />
    </Fragment>
  );
};

export default UserTemplate;
