import "./globals.css";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/StyledComponentRegistry";

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
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
