import type {Metadata} from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Makara Pati | El Yapımı Kedi ve Köpek Mobilyaları',
  description: 'Doğal ahşaptan üretilen, şık ve konforlu kedi evleri, mama istasyonları ve duvar oyun parkları. Makara Pati kalitesiyle el yapımı tasarımlar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen bg-background text-foreground pb-20 md:pb-0">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
