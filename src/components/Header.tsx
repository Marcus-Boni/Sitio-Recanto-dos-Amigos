'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import { useTheme } from '@/contexts/ThemeContext';

import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { isDark } = useTheme();

  // Detectar scroll para fazer o header sticky
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll suave para as seções
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems: Array<{ label: string; id: string }> = [
    { label: 'Home', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Estrutura', id: 'structure' },
    { label: 'Fotos', id: 'gallery' },
    { label: 'Avaliações', id: 'testimonials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? `${
              isDark
                ? 'bg-gray-900/95 border-gray-700/50'
                : 'bg-white/95 border-gray-200/50'
            } shadow-lg border-b`
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => scrollToSection('hero')}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
              <Leaf className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-lg md:text-xl leading-tight transition-colors ${
                  isScrolled
                    ? isDark
                      ? 'text-green-300'
                      : 'text-green-800'
                    : 'text-white drop-shadow-lg'
                }`}
              >
                Sítio Recanto
              </span>
              <span
                className={`text-sm md:text-base leading-tight transition-colors ${
                  isScrolled
                    ? isDark
                      ? 'text-green-400'
                      : 'text-green-600'
                    : 'text-green-200 drop-shadow-lg'
                }`}
              >
                dos Amigos
              </span>
            </div>
          </motion.div>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isScrolled
                    ? isDark
                      ? 'text-gray-300 hover:text-green-400 hover:bg-gray-800/50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    : 'text-white hover:text-green-200 hover:bg-white/10'
                }`}
              >
                {item.label}
              </motion.button>
            ))}

            {/* CTA Button Desktop */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Reservar Agora
            </motion.button>

            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Menu Mobile e Tablet */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all duration-200 ${
                isScrolled
                  ? isDark
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  : 'text-white hover:text-green-200 hover:bg-white/10'
              }`}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
        {/* Menu Mobile Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className={`lg:hidden absolute top-full left-4 right-4 mt-2 rounded-xl shadow-2xl border ${
                isDark
                  ? 'bg-gray-900/95 border-gray-700'
                  : 'bg-white/95 border-gray-200'
              }`}
            >
              <div className="py-4">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-6 py-3 font-medium transition-all duration-200 ${
                      isDark
                        ? 'text-gray-300 hover:bg-gray-800/70 hover:text-green-400'
                        : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* CTA Button Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.05, duration: 0.2 }}
                  className="px-4 pt-2 pb-2"
                >
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg transition-all duration-200"
                  >
                    Reservar Agora
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>{' '}
      </nav>
    </motion.header>
  );
};

export default Header;
