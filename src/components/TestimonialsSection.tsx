'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import React, { useState, useEffect } from 'react';

import { useTheme } from '../contexts/ThemeContext';
import { testimonials } from '../data/siteData';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const { theme } = useTheme();

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={20}
            className={`${
              index < rating ? 'text-yellow-300 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-blue-50 to-purple-50'
      }`}
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
                ? 'bg-yellow-900/50 text-yellow-300'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            <Heart size={16} />
            Avaliações dos Hóspedes
          </motion.div>{' '}
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            O Que Nossos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              Hóspedes
            </span>{' '}
            Dizem
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Experiências reais de famílias que já viveram momentos únicos em
            nosso sítio. Cada avaliação reflete nosso compromisso com a
            excelência.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="relative min-h-[26rem] flex items-center justify-center overflow-hidden">
            {' '}
            {/* Changed h-96 to min-h-[26rem] */}
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-8 md:p-12 rounded-2xl shadow-xl border text-center ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-white border-gray-100'
                  }`}
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-6"
                  >
                    <Quote size={24} className="text-white" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mb-6"
                  >
                    <StarRating
                      rating={testimonials[currentTestimonial]?.rating ?? 0}
                    />
                  </motion.div>

                  {/* Comment */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`text-lg md:text-xl leading-relaxed mb-8 font-medium italic ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}
                  >
                    &quot;{testimonials[currentTestimonial]?.comment}&quot;
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    {' '}
                    <h4
                      className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {testimonials[currentTestimonial]?.name}
                    </h4>
                    <p
                      className={`${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {testimonials[currentTestimonial]?.date}
                    </p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>{' '}
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-100'
            }`}
          >
            <ChevronLeft
              size={24}
              className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            />
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border ${
              theme === 'dark'
                ? 'bg-gray-800 border-gray-700'
                : 'bg-white border-gray-100'
            }`}
          >
            <ChevronRight
              size={24}
              className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 ${
                index === currentTestimonial
                  ? 'w-8 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full'
                  : 'w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              }}
              className={`p-6 rounded-xl shadow-lg border transition-all duration-300 cursor-pointer ${
                theme === 'dark'
                  ? `bg-gray-800 ${
                      index === currentTestimonial
                        ? 'border-yellow-500 ring-2 ring-yellow-400/30'
                        : 'border-gray-700 hover:border-yellow-500'
                    }`
                  : `bg-white ${
                      index === currentTestimonial
                        ? 'border-yellow-300 ring-2 ring-yellow-200'
                        : 'border-gray-100 hover:border-yellow-200'
                    }`
              }`}
              onClick={() => goToTestimonial(index)}
            >
              <div className="flex justify-between items-start mb-3">
                <StarRating rating={testimonial.rating} />{' '}
                <span
                  className={`text-xs ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  {testimonial.date}
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                &quot;{testimonial.comment}&quot;
              </p>

              <h4
                className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-8 rounded-2xl text-white text-center">
            <div className="grid sm:grid-cols-3 gap-8">
              <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                <div className="text-4xl font-bold">4.9</div>
                <div className="flex justify-center">
                  <StarRating rating={5} />
                </div>
                <div className="text-yellow-100">Avaliação Média</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                <div className="text-4xl font-bold">100%</div>
                <div className="text-yellow-100">Recomendação</div>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                <div className="text-4xl font-bold">100+</div>
                <div className="text-yellow-100">Hóspedes Satisfeitos</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
