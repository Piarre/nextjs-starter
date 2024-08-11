import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GeistSans } from "geist/font/sans";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      //  max-w-2xl mx-auto py-12 sm:py-24 px-6
      className={cn("min-h-screen bg-background font-sans antialiased", GeistSans.variable)}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider delayDuration={0}>
          <Component {...pageProps} />
        </TooltipProvider>
      </ThemeProvider>
    </main>
  );
}
