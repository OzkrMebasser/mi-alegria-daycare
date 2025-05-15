import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import NavbarLayout from "@/components/NavbarLayout";
import WhatsAppButton from "@/components/WhatsAppBtn";
import Footer from "@/components/Footer";
import I18nProvider from "@/hooks/I18nProvider";
import 'flag-icons/css/flag-icons.min.css';
import "leaflet/dist/leaflet.css";



// const inter = Inter({
//   subsets: ["latin"],
//   variable: "--font-inter",
// });

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Mi Alegría Daycare - Where Joy and Learning Come Together",
  description:
    "A nurturing daycare center providing bilingual education and care for children in Victoria B.C.",
    icons: {
    icon: "/favicon.ico",
  },

  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable}`}>
      <body className="min-h-screen flex flex-col font-display ">
        <I18nProvider>
          <NavbarLayout />
          <WhatsAppButton />
          {/* Add your main content here */}
          {/* Main content */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
