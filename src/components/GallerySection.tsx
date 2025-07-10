'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { useTheme } from '../contexts/ThemeContext';
import { gallery, type GalleryItem } from '../data/siteData';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { theme } = useTheme();

  const categories = [
    { id: 'all', label: 'Todas', count: gallery.length },
    {
      id: 'externa',
      label: 'Áreas Externas',
      count: gallery.filter((item) => item.category === 'externa').length,
    },
    {
      id: 'lazer',
      label: 'Lazer',
      count: gallery.filter((item) => item.category === 'lazer').length,
    },
    {
      id: 'acomodacao',
      label: 'Acomodações',
      count: gallery.filter((item) => item.category === 'acomodacao').length,
    },
    {
      id: 'natureza',
      label: 'Natureza',
      count: gallery.filter((item) => item.category === 'natureza').length,
    },
  ];

  const filteredGallery =
    activeFilter === 'all'
      ? gallery
      : gallery.filter((item) => item.category === activeFilter);

  const openLightbox = (image: GalleryItem) => {
    document.body.style.overflow = 'hidden';
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    document.body.style.overflow = '';
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) {
      return;
    }

    const currentIndex = filteredGallery.findIndex(
      (item) => item.id === selectedImage.id
    );
    let newIndex;

    if (direction === 'prev') {
      newIndex =
        currentIndex > 0 ? currentIndex - 1 : filteredGallery.length - 1;
    } else {
      newIndex =
        currentIndex < filteredGallery.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredGallery[newIndex] ?? null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="gallery"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 ${
              theme === 'dark'
                ? 'bg-purple-900/50 text-purple-300'
                : 'bg-purple-100 text-purple-800'
            }`}
          >
            <Camera size={16} />
            Galeria de Fotos
          </motion.div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Conheça Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Espaços
            </span>
          </h2>

          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Cada canto do nosso sítio foi pensado para proporcionar momentos
            únicos. Explore através das imagens e imagine-se aqui.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-purple-900/50 border border-gray-700'
                    : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              <Filter size={16} />
              {category.label}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === category.id ? 'bg-white/20' : 'bg-gray-100'
                } 
                  ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}
                  ${
                    activeFilter === category.id
                      ? 'text-white'
                      : 'text-gray-500'
                  }
                `}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredGallery.map((image, index) => (
              <motion.div
                key={`${activeFilter}-${image.id}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
                onClick={() => openLightbox(image)}
              >
                <div className="relative aspect-square w-full h-0 pb-[100%] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                    style={{ objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-semibold mb-1">{image.alt}</h3>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>

                {/* Camera Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera size={16} className="text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
                theme === 'dark' ? 'bg-black/95' : 'bg-black/90'
              }`}
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                >
                  <X size={32} />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/20 p-2 rounded-full backdrop-blur-sm"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/20 p-2 rounded-full backdrop-blur-sm"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image */}
                <Image
                  width={800}
                  height={600}
                  src={selectedImage.src.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-sm text-white p-4 rounded-lg">
                  <h3 className="font-semibold mb-1">{selectedImage.alt}</h3>
                  <span className="text-sm bg-white/20 px-2 py-1 rounded-full capitalize">
                    {selectedImage.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl text-white">
            <Camera size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Gostou do que viu?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Reserve agora e viva esses momentos pessoalmente
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Camera size={20} />
              Fazer Reserva
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
