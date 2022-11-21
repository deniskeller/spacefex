import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
					<link rel="stylesheet" href="https://use.typekit.net/fzy6ewm.css"></link>
					
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
				
      </Html>
    );
  }
}

export default MyDocument;
