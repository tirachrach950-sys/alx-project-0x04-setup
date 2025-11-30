import "@/styles/globals.css"; // Make sure this path is correct
import type { AppProps } from "next/app";
import Layout from "@/components/layouts/Layout"; // Make sure Layout exists
import { CountProvider } from "@/context/CountContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}

