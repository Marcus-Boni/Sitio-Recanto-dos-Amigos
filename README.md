# 🌿 Sítio Recanto dos Amigos - Landing Page

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss)

**Uma landing page moderna e responsiva para um sítio em Guarapari, ES**

🚀 Demo: <a href="https://sitio-recanto-dos-amigos.vercel.app/" target="_blank" rel="noreferrer">Sítio Recanto dos Amigos</a>

</div>

---

## 📋 Sobre o Projeto

Esta é uma landing page completa e responsiva desenvolvida para promover um sítio localizado no interior de Guarapari, ES, Brasil. O site foi criado com foco em destacar o ambiente agradável, preço justo e a conexão única com a natureza que o local oferece.

### 🎯 Objetivos

- **Conversão**: CTAs estratégicos para maximizar reservas
- **SEO**: Otimizado para mecanismos de busca
- **Performance**: Carregamento rápido e experiência fluida
- **Responsividade**: Funciona perfeitamente em todos os dispositivos
- **Acessibilidade**: Seguindo as melhores práticas de UX/UI

## ✨ Features

### 🏠 **Seções Principais**

- **Hero Section**: Carrossel de imagens com CTAs principais
- **Sobre**: Apresentação do sítio e seus diferenciais
- **Acomodações**: Detalhes das estruturas disponíveis
- **Atividades**: Experiências na natureza
- **Galeria**: Fotos do local com filtros e lightbox
- **Depoimentos**: Avaliações de hóspedes
- **Contato**: Formulário e informações de localização

### 🎨 **Design & UX**

- **Paleta Natural**: Cores inspiradas na natureza (verde, azul, terra)
- **Animações Suaves**: Transições com Framer Motion
- **Interface Moderna**: Design clean e profissional
- **Navegação Intuitiva**: Menu sticky e scroll suave

### ⚡ **Performance & Tecnologia**

- **Next.js 15.3.3**: Framework React de última geração
- **TypeScript**: Tipagem estática para maior confiabilidade
- **TailwindCSS 4.0**: Estilização utilitária moderna
- **Lazy Loading**: Carregamento otimizado de componentes
- **Image Optimization**: Imagens otimizadas automaticamente
- **Service Worker**: Cache inteligente para performance offline
- **Code Splitting**: Divisão automática de código para carregamento mais rápido
- **Critical CSS**: CSS crítico inline para renderização mais rápida
- **Resource Preloading**: Pré-carregamento de recursos críticos
- **WebP/AVIF**: Formatos de imagem modernos para menor tamanho

### 📱 **Funcionalidades Interativas**

- **Carrossel Hero**: Auto-play com controles manuais
- **Galeria Filtrada**: Categorização de fotos por tipo
- **Lightbox**: Visualização ampliada de imagens
- **Formulário Validado**: Validação em tempo real com React Hook Form
- **Menu Responsivo**: Navegação adaptativa para mobile
- **Touch Optimized**: Otimizado para dispositivos Android e iOS
- **Smooth Scrolling**: Rolagem suave entre seções
- **Loading States**: Estados de carregamento elegantes

## 🛠️ Tecnologias Utilizadas

### **Frontend**

- **Next.js 15.3.3** - Framework React
- **React 19.0.0** - Biblioteca UI
- **TypeScript 5.0** - Tipagem estática
- **TailwindCSS 4.0** - Framework CSS

### **Bibliotecas**

- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **React Hook Form** - Gerenciamento de formulários
- **React Intersection Observer** - Animações baseadas em scroll

### **Ferramentas de Desenvolvimento**

- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Prettier** - Formatação de código

## 🚀 Instalação {#installation}

### **Pré-requisitos**

- Node.js 18.17+
- npm, yarn, pnpm ou bun

### **Clonando o Repositório**

```bash
git clone <repository-url>
cd landing_page_sitio
```

### **Instalando Dependências**

```bash
# Com npm
npm install

# Com yarn
yarn install

# Com pnpm
pnpm install

# Com bun
bun install
```

### **Executando o Projeto**

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar build
npm start

# Linting
npm run lint
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 📁 Estrutura do Projeto

```
landing_page_sitio/
├── 📁 public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── 📁 src/
│   ├── 📁 app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página inicial
│   │   └── globals.css         # Estilos globais
│   ├── 📁 components/
│   │   ├── Header.tsx          # Cabeçalho e navegação
│   │   ├── HeroSection.tsx     # Seção principal
│   │   ├── AboutSection.tsx    # Sobre o sítio
│   │   ├── AccommodationsSection.tsx    # Acomodações
│   │   ├── NatureActivitiesSection.tsx # Atividades
│   │   ├── GallerySection.tsx  # Galeria de fotos
│   │   ├── TestimonialsSection.tsx     # Depoimentos
│   │   ├── LocationContactSection.tsx  # Contato
│   │   └── Footer.tsx          # Rodapé
│   ├── 📁 data/
│   │   └── siteData.ts         # Dados do site
│   └── 📁 assets/
│       └── 📁 images/          # Imagens do projeto
├── next.config.ts              # Configuração Next.js
├── tailwind.config.ts          # Configuração Tailwind
└── tsconfig.json              # Configuração TypeScript
```

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-green: #166534 /* Verde escuro */ --primary-blue: #1e40af
  /* Azul principal */ --accent-green: #22c55e /* Verde claro */
  --accent-blue: #3b82f6 /* Azul claro */ /* Cores Neutras */
  --earth-brown: #a3a3a3 /* Terra */ --warm-white: #fafafa /* Branco quente */
  --soft-gray: #f3f4f6 /* Cinza suave */;
```

## 📊 SEO & Performance

### **Otimizações SEO**

- ✅ Meta tags otimizadas
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Structured data (JSON-LD)

### **Performance**

- ✅ Image optimization
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Bundle optimization
- ✅ Cache estratégico

## 🚀 Deploy

### **Vercel (Recomendado)**

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### **Netlify**

```bash
# Build
npm run build

# Deploy pasta out/
```

### **Outras Plataformas**

O projeto é compatível com qualquer plataforma que suporte Next.js static export.

## 📝 Customização

### **Alterando Dados do Site**

Edite o arquivo `src/data/siteData.ts`:

```typescript
export const siteInfo: SiteInfo = {
  name: 'Seu Sítio',
  location: 'Sua Localização',
  description: 'Sua Descrição',
  // ... outros campos
};
```

### **Modificando Cores**

Ajuste as cores no `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        green: '#166534',
        blue: '#1e40af',
        // ...
      }
    }
  }
}
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">

**Desenvolvido com ❤️**

[⬆ Voltar ao topo](#top)

</div>
