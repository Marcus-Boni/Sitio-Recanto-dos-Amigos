// filepath: c:\Users\mgalv\Projetos-Programção\Projetos Treino\landing_page_sitio\src\app\page.tsx
'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Critical components loaded immediately
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

// Loading component for better UX
const LoadingSection = ({ className = '' }: { className?: string }) => (
  <div
    className={`min-h-[400px] flex items-center justify-center bg-gray-50 ${className}`}
  >
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-600">Carregando...</p>
    </div>
  </div>
);

// Optimized lazy loading with better loading states
const AccommodationsSection = dynamic(
  () => import('@/components/AccommodationsSection'),
  {
    ssr: false,
    loading: () => <LoadingSection />
  }
);

const NatureActivitiesSection = dynamic(
  () => import('@/components/NatureActivitiesSection'),
  {
    ssr: false,
    loading: () => <LoadingSection className="bg-green-50" />
  }
);

const GallerySection = dynamic(() => import('@/components/GallerySection'), {
  ssr: false,
  loading: () => <LoadingSection />
});

const TestimonialsSection = dynamic(
  () => import('@/components/TestimonialsSection'),
  {
    ssr: false,
    loading: () => <LoadingSection className="bg-blue-50" />
  }
);

const LocationContactSection = dynamic(
  () => import('@/components/LocationContactSection'),
  {
    ssr: false,
    loading: () => <LoadingSection />
  }
);

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: false,
  loading: () => <div className="min-h-96 bg-green-900"></div>
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="relative">
        <section id="inicio">
          <HeroSection />
        </section>

        <section id="sobre">
          <AboutSection />
        </section>

        <Suspense fallback={<LoadingSection />}>
          <section id="acomodacoes">
            <AccommodationsSection />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSection className="bg-green-50" />}>
          <section id="atividades">
            <NatureActivitiesSection />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <section id="galeria">
            <GallerySection />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSection className="bg-blue-50" />}>
          <section id="avaliacoes">
            <TestimonialsSection />
          </section>
        </Suspense>

        <Suspense fallback={<LoadingSection />}>
          <section id="contato">
            <LocationContactSection />
          </section>
        </Suspense>
      </main>

      <Suspense fallback={<div className="min-h-96 bg-green-900"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
