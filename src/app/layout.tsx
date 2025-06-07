import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://sitio-recanto-dos-amigos.vercel.app/'
  ),
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
    'família natureza'
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
      'max-snippet': -1
    }
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Sítio Recanto dos Amigos',
    title: 'Sítio Recanto dos Amigos - Turismo Rural em Guarapari, ES',
    description:
      'Ambiente familiar, contato com a natureza, acomodações confortáveis e preço justo no interior de Guarapari, Espírito Santo.'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sítio Recanto dos Amigos - Turismo Rural em Guarapari, ES',
    description:
      'Ambiente familiar, contato com a natureza, acomodações confortáveis e preço justo no interior de Guarapari, ES.'
  },
  verification: {
    google: 'your-google-site-verification-code'
  },
  alternates: {
    canonical: '/'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5.0, // Allow user zooming up to 5x
  themeColor: '#166534'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="theme-color" content="#166534" />
        <meta name="msapplication-TileColor" content="#166534" />
        <link rel="icon" href="/leaf.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="format-detection" content="telephone=yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
