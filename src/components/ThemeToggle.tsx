'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import React from 'react';

import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-3 rounded-full transition-all duration-300 
        ${
          isDark
            ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400 border border-gray-600'
            : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-md'
        }
        hover:scale-105 active:scale-95
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Mudar para tema ${isDark ? 'claro' : 'escuro'}`}
    >
      <motion.div
        key={theme}
        initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="w-5 h-5"
      >
        {isDark ? (
          <Sun className="w-full h-full" />
        ) : (
          <Moon className="w-full h-full" />
        )}
      </motion.div>

      {/* Tooltip */}
      <div
        className={`
        absolute -bottom-12 left-1/2 transform -translate-x-1/2
        px-2 py-1 rounded text-xs font-medium whitespace-nowrap
        opacity-0 pointer-events-none transition-opacity duration-200
        hover:opacity-100 group-hover:opacity-100
        ${
          isDark
            ? 'bg-gray-700 text-white border border-gray-600'
            : 'bg-gray-800 text-white'
        }
      `}
      >
        {isDark ? 'Tema claro' : 'Tema escuro'}
        <div
          className={`
          absolute top-[-4px] left-1/2 transform -translate-x-1/2
          w-2 h-2 rotate-45
          ${
            isDark
              ? 'bg-gray-700 border-l border-t border-gray-600'
              : 'bg-gray-800'
          }
        `}
        />
      </div>
    </motion.button>
  );
};

export default ThemeToggle;
