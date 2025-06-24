import { StaticImageData } from 'next/image';
import RocaImage1 from '../assets/images/Roca1.webp';
import RocaImage2 from '../assets/images/Roca2.webp';
import RocaImage3 from '../assets/images/Roca3.webp';
import RocaImage4 from '../assets/images/Roca4.webp';
import AcampamentoNoturno from '../assets/images/Acampamento_Noturno.webp';
import AreaExterna1 from '../assets/images/Area_Externa_1.webp';
import AreaExterna3 from '../assets/images/Area_Externa_3.webp';
import AreaExterna4 from '../assets/images/Area_Externa_4.webp';
import AreaExterna8 from '../assets/images/Area_Externa_8.webp';
import Lazer1 from '../assets/images/Lazer_1.webp';
import Lazer2 from '../assets/images/Lazer_2.webp';
import Acomodacoes1 from '../assets/images/Acomodacoes_1.webp';
import Acomodacoes2 from '../assets/images/Acomodacoes_2.webp';
import Acomodacoes3 from '../assets/images/Acomodacoes_3.webp';
import Acomodacoes4 from '../assets/images/Acomodacoes_4.webp';
import Acomodacoes5 from '../assets/images/Acomodacoes_5.webp';
import Acomodacoes6 from '../assets/images/Acomodacoes_6.webp';

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
      'Wi-Fi gratuito em todo o chalé'
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
    title: 'Observação de Aves',
    description:
      'Amanheça observando as diversas espécies de aves que habitam a região',
    image: RocaImage3
  },
  {
    title: 'Fotografia de Paisagens',
    description:
      'Capture a beleza natural do sítio e seus arredores com sua câmera',
    image: RocaImage2
  },
  {
    title: 'Acampamento Noturno',
    description:
      'Desfrute de uma noite sob as estrelas com um acampamento rústico',
    image: AcampamentoNoturno
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
    alt: 'Vista da montanha ao amanhecer',
    category: 'natureza'
  },
  {
    id: 3,
    src: RocaImage3,
    alt: 'Piscina com suporte para crianças',
    category: 'lazer'
  },
  {
    id: 4,
    src: RocaImage4,
    alt: 'Área verde com árvores nativas',
    category: 'natureza'
  },
  {
    id: 5,
    src: AreaExterna1,
    alt: 'Área externa com gramado',
    category: 'externa'
  },
  {
    id: 6,
    src: Acomodacoes5,
    alt: 'Varanda com vista para a mata',
    category: 'acomodacao'
  },
  {
    id: 7,
    src: AreaExterna3,
    alt: 'Área externa com churrasqueira',
    category: 'externa'
  },
  {
    id: 8,
    src: AreaExterna4,
    alt: 'Chalé principal com piscina',
    category: 'externa'
  },
  {
    id: 9,
    src: Lazer2,
    alt: 'Área de lazer com churrasqueira e Rede',
    category: 'lazer'
  },
  {
    id: 10,
    src: Acomodacoes6,
    alt: 'Cozinha completa da área externa',
    category: 'acomodacao'
  },
  {
    id: 11,
    src: AreaExterna8,
    alt: 'Vista panorâmica do sítio',
    category: 'externa'
  },
  {
    id: 12,
    src: Lazer1,
    alt: 'Piscina iluminada à noite',
    category: 'lazer'
  },
  {
    id: 13,
    src: Acomodacoes1,
    alt: 'Cozinha completa da área externa',
    category: 'acomodacao'
  },
  {
    id: 14,
    src: Acomodacoes2,
    alt: 'Suíte aconchegante com vista para a mata',
    category: 'acomodacao'
  },
  {
    id: 15,
    src: Acomodacoes3,
    alt: 'Cozinha equipada do chalé',
    category: 'acomodacao'
  },
  {
    id: 16,
    src: Acomodacoes4,
    alt: 'Sala de estar do chalé',
    category: 'acomodacao'
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
