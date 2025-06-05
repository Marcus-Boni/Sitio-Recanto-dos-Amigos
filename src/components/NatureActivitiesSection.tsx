'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Eye, Fish, Mountain } from 'lucide-react';
import { activities } from '../data/siteData';

const NatureActivitiesSection: React.FC = () => {
  const activityIcons: Record<string, React.ComponentType<{size?: number; className?: string}>> = {
    'Trilhas na Mata': TreePine,
    'Banho de Cachoeira': Mountain,
    'Observação de Aves': Eye,
    'Pesca no Açude': Fish,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="activities" className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
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
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <TreePine size={16} />
            Atividades na Natureza
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Natureza
            </span>{' '}
            ao Redor
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra aventuras únicas em meio à mata atlântica preservada. Cada atividade 
            foi pensada para conectar você com a natureza exuberante do Espírito Santo.
          </p>
        </motion.div>

        {/* Activities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {activities.map((activity, index) => {
            const IconComponent = activityIcons[activity.title] || TreePine;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-green-200 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {activity.description}
                  </p>
                  
                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    <IconComponent size={16} />
                    Saber mais
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Nature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-green-600">5km</div>
                <div className="text-gray-600">Trilhas Ecológicas</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-gray-600">Cachoeiras Próximas</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-gray-600">Espécies de Aves</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600">Área Preservada</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 via-green-700 to-blue-600 p-8 rounded-2xl text-white">
            <TreePine size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Aventura e Tranquilidade te Esperam
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Conecte-se com a natureza e descubra por que nossos hóspedes consideram 
              esta uma experiência transformadora
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('gallery');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Eye size={20} />
              Ver Galeria de Fotos
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NatureActivitiesSection;
