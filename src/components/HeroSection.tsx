'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React, { useState, useEffect } from 'react';

import RocaImage1 from '../assets/images/Roca1.webp';
import RocaImage2 from '../assets/images/Roca2.webp';
import RocaImage3 from '../assets/images/Roca3.webp';
import RocaImage4 from '../assets/images/Roca4.webp';
import { useTheme } from '../contexts/ThemeContext';
import { siteInfo } from '../data/siteData';

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const { theme } = useTheme();

  // Array de imagens para o carrossel
  const heroImages: StaticImageData[] = [
    RocaImage1,
    RocaImage2,
    RocaImage3,
    RocaImage4,
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1.05 : 1,
            }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={image}
              alt={`Imagem ${index + 1} do Sítio Recanto dos Amigos`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={100}
            />
          </motion.div>
        ))}{' '}
        {/* Overlay Gradient */}
        <div
          className={`absolute inset-0 z-10 ${
            theme === 'dark'
              ? 'bg-gradient-to-b from-black/70 via-black/50 to-black/80'
              : 'bg-gradient-to-b from-black/50 via-black/30 to-black/60'
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm ${
                theme === 'dark'
                  ? 'bg-green-500/90 text-white'
                  : 'bg-green-600/90 text-white'
              }`}
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Disponível para Reservas
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              {siteInfo.name}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className={`text-xl md:text-2xl mb-8 max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-200'
              }`}
            >
              Natureza, Lazer e Paz com Preço Justo
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`text-lg mb-10 max-w-xl mx-auto ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-300'
              }`}
            >
              {siteInfo.description}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className={`px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                    : 'bg-gradient-to-r from-green-600 to-green-700 text-white'
                }`}
              >
                Verificar Disponibilidade
                <ChevronRight size={16} className="sm:w-5 sm:h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToGallery}
                className={`backdrop-blur-sm text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                  theme === 'dark'
                    ? 'bg-white/25 border-white/40 hover:bg-white/35'
                    : 'bg-white/20 border-white/30 hover:bg-white/30'
                }`}
              >
                <Play size={16} className="sm:w-5 sm:h-5" />
                Ver Fotos
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 ${
          theme === 'dark' ? 'text-gray-100' : 'text-white'
        }`}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium">Role para descobrir</span>{' '}
          <div
            className={`w-6 h-10 border-2 rounded-full flex justify-center ${
              theme === 'dark' ? 'border-gray-100/50' : 'border-white/50'
            }`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-1 h-3 rounded-full mt-2 ${
                theme === 'dark' ? 'bg-gray-100' : 'bg-white'
              }`}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? `${theme === 'dark' ? 'bg-gray-100' : 'bg-white'} scale-125`
                : `${
                    theme === 'dark'
                      ? 'bg-gray-100/50 hover:bg-gray-100/75'
                      : 'bg-white/50 hover:bg-white/75'
                  }`
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
