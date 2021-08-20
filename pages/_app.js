import { Provider } from "next-auth/client";
import Layout from "../components/Layout";
// import "tailwindcss/tailwind.css";
import "../styles/mb.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}
