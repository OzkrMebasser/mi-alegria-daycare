
import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fredoka } from 'next/font/google';
// import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import I18nProvider  from '@/hooks/I18nProvider';


const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const fredoka = Fredoka({ 
  subsets: ['latin'],
  variable: '--font-fredoka',
});

export const metadata: Metadata = {
  title: 'Mi Alegría Daycare - Where Joy and Learning Come Together',
  description: 'A nurturing daycare center providing bilingual education and care for children in Toronto.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`}>
      <body className="min-h-screen flex flex-col">
        <I18nProvider >
          {/* <Navbar /> */}
          <main className="flex-grow">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}