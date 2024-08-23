import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GeistSans } from "geist/font/sans";
import { TooltipProvider } from "@/components/ui/tooltip";
import Head from "next/head";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";

const metadata: Metadata = {
  title: "NextJS Starter",
  description: "A NextJS starter.",
  keywords: "NextJS, Shadcn UI, Shadcn, Starter, Next, React",
  openGraph: {
    url: "https://start.piarre.app/",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      //  max-w-2xl mx-auto py-12 sm:py-24 px-6
      suppressHydrationWarning
      className={cn("min-h-screen bg-background font-sans antialiased", GeistSans.variable)}
    >
      <Head>
        <title>NextJS Starter</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta charSet="utf-8" />
        <meta name="title" content={metadata.title as string} />
        <meta name="description" content={metadata.description as string} />
        <meta name="keywords" content="discord, docker, bot, oxie" />
        <meta name="author" content="Oxie" />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title as string} />
        <meta property="og:description" content={metadata.description as string} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.openGraph?.url as string} />
        {/* Twitter */}
        {/* <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Oxie" />
        <meta name="twitter:title" content="Oxie" />
        <meta name="twitter:description" content={metadata.description as string} />
        <meta name="twitter:image" content="https://start.piarre.app/" /> */}
        
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="bnPWEQXFZctS9hm43R6sc812zj3ltpbwHqiLGg73Bnc"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider delayDuration={0}>
          <Component {...pageProps} />
          <SpeedInsights />
          <Toaster richColors />
        </TooltipProvider>
      </ThemeProvider>
    </main>
  );
}
