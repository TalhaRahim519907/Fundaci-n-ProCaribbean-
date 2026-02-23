import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fundación ProCaribbean",
  description:
    "Fundación ProCaribbean supports vulnerable communities in the Caribbean region and Indigenous peoples of Colombia.",
  keywords: [
    "Fundación ProCaribbean",
    "Colombia NGO",
    "Caribbean region support",
    "Indigenous cooperation",
    "Santa Marta foundation",
  ],
  openGraph: {
    title: "Fundación ProCaribbean",
    description:
      "Supporting Vulnerable Communities in the Caribbean Region and Indigenous Peoples of Colombia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
