import localFont from "next/font/local";

export const IranSansX = localFont({
  variable: "--font-iransans-x",
  src: [
    {
      path: "../assets/fonts/woff2/IRANSansX-Thin.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff2/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff2/IRANSansX-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/woff2/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
