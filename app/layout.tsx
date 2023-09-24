import Header from "@/src/components/common/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "windy",
  description: "ride a bike in variety way",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
