import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'arial',
  ],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  fallback: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sitio-recanto-dos-amigos.vercel.app/'),
  title:
    'Sítio Recanto dos Amigos - Turismo Rural em Guarapari, ES | Natureza e Tranquilidade',
  description:
    'Venha conhecer o Sítio Recanto dos Amigos em Guarapari, ES. Ambiente familiar, contato com a natureza, acomodações confortáveis e preço justo. Reserve sua estadia no interior capixaba!',
  keywords: [
    'sítio guarapari',
    'turismo rural espírito santo',
    'pousada guarapari',
    'natureza es',
    'hospedagem rural',
    'Recanto dos Amigos',
    'interior guarapari',
    'agroturismo',
    'ecoturismo',
    'família natureza',
  ],
  authors: [{ name: 'Sítio Recanto dos Amigos' }],
  creator: 'Sítio Recanto dos Amigos',
  publisher: 'Sítio Recanto dos Amigos',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Sítio Recanto dos Amigos',
    title: 'Sítio Recanto dos Amigos - Turismo Rural em Guarapari, ES',
    description:
      'Ambiente familiar, contato com a natureza, acomodações confortáveis e preço justo no interior de Guarapari, Espírito Santo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sítio Recanto dos Amigos - Turismo Rural em Guarapari, ES',
    description:
      'Ambiente familiar, contato com a natureza, acomodações confortáveis e preço justo no interior de Guarapari, ES.',
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  alternates: {
    canonical: '/',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5.0,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#166534' },
    { media: '(prefers-color-scheme: dark)', color: '#166534' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#166534" />
        <meta name="msapplication-TileColor" content="#166534" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" href="/leaf.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=yes" />

        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
