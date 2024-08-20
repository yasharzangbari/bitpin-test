import { ReactElement, ReactNode } from "react";
import {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from "next";
import { AppProps } from "next/app";

export type NextPageWithLayout<P = Record<string, any>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement | ReactNode) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type ExportPageType = {
  component: NextPageWithLayout;
  getStaticProps?: GetStaticProps;
  getStaticPaths?: GetStaticPaths;
  getServerSideProps?: GetServerSideProps;
};
