import Head from "next/head";
import React, { Fragment } from "react";
import UserFotter from "../../components/userFotter";
import UserNavbar from "../../components/userNavbar";

type UserTemplateProps = {
  head?: HTMLHeadElement;
  title: string;
};

const UserTemplate: React.FC<UserTemplateProps> = ({
  head,
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
      <main>{props.children}</main>
      <UserFotter />
    </Fragment>
  );
};

export default UserTemplate;
