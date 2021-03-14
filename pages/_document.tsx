import Document, { Head, Html, Main, NextScript } from "next/document";
import { useState } from "react";
import LoadingPage from "../src/components/LoadingPage";
import JS_Static from "../src/staticData/JS.enum";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  importJSStaticFile = (JS_StaticList: string[]): JSX.Element[] => {
    return JS_StaticList.map((item: string, index: number) => (
      <script src={item} type="text/javascript" key={index}></script>
    ));
  };

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          {/* {LoadingPage()} */}
          <Main />
          <NextScript />
          <div id="fb-root"></div>
          <script
            async
            defer
            crossOrigin="anonymous"
            src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v10.0&appId=1187499518355664&autoLogAppEvents=1"
            nonce="NRUtmJo0"
          ></script>
          {/* <!-- Bootstrap core JavaScript--> */}
          <script src="/assets/adminAssets/vendor/jquery/jquery.min.js"></script>
          <script src="/assets/js/popper.min.js"></script>
          <script src="/assets/adminAssets/vendor/bootstrap/js/bootstrap.min.js"></script>

          {/* <!-- Core plugin JavaScript--> */}
          <script src="/assets/adminAssets/vendor/jquery-easing/jquery.easing.min.js"></script>

          {/* <!-- Custom scripts for all pages--> */}
          <script src="/assets/adminAssets/js/sb-admin-2.min.js"></script>

          {/* <!-- Page level plugins --> */}
          <script src="/assets/adminAssets/vendor/chart.js/Chart.min.js"></script>

          {this.importJSStaticFile(JS_Static)}
        </body>
      </Html>
    );
  }
}
