// filepath: c:\Users\mgalv\Projetos-Programção\Projetos Treino\landing_page_sitio\src\app\page.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Importação dos componentes principais
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';

// Importação lazy dos componentes para otimização de performance
const AccommodationsSection = dynamic(() => import('@/components/AccommodationsSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Carregando...</div>
});

const NatureActivitiesSection = dynamic(() => import('@/components/NatureActivitiesSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Carregando...</div>
});

const GallerySection = dynamic(() => import('@/components/GallerySection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Carregando...</div>
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Carregando...</div>
});

const LocationContactSection = dynamic(() => import('@/components/LocationContactSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Carregando...</div>
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="min-h-96 bg-green-900">Carregando...</div>
});

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header com navegação fixa */}
      <Header />
      
      {/* Conteúdo principal */}
      <main className="relative">
        {/* Seção Hero - Primeira impressão */}
        <section id="inicio">
          <HeroSection />
        </section>

        {/* Seção Sobre - Informações sobre o sítio */}
        <section id="sobre">
          <AboutSection />
        </section>

        {/* Seção Acomodações - Estrutura e comodidades */}
        <section id="acomodacoes">
          <AccommodationsSection />
        </section>

        {/* Seção Atividades na Natureza */}
        <section id="atividades">
          <NatureActivitiesSection />
        </section>

        {/* Seção Galeria de Fotos */}
        <section id="galeria">
          <GallerySection />
        </section>

        {/* Seção Avaliações dos Hóspedes */}
        <section id="avaliacoes">
          <TestimonialsSection />
        </section>

        {/* Seção Localização e Contato */}
        <section id="contato">
          <LocationContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
