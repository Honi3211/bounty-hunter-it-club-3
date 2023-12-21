import "@/styles/globals.css";
import { MainContextProvider } from "@/context";

export default function App({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <Component {...pageProps} />
    </MainContextProvider>
  );
}
