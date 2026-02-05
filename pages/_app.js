import "@/styles/globals.css";
import { inter, sora } from "./font"; // adjust path if needed

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${sora.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
