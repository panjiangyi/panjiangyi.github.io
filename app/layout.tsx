import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MCP Server Examples - Test Your MCP Client Implementation",
  description:
    "Test your MCP client implementation with SSE, Streamable HTTP, and WebSocket server examples.",
  generator: "v0.app",
  keywords: [
    "MCP",
    "Model Context Protocol",
    "MCP Server",
    "MCP Client",
    "SSE",
    "WebSocket",
    "HTTP Streaming",
    "Developer Tools",
  ],
  openGraph: {
    title: "MCP Server Examples - Test Your MCP Client",
    description:
      "Professional MCP server examples for comprehensive client testing",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
