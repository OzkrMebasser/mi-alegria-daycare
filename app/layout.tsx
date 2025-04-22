import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import MainLayout from "@/components/MainLayout";
import Footer from "@/components/Footer";
import I18nProvider from "@/hooks/I18nProvider";
import 'flag-icons/css/flag-icons.min.css';
import "leaflet/dist/leaflet.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Mi Alegría Daycare - Where Joy and Learning Come Together",
  description:
    "A nurturing daycare center providing bilingual education and care for children in Victoria B.C.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <body className="min-h-screen flex flex-col">
        <I18nProvider>
          <MainLayout />
          {/* Main content */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
