import type { Metadata, Viewport } from "next";
import { DataProvider } from "@/providers/DataProvider";
import { AuthProvider } from "@/providers/AuthProvider";
import { UserDataProvider } from "@/providers/UserDataProvider";
import { BottomNav } from "@/components/layout/BottomNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pokedex",
  description:
    "The complete Pokemon encyclopedia with walkthroughs, team builder & social features",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Pokedex",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ef4444" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="antialiased bg-gray-50 dark:bg-gray-900">
        <AuthProvider>
          <UserDataProvider>
            <DataProvider>
              <div className="pb-16">{children}</div>
              <BottomNav />
            </DataProvider>
          </UserDataProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
