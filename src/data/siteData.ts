import { StaticImageData } from 'next/image';
import RocaImage1 from '../assets/images/Roca1.webp';
import RocaImage2 from '../assets/images/Roca2.webp';
import RocaImage3 from '../assets/images/Roca3.webp';
import RocaImage4 from '../assets/images/Roca4.webp';

export interface SiteInfo {
  name: string;
  location: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  socialMedia: {
    instagram: string;
    linkGoogle: string;
    whatsapp: string;
  };
}

export interface Accommodation {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Amenity {
  name: string;
  icon: string;
}

export interface Activity {
  title: string;
  description: string;
  image: StaticImageData;
}

export interface GalleryItem {
  id: number;
  src: StaticImageData;
  alt: string;
  category: 'externa' | 'lazer' | 'acomodacao' | 'natureza';
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export const siteInfo: SiteInfo = {
  name: 'Sítio Recanto dos Amigos',
  location: 'Interior de Guarapari, ES, Brasil',
  description:
    'Seu refúgio perfeito em meio à natureza exuberante de Buenos Aires em Guarapari',
  address:
    'Buenos Aires na Rota da Ferradura, Próximo ao Sitío Riacho da Pedras, Guarapari - ES, CEP: 29200-000',
  phone: '(27) 99927-9173',
  email: 'contato@sitiorecantodosamigos.com.br',
  coordinates: {
    lat: -20.6176709,
    lng: -40.5817736
  },
  socialMedia: {
    instagram:
      'https://www.instagram.com/recan.todosamigos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    linkGoogle: 'https://g.co/kgs/vSM7BFt ',
    whatsapp:
      'https://wa.me/5527999279173?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20Sítio%20Recanto%20dos%20Amigos'
  }
};

export const accommodations: Accommodation[] = [
  {
    title: 'Chalé Principal',
    description: 'Espaço completo e aconchegante para uma estadia perfeita',
    icon: '🏡',
    features: [
      '2 suítes aconchegantes com vista para a mata',
      'Televisão com canais a cabo',
      'Casa totalmente equipada',
      'Banheiros privativos em cada suíte',
      'Área de estar espaçosa',
      'Varanda com vista panorâmica',
      'Wi-Fi gratuito em todo o chalé',
    ]
  }
];

export const amenities: Amenity[] = [
  { name: 'Piscina Adulto e Infantil', icon: '🏊' },
  { name: 'Churrasqueira Completa', icon: '🔥' },
  { name: 'Cozinha Equipada', icon: '👨‍🍳' },
  { name: 'Wi-Fi Gratuito', icon: '📶' },
  { name: 'Estacionamento', icon: '🚗' },
  { name: 'Espaço de Lazer', icon: '🏖️' },
  { name: 'Trilhas Ecológicas', icon: '🥾' },
  { name: 'Horta Orgânica', icon: '🌱' }
];

export const activities: Activity[] = [
  {
    title: 'Trilhas na Mata',
    description:
      'Explore as trilhas ecológicas ao redor do sítio e descubra a rica fauna e flora local',
    image: RocaImage1
  },
  {
    title: 'Banho de Cachoeira',
    description:
      'Aproveite as cachoeiras cristalinas a poucos minutos do sítio',
    image: RocaImage2
  },
  {
    title: 'Observação de Aves',
    description:
      'Amanheça observando as diversas espécies de aves que habitam a região',
    image: RocaImage3
  },
  {
    title: 'Pesca no Açude',
    description: 'Relaxe pescando no açude natural do sítio',
    image: RocaImage4
  }
];

export const gallery: GalleryItem[] = [
  {
    id: 1,
    src: RocaImage1,
    alt: 'Vista aérea do sítio',
    category: 'externa'
  },
  {
    id: 2,
    src: RocaImage2,
    alt: 'Piscina com deck de madeira',
    category: 'lazer'
  },
  {
    id: 3,
    src: RocaImage3,
    alt: 'Casa principal',
    category: 'acomodacao'
  },
  {
    id: 4,
    src: RocaImage4,
    alt: 'Área de churrasqueira',
    category: 'lazer'
  },
  {
    id: 5,
    src: RocaImage1,
    alt: 'Trilha na mata',
    category: 'natureza'
  },
  {
    id: 6,
    src: RocaImage2,
    alt: 'Quarto principal',
    category: 'acomodacao'
  },
  {
    id: 7,
    src: RocaImage3,
    alt: 'Nascer do sol',
    category: 'natureza'
  },
  {
    id: 8,
    src: RocaImage4,
    alt: 'Área de jogos',
    category: 'lazer'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Isadora Boni',
    rating: 5,
    comment:
      'Lugar maravilhoso, perto da natureza, piscina grande, área pra churrasco rústica linda, espaço grande de Gramado e suítes novas lindas. A vista da pedra e o acesso ao rio é o diferencial. Recomendo.',
    date: 'Maio 2025'
  },
  {
    id: 2,
    name: 'Jeferson Souza',
    rating: 5,
    comment:
      'Local muito agradável…atendeu todas minhas expectativas, sendo que a principal delas era ter paz ! ! !',
    date: 'Janeiro 2025'
  },
  {
    id: 3,
    name: 'Valquiria Galvão',
    rating: 5,
    comment:
      'Espaço maravilhoso! Suítes novas, vista linda, piscina bonita e aconchegante. Ótimo para relaxar em família, com espaço de gramado extenso e área de churrasco. Acesso ao rio.',
    date: 'Novembro 2024'
  },
  {
    id: 4,
    name: 'Irene Santos',
    rating: 5,
    comment:
      'Um lugar maravilhoso, que exala tranquilidade, um lugar de reflexão, lazer... Amei quero voltar em breve',
    date: 'Março 2022'
  }
];

// Objeto principal com todos os dados do sítio
export const siteData = {
  siteInfo,
  accommodations,
  amenities,
  activities,
  gallery,
  testimonials
};
