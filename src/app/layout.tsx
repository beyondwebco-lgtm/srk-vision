import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const viewport: Viewport = {
  themeColor: "#6B1E35",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://srkvisions.com"),
  title: {
    default: "SRK Visions — Professional Photo Post-Production Studio",
    template: "%s | SRK Visions",
  },
  description:
    "SRK Visions — Established 2015 in Hyderabad. Professional photo post-production, colour correction, high-end retouching, image culling, and luxury album designing.",
  keywords: [
    "Photo editing services in Hyderabad",
    "Professional photo post-production services",
    "Wedding photo editing services",
    "High-end photo retouching",
    "Professional colour correction",
    "Wedding album designing",
    "Image culling selection",
    "SRK Visions Hyderabad"
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://srkvisions.com",
    siteName: "SRK Visions",
    title: "SRK Visions — Captured by You. Perfected by Us.",
    description: "Your Trusted Photo Post-Production Partner.",
    images: [{ url: "/assets/hero-bg.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="font-quicksand antialiased min-h-full flex flex-col bg-[#F8F5F0] text-[#727272] selection:bg-[#6B1E35] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
