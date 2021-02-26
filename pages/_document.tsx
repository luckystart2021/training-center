import Document, { Head, Html, Main, NextScript } from "next/document";
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
          {/* <!-- Bootstrap core JavaScript--> */}
          <script src="/assets/adminAssets/vendor/jquery/jquery.min.js"></script>
          <script src="/assets/adminAssets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

          {/* <!-- Core plugin JavaScript--> */}
          <script src="/assets/adminAssets/vendor/jquery-easing/jquery.easing.min.js"></script>

          {/* <!-- Custom scripts for all pages--> */}
          <script src="/assets/adminAssets/js/sb-admin-2.min.js"></script>

          {/* <!-- Page level plugins --> */}
          <script src="/assets/adminAssets/vendor/chart.js/Chart.min.js"></script>

          {/* <!-- Page level custom scripts --> */}
          <script src="/assets/adminAssets/js/demo/chart-area-demo.js"></script>
          <script src="/assets/adminAssets/js/demo/chart-pie-demo.js"></script>
          {this.importJSStaticFile(JS_Static)}
          <NextScript />
        </body>
      </Html>
    );
  }
}
