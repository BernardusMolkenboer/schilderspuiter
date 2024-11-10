import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Script from "next/script";

export default function Layout({ children, title, description }: any) {
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_TRACKING_ID}');
          `}
        </Script>
        <Header />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PFC7VJR7"
            height="0"
            width="0"
            className="hidden"
          ></iframe>
        </noscript>
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
