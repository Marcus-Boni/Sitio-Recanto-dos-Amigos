"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Home, Star, MapPin, Users } from "lucide-react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: "Ambiente Super Agradável",
      description:
        "Um espaço pensado para proporcionar momentos únicos de relaxamento e conexão com a natureza.",
    },
    {
      icon: Leaf,
      title: "Conexão com a Natureza",
      description:
        "Cercado pela mata atlântica preservada, oferecendo ar puro e paisagens deslumbrantes.",
    },
    {
      icon: Star,
      title: "Preço Justo",
      description:
        "Excelente custo-benefício para sua família desfrutar de momentos inesquecíveis.",
    },
    {
      icon: Home,
      title: "Estrutura Completa",
      description:
        "Tudo que você precisa para uma estadia confortável e divertida.",
    },
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description:
        "No coração do interior de Guarapari, longe do estresse da cidade.",
    },
    {
      icon: Users,
      title: "Para Toda Família",
      description:
        "Espaços e atividades planejadas para pessoas de todas as idades.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-green-50"
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
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Leaf size={16} />
            Sobre o Sítio
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sua Experiência{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Inesquecível
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra um refúgio perfeito onde a natureza exuberante do Espírito
            Santo se encontra com o conforto e a hospitalidade que sua família
            merece. Um lugar especial para criar memórias que durarão para
            sempre.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Um Lugar Pensado Para Você
            </h3>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Localizado no tranquilo interior de Guarapari, nosso sítio
                oferece a combinação perfeita entre aventura e relaxamento.
                Aqui, você encontrará um ambiente
                <strong className="text-green-700">
                  {" "}
                  super agradável
                </strong>{" "}
                onde cada detalhe foi pensado para proporcionar momentos únicos.
              </p>

              <p>
                A{" "}
                <strong className="text-green-700">
                  conexão com a natureza
                </strong>{" "}
                é o nosso diferencial. Cercado pela mata atlântica preservada, o
                sítio oferece ar puro, paisagens deslumbrantes e a tranquilidade
                que só a natureza pode proporcionar.
              </p>

              <p>
                Acreditamos que experiências incríveis não precisam custar uma
                fortuna. Por isso, oferecemos um{" "}
                <strong className="text-green-700">preço justo</strong> e
                excelente custo-benefício, tornando possível que sua família
                desfrute de momentos especiais sem comprometer o orçamento.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-green-100 p-6 rounded-xl border-l-4 border-green-600"
            >
              <p className="text-green-800 font-medium text-lg">
                &quot;Mais do que um local para hospedagem, somos um portal para
                experiências autênticas em meio à natureza do Espírito
                Santo.&quot;
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                width={600}
                height={400}
                src="https://picsum.photos/800/600"
                alt="Vista do sítio com natureza exuberante"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfação</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">5★</div>
                  <div className="text-sm text-gray-600">Avaliação</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
