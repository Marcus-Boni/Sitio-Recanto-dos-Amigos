'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram, Link, MessageCircle } from 'lucide-react';
import React from 'react';

import { useTheme } from '../contexts/ThemeContext';
import { siteInfo } from '../data/siteData';

// interface ContactFormData {
//   name: string;
//   email: string;
//   phone: string;
//   checkIn: string;
//   checkOut: string;
//   guests: number;
//   message: string;
// }

const LocationContactSection: React.FC = () => {
  const { theme } = useTheme();

  // const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  // const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset
  // } = useForm<ContactFormData>();

  // const onSubmit = async (data: ContactFormData) => {
  //   setIsSubmitting(true);

  //   // Simular envio do formulário
  //   await new Promise(resolve => setTimeout(resolve, 2000));

  //   console.log('Dados do formulário:', data);
  //   setIsSubmitted(true);
  //   setIsSubmitting(false);
  //   reset();

  //   // Resetar estado após 3 segundos
  //   setTimeout(() => setIsSubmitted(false), 3000);
  // };

  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      url: siteInfo.socialMedia.instagram,
      color: 'hover:text-pink-600',
    },
    {
      icon: Link,
      label: 'Link Google',
      url: siteInfo.socialMedia.linkGoogle,
      color: 'hover:text-blue-600',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      url: siteInfo.socialMedia.whatsapp,
      color: 'hover:text-green-600',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 ${
        theme === 'dark'
          ? 'bg-gradient-to-b from-gray-900 to-gray-800'
          : 'bg-gradient-to-b from-white to-green-50'
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
                ? 'bg-green-900/50 text-green-300'
                : 'bg-green-100 text-green-800'
            }`}
          >
            <MapPin size={16} />
            Localização e Contato
          </motion.div>{' '}
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Vamos Planejar Sua{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Estadia Perfeita
            </span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Entre em contato conosco e garanta os melhores momentos para sua
            família em meio à natureza exuberante de Guarapari.
          </p>
        </motion.div>{' '}
        {/* Contact Info and Map - Centralized Layout */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {' '}
            {/* Contact Information */}
            <div
              className={`p-8 rounded-2xl shadow-xl border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-100'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {' '}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-start gap-4 p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-green-900/30' : 'bg-green-50'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-green-800' : 'bg-green-100'
                    }`}
                  >
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Endereço
                    </h4>
                    <p
                      className={`${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {siteInfo.address}
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-start gap-4 p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-50'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg ${
                      theme === 'dark' ? 'bg-blue-800' : 'bg-blue-100'
                    }`}
                  >
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      Telefone
                    </h4>
                    <p
                      className={`${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {siteInfo.phone}
                    </p>
                  </div>
                </motion.div>
              </div>{' '}
              {/* Social Media */}
              <div
                className={`mt-8 pt-6 border-t ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}
              >
                <h4
                  className={`font-semibold mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg transition-colors ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      } ${social.color}`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>{' '}
            {/* Map */}
            <div
              className={`p-8 rounded-2xl shadow-xl border ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700'
                  : 'bg-white border-gray-100'
              }`}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Localização
              </h3>{' '}
              <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.274358343467!2d-40.5817736!3d-20.6176709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb855f30c843a17%3A0xe371398ce31c7dc1!2sS%C3%ADtio%20Recanto%20dos%20Amigos!5e0!3m2!1spt-BR!2sbr!4v1749137074231!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Sítio Recanto dos Amigos"
                />
              </div>
              <div
                className={`mt-6 p-4 rounded-lg ${
                  theme === 'dark' ? 'bg-green-900/30' : 'bg-green-50'
                }`}
              >
                <p
                  className={`text-sm text-center font-medium ${
                    theme === 'dark' ? 'text-green-300' : 'text-green-800'
                  }`}
                >
                  📍 Clique no mapa para abrir no Google Maps e obter direções
                  detalhadas
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationContactSection;
