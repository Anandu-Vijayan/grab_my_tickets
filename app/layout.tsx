import type { Metadata } from "next"; 
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import Header from "@/components/Header";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";



export const metadata: Metadata = {
  title: "Grab My Ticket...",
  description: "Never Miss The Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ConvexClientProvider>
          <ClerkProvider>
            <Header />
            <SyncUserWithConvex/>
            {children}
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
