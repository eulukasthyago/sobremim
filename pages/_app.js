import "../styles/style.css";
import Head from "next/head";
import HeaderPage from "../Components/Header";
import { Grommet, extendDefaultTheme } from "grommet";

const custonTheme = {
  globa: {
    colors: {
      vermelho: "red",
    },
  },
};

export default function App({ Component, pageProps, router }) {
  return (
    <Grommet theme={custonTheme}>
      <Head>
        <title>Lucas Tiago da Silva Macedo | {router.pathname}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderPage />
      <Component {...pageProps} />
    </Grommet>
  );
}
