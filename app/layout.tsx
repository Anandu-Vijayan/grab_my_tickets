import type { Metadata } from "next"; 
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import Header from "@/components/Header";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";
import { Toaster } from "@/components/ui/toaster";



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
      <body suppressHydrationWarning={true} >
        <ConvexClientProvider>
          <ClerkProvider>
            <Header />
            <SyncUserWithConvex/>
            {children}
            <Toaster/>
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
