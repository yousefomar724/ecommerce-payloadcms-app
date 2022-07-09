import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="<https://app.snipcart.com>" />
        <link rel="preconnect" href="<https://cdn.snipcart.com>" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"
        />
        <link rel="shortcut icon" href="../public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
        <div
          hidden
          id="snipcart"
          data-api-key="NTA1NzRhZDktNDY2MC00ZmQ2LWFiNzAtN2Y0ZjY0OGZhZWNlNjM3OTI3MTk2NjcxOTIxMzE4"
          data-config-modal-style="side"
        ></div>
      </body>
    </Html>
  );
}
