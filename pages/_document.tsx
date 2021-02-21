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
        <link rel="stylesheet" href="../assets/css/style.css" />
        <Head></Head>
        <body>
          {LoadingPage()}
          <Main />
          {this.importJSStaticFile(JS_Static)}
          <NextScript />
        </body>
      </Html>
    );
  }
}
