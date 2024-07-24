import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "next-themes";
import "./globals.css";
import NavbarContainer from "@/components/navigations/NavbarContainer";


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Sanjay Sakthivel",
  description: "Personal website of Sanjay Sakthivel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarContainer />
            <div className="flex min-h-screen flex-col justify-between items-center p-10">
              {children}
            </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
