"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/provider/ConvexClientProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import DeviceRestriction from "@/components/DeviceRestriction";
import useDeviceDetection from "@/hooks/useDeviceDetection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Move metadata to a separate file or keep it here without export
const metadata = {
  title: "Codey",
  description: "Share & run code snippets with your friends",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useDeviceDetection();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after the device detection is complete
    setIsLoading(false);
  }, []);

  if (isLoading) {
    // Optionally, you can return a loading spinner or placeholder here
    return null; // or a loading spinner component
  }

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/icon.png" />
          <Analytics />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 flex flex-col`}
        >
          <ConvexClientProvider>
            {isMobile ? <DeviceRestriction /> : children}
            <Toaster />
          </ConvexClientProvider>

          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
