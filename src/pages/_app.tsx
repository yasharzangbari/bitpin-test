import React from "react";
import "../theme/global.css";
import type { AppProps } from "next/app";
import { useTheme } from "~/hooks";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "~/components";
import { IranSansX } from "~/theme/font";
import StyledComponentsRegistry from "~/lib/registry";
import { GlobalStyles } from "~/theme/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  const { theme, changeTheme } = useTheme();
  const queryClient = new QueryClient();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <main className={IranSansX.className}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <StyledComponentsRegistry>
            <Header changeTheme={changeTheme} />
            <Component {...pageProps} />
          </StyledComponentsRegistry>
        </ThemeProvider>
      </QueryClientProvider>
    </main>
  );
}
