import type { Metadata } from "next";
import Sidebar from "~/components/dashboard/common/sidebar";
import Header from "~/components/dashboard/common/header";
import "~/styles/globals.css";
import { ThemeProvider } from "~/components/theme-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          {children}
        </div>
      </ThemeProvider>
    </div>
  );
}
