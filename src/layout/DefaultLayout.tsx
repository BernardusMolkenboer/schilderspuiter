import { ReactNode } from "react";
import Head from "next/head";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || "A Brand New Company"}</title>
        <meta
          name="description"
          content={description || "Default description"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <div className="font-roboto relative block w-full">
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
