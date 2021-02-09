import Head from "next/head";
import React, { Fragment } from "react";
import UserFotter from "../../components/userFotter";
import UserNavbar from "../../components/userNavbar";
import JS_Static from "../../staticData/JS.enum";

type UserTemplateProps = {
  head?: HTMLHeadElement;
};

const UserTemplate: React.FC<UserTemplateProps> = ({ head, ...props }) => {
  const importJSStaticFile = (JS_StaticList: string[]): JSX.Element[] => {
    return JS_StaticList.map((item: string, index: number) => (
      <script src={item} type="text/javascript" key={index}></script>
    ));
  };

  return (
    <Fragment>
      <Head>
        {head}
        {importJSStaticFile(JS_Static)}
      </Head>
      <UserNavbar />
      <main>{props.children}</main>
      <UserFotter />
    </Fragment>
  );
};

export default UserTemplate;
