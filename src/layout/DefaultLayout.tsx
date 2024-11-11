import { useEffect } from "react";
import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

export default function Layout({ children, title, description }: any) {
  useEffect(() => {
    const handleLoadGTM = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${process.env.NEXT_PUBLIC_GTM_TRACKING_ID}`;
      document.head.appendChild(script);

      const noscript = document.createElement("noscript");
      noscript.innerHTML = `
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_TRACKING_ID}"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      `;
      document.body.appendChild(noscript);
    };

    window.addEventListener("scroll", handleLoadGTM, { once: true });
    return () => {
      window.removeEventListener("scroll", handleLoadGTM);
    };
  }, []);

  return (
    <>
      <div className="font-roboto relative block w-full">
        <Head>
          <title>{title ? title : "A Brand New Company"}</title>
          <meta name="description" content={description || ""} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Header />
        <main className="relative w-full overflow-x-hidden bg-background text-foreground transition-colors">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
