import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://srkvisions.com"),
  title: {
    default: "SRK Visions — Premium Photo Post-Production & Creative Studio",
    template: "%s | SRK Visions",
  },
  description:
    "Professional photo post-production and creative editing studio established in 2015 in Hyderabad, India. Specializing in high-end retouching, wedding colour correction, image culling, luxury album designing, and Instagram content.",
  keywords: [
    "Photo editing services in Hyderabad",
    "Professional photo post-production services",
    "Wedding photo editing services",
    "High-end photo retouching",
    "Professional colour correction",
    "Wedding album designing",
    "Photo editing outsourcing for photographers",
    "Image culling services in India",
    "SRK Visions Hyderabad",
    "Luxury photo studio Hyderabad"
  ],
  authors: [{ name: "SRK Visions" }],
  creator: "SRK Visions",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://srkvisions.com",
    siteName: "SRK Visions",
    title: "SRK Visions — Premium Photo Post-Production & Creative Studio",
    description:
      "Captured by You. Perfected by Us. Your trusted partner for professional wedding colour grading, high-end skin retouching, image culling, and luxury album designing.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
        width: 1600,
        height: 900,
        alt: "SRK Visions Editorial Wedding & Portrait Post-Production",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SRK Visions — Premium Photo Post-Production Studio",
    description:
      "Your Trusted Photo Post-Production Partner. High-end retouching, colour correction, and luxury album design.",
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://srkvisions.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
    >
      <body className="font-sans antialiased min-h-full flex flex-col bg-[#F8F7F4] text-[#171717] selection:bg-[#B49A78] selection:text-white">
        {/* Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "SRK Visions",
              "image": "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
              "@id": "https://srkvisions.com",
              "url": "https://srkvisions.com",
              "telephone": "+917032424878",
              "email": "srkvisions05@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mathaji Nagar, Brahman Wadi, Begumpet",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500016",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 17.4435,
                "longitude": 78.4682
              },
              "foundingDate": "2015",
              "priceRange": "$$",
              "sameAs": [
                "https://www.instagram.com/srk.visions/"
              ]
            }),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
