import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Header from "~/components/Header";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Abdelrhiim Abdelmoneim",
  description: "Abdelrhiim is a full-stack developer with 1 year of experience",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`font-sans ${inter.variable} h-[5000px] bg-slate-50 pt-28 text-slate-950 sm:pt-36 dark:bg-slate-900 dark:text-slate-50 dark:text-opacity-90`}
      >
        <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <Header />
        <Toaster position="bottom-right"  />
        {children}
      </body>
    </html>
  );
}
