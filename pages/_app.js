import { Provider } from "next-auth/client";

import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}
