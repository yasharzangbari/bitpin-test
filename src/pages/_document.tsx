import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { IranSansX } from "~/theme/font";

export default function Document() {
  return (
    <Html lang="fa" className={IranSansX.className} dir="rtl">
      <Head />
      <body className={IranSansX.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
