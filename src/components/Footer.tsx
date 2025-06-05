'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone, Instagram,
  Link,
  MessageCircle,
  Heart,
  ArrowUp
} from 'lucide-react';
import { siteData } from '@/data/siteData';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-100">
                {siteData.siteInfo.name}
              </h3>
              <p className="text-green-200 mb-6 leading-relaxed">
                {siteData.siteInfo.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={siteData.siteInfo.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 px-4 py-2 rounded-lg transition-all duration-300"
                >
                  <Instagram size={18} />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href={siteData.siteInfo.socialMedia.linkGoogle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <Link size={18} />
                  <span className="text-sm">Link Google</span>
                </a>
                <a
                  href={siteData.siteInfo.socialMedia.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <MessageCircle size={18} />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-green-100">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-green-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-green-200 text-sm">
                      {siteData.siteInfo.address}
                    </p>
                    <p className="text-green-300 text-sm font-medium">
                      {siteData.siteInfo.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-green-300 flex-shrink-0" />
                  <a 
                    href={`tel:${siteData.siteInfo.phone}`}
                    className="text-green-200 text-sm hover:text-white transition-colors"
                  >
                    {siteData.siteInfo.phone}
                  </a>
                </div>
                {/* <div className="flex items-center gap-3">
                  <Mail size={18} className="text-green-300 flex-shrink-0" />
                  <a 
                    href={`mailto:${siteData.siteInfo.email}`}
                    className="text-green-200 text-sm hover:text-white transition-colors"
                  >
                    {siteData.siteInfo.email}
                  </a>
                </div> */}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-green-100">Navegação</h4>
              <nav className="space-y-2">
                {['Início', 'Sobre', 'Acomodações', 'Atividades', 'Galeria', 'Avaliações', 'Contato'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace('ç', 'c').replace('õ', 'o')}`}
                    className="block text-green-200 text-sm hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-green-200 text-sm">
                <span>© {currentYear} {siteData.siteInfo.name}. Todos os direitos reservados.</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-green-300 text-sm flex items-center gap-1">
                  Feito com <Heart size={14} className="text-red-400" fill="currentColor" /> Marcus para conectar você à natureza
                </span>
                
                <button
                  onClick={scrollToTop}
                  className="bg-green-700 hover:bg-green-600 p-2 rounded-full transition-colors duration-300 group"
                  aria-label="Voltar ao topo"
                >
                  <ArrowUp size={18} className="group-hover:transform group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
