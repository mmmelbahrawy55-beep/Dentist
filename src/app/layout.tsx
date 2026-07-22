import type { Metadata } from "next";
import { Poppins, Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { LangProvider } from "@/components/ui/LanguageProvider";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Elite Dental Clinic | Premium Dental Care & Smile Design",
    template: "%s | Elite Dental Clinic",
  },
  description:
    "Experience world-class dental care at Elite Dental Clinic. From Hollywood smiles to dental implants, our award-winning team delivers exceptional results with luxury patient experience.",
  keywords: [
    "dental clinic", "dentist", "dental implants", "hollywood smile",
    "teeth whitening", "veneers", "orthodontics", "cosmetic dentistry",
    "emergency dentist", "pediatric dentistry", "root canal",
    "dental crowns", "gum treatment",
  ],
  authors: [{ name: "Elite Dental Clinic" }],
  creator: "Elite Dental Clinic",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elitedentalclinic.com",
    siteName: "Elite Dental Clinic",
    title: "Elite Dental Clinic | Premium Dental Care & Smile Design",
    description: "Experience world-class dental care with our award-winning team.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Elite Dental Clinic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Dental Clinic | Premium Dental Care",
    description: "World-class dental care with luxury patient experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${notoKufiArabic.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Elite Dental Clinic",
              description: "Premium dental care and smile design",
              url: "https://elitedentalclinic.com",
              telephone: "+1-555-0123",
              address: { "@type": "PostalAddress", streetAddress: "123 Dental Avenue", addressLocality: "Beverly Hills", addressRegion: "CA", postalCode: "90210" },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
              ],
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "1500" },
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased selection:bg-primary/20 selection:text-primary-dark">
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
